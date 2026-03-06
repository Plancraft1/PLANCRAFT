const PREPR_API_URL = "https://mutation.prepr.io/content_items";
const ACCESS_TOKEN = process.env.PREPR_MUTATION_ACCESS_TOKEN;
const ARTICLE_CATEGORY_MODEL_ID = "70475afa-019a-406f-a17b-fdc3cb18f480";

if (!ACCESS_TOKEN) {
  console.error("Missing PREPR_MUTATION_ACCESS_TOKEN environment variable");
  process.exit(1);
}

const categories = [
  { name: "Pasportizace", slug: "pasportizace" },
  { name: "Energetická úspornost", slug: "energeticka-uspornost" },
  { name: "Design due diligence", slug: "design-due-diligence" },
];

async function createCategory(name: string, slug: string) {
  const response = await fetch(PREPR_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      model: { id: ARTICLE_CATEGORY_MODEL_ID },
      locales: ["cs-CZ"],
      workflow_stage: {
        "cs-CZ": "Done",
      },
      publish_on: {
        "cs-CZ": Math.floor(Date.now() / 1000),
      },
      slug: {
        "cs-CZ": slug,
      },
      items: {
        "cs-CZ": {
          article_category_name: { body: name },
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create "${name}": ${response.status} ${error}`);
  }

  return response.json();
}

async function main() {
  console.log("Seeding article categories...\n");

  for (const { name, slug } of categories) {
    try {
      await createCategory(name, slug);
      console.log(`  ✓ Created: ${name} (${slug})`);
    } catch (error) {
      console.error(
        `  ✗ ${name}: ${error instanceof Error ? error.message : error}`
      );
    }
  }

  console.log("\nDone.");
}

main();
