export {};

const PREPR_CONTENT_URL = "https://mutation.prepr.io/content_items";
const ACCESS_TOKEN = process.env.PREPR_MUTATION_ACCESS_TOKEN;
const ARTICLE_ID = "1ec4db8a-32a9-4155-97a5-ce80853fccfe";

// Category ID for "Pasportizace"
const CATEGORY_ID = "4ba09063-0a63-4cbe-9766-ebb40f0c8e29";

// Use image2 as cover (the main header image from the blog)
const COVER_IMAGE_ID = "2892dba3-7d9a-4ecc-8329-ed2d2e549d8e";

// Link to next article
const NEXT_ARTICLE_ID = "ab6862be-f550-4780-a907-c69b6a5a92b4";

if (!ACCESS_TOKEN) {
  console.error("Missing PREPR_MUTATION_ACCESS_TOKEN environment variable");
  process.exit(1);
}

async function updateArticleFields() {
  const response = await fetch(`${PREPR_CONTENT_URL}/${ARTICLE_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      locales: ["cs-CZ"],
      slug: {
        "cs-CZ": "zs-manesova-kdyz-se-projekt-od-a-do-z-setka-s-realitou",
      },
      items: {
        "cs-CZ": {
          article_title: {
            body: "ZŠ Mánesova: Když se projekt od A do Z setká s realitou",
          },
          article_cover: {
            items: [{ id: COVER_IMAGE_ID }],
          },
          article_category: {
            items: [{ id: CATEGORY_ID }],
          },
          article_next_articles: {
            items: [{ id: NEXT_ARTICLE_ID }],
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to update article: ${response.status} ${error}`);
  }

  return response.json();
}

async function main() {
  console.log("Updating article fields...\n");

  try {
    const result = await updateArticleFields();
    console.log(
      "  ✓ Article Title: ZŠ Mánesova: Když se projekt od A do Z setká s realitou"
    );
    console.log(
      "  ✓ Slug: zs-manesova-kdyz-se-projekt-od-a-do-z-setka-s-realitou"
    );
    console.log("  ✓ Article Cover: image2 (ZŠ Mánesova - úvod článku)");
    console.log("  ✓ Article Category: Pasportizace");
    console.log(
      "  ✓ Next Article linked: ab6862be-f550-4780-a907-c69b6a5a92b4"
    );
  } catch (error) {
    console.error(
      `  ✗ Error: ${error instanceof Error ? error.message : error}`
    );
  }

  console.log("\nDone.");
}

main();
