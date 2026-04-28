export {};

import * as fs from "fs";
import * as path from "path";

const PREPR_ASSETS_URL = "https://mutation.prepr.io/assets";
const PREPR_CONTENT_URL = "https://mutation.prepr.io/content_items";
const ACCESS_TOKEN = process.env.PREPR_MUTATION_ACCESS_TOKEN;

// Article configuration
const ARTICLE_ID = "1ec4db8a-32a9-4155-97a5-ce80853fccfe";
const ARTICLE_MODEL_ID = "0ff51361-e616-4692-a975-611eda579f00";
const CATEGORY_ID = "4ba09063-0a63-4cbe-9766-ebb40f0c8e29"; // Pasportizace
const NEXT_ARTICLE_ID = "ab6862be-f550-4780-a907-c69b6a5a92b4";

const ARTICLE_TITLE = "ZŠ Mánesova: Když se projekt od A do Z setká s realitou";
const ARTICLE_SLUG = "zs-manesova-kdyz-se-projekt-od-a-do-z-setka-s-realitou";

// Image metadata
const imageInfo: Record<string, string> = {
  image1: "ZŠ Mánesova hřiště - hlavní foto",
  image2: "ZŠ Mánesova - úvod článku",
  image3: "ZŠ Mánesova - detail",
  image4: "ZŠ Mánesova - venkovní prostory",
  image5: "ZŠ Mánesova - detail 2",
  image6: "ZŠ Mánesova - autorský dozor",
  image7: "ZŠ Mánesova - realizace",
  image8: "ZŠ Mánesova - finální stav",
};

if (!ACCESS_TOKEN) {
  console.error("Missing PREPR_MUTATION_ACCESS_TOKEN environment variable");
  process.exit(1);
}

// --- Image extraction and upload ---

async function extractImagesFromMarkdown(): Promise<
  Map<string, { base64: string; mimeType: string }>
> {
  const mdPath = path.join(__dirname, "case-study.md");
  const content = fs.readFileSync(mdPath, "utf-8");
  const images = new Map<string, { base64: string; mimeType: string }>();

  const regex = /^\[(image\d+)\]: <data:(image\/\w+);base64,([^>]+)>/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    images.set(match[1], { base64: match[3], mimeType: match[2] });
  }

  return images;
}

async function uploadImage(
  name: string,
  base64Data: string,
  mimeType: string
): Promise<string | null> {
  const buffer = Buffer.from(base64Data, "base64");
  const ext = mimeType === "image/png" ? "png" : "jpg";
  const filename = `${name}.${ext}`;

  try {
    const fileBlob = new Blob([buffer], { type: mimeType });
    const formData = new FormData();
    formData.append("source", fileBlob, filename);
    formData.append("name", imageInfo[name] || name);

    const response = await fetch(PREPR_ASSETS_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      body: formData,
    });

    if (!response.ok) {
      console.error(`  ✗ Failed to upload ${name}: ${response.status}`);
      return null;
    }

    const result = await response.json();
    console.log(`  ✓ Uploaded ${name} → ${result.id}`);
    return result.id;
  } catch (error) {
    console.error(`  ✗ Error uploading ${name}:`, error);
    return null;
  }
}

// --- Article content builder ---

function buildArticleContent(assetIds: Record<string, string>) {
  const content = [
    { format: "H2", body: "Chyba za 400 000 Kč" },
    {
      format: null,
      body: "<p>Objevila se uprostřed realizace multifunkčního hřiště pro ZŠ Mánesova v Otrokovicích. Investor nervózní, termíny v ohrožení, rozpočet překročený.</p>",
    },
    {
      format: null,
      body: "<p>Tohle je ten moment, kdy se pozná, jestli jste projektanti, kteří za svou prací stojí, nebo jestli se začnete schovávat.</p>",
    },
    { asset: assetIds.image1 },
    { format: "H2", body: "Velký projekt pro velkou školu" },
    {
      format: null,
      body: "<p>Základní škola Mánesova potřebovala nové venkovní zázemí. Moderní multifunkční hřiště, které poslouží žákům i veřejnosti. Nic mega komplexního, ale pořádně udělaný projekt od začátku do konce.</p>",
    },
    {
      format: null,
      body: "<p>A když říkáme od začátku, myslíme tím opravdu od první skici až po slavnostní otevření. Architektonická studie, všechny fáze dokumentace, vyřizování povolení, prováděcí projekt a autorský dozor. Komplexní řešení v jedněch rukou – což zní hezky v prezentaci, ale v realitě to znamená rok a půl práce, desítky jednání s úřady a neustálou bdělost nad detaily.</p>",
    },
    {
      format: null,
      body: "<p><strong>Navrhli jsme jim celé venkovní prostory</strong></p>",
    },
    {
      format: null,
      body: "<ul><li>Nové multifunkční sportovní plochy</li><li>Florbalové hřiště</li><li>Doskočiště pro skok daleký</li><li>Sklad náčiní</li><li>Dva altány</li></ul>",
    },
    { asset: assetIds.image4 },
    { format: "H2", body: "Proč to nebylo jenom rýsování" },
    {
      format: null,
      body: "<p>Když děláte projekt pro veřejný sektor, nejde jenom o to nakreslit pár čar. Jde o to:</p>",
    },
    {
      format: null,
      body: "<p><strong>Předvídat problémy.</strong> Ne každá komplikace je vidět v první fázi. Právě proto jsme věnovali detailní péči přípravě a neustále přemýšleli nad tím, co může pokazit stavbu v pozdějších fázích.</p>",
    },
    {
      format: null,
      body: "<p><strong>Komunikovat s úřady.</strong> Získat stavební povolení pro veřejný projekt není procházka růžovým sadem. Vyžaduje to znalost procesů, trpělivost a schopnost vysvětlit technické detaily srozumitelně.</p>",
    },
    {
      format: null,
      body: "<p><strong>Být přítomni na stavbě.</strong> Autorský dozor pro nás není formální záležitost. Kontrolujeme, jestli se staví podle projektu, a když je potřeba, řešíme problémy přímo na místě.</p>",
    },
    { asset: assetIds.image6 },
    { format: "H2", body: "Když přijde krize…" },
    {
      format: null,
      body: "<p>A pak to přišlo. Chyba v projektu. Vícepráce v hodnotě <strong>400 000 Kč</strong>.</p>",
    },
    { format: null, body: "<p>V tu chvíli máte dvě možnosti:</p>" },
    {
      format: null,
      body: "<ol><li>Dělat, že o ničem nevíte a nechat to na někom jiném</li><li>Vzít to za své a rychle to vyřešit</li></ol>",
    },
    { format: null, body: "<p>My jsme zvolili druhou variantu.</p>" },
    {
      format: null,
      body: "<p><strong>A proto všechno dopadlo dobře</strong></p>",
    },
    {
      format: null,
      body: "<ul><li>Reagovali jsme okamžitě, ne za týden</li><li>Navrhli jsme změnu skladby, která problém vyřešila</li><li>Komunikovali jsme transparentně s investorem i technickým dozorem</li><li>Zajistili jsme, že změna neprodlouží termín ani neohrozí rozpočet</li></ul>",
    },
    {
      format: null,
      body: "<p>Investor a technický dozor investora ocenili rychlost naší reakce. Projekt pokračoval podle plánu a byla provedena úspěšná kolaudace.</p>",
    },
    { asset: assetIds.image7 },
    { format: "H2", body: "A jak to vypadá dnes?" },
    {
      format: null,
      body: "<p>Žáci ZŠ Mánesova běhají po novém hřišti. Město Otrokovice má moderní venkovní zázemí, které slouží škole i veřejnosti.</p>",
    },
    {
      format: null,
      body: "<p>A my jsme si z toho projektu odnesli potvrzení, že komplexní přístup dává smysl. Když jste u projektu od první skici až po kolaudaci, dokážete reagovat rychle, protože znáte každý detail.</p>",
    },
    { asset: assetIds.image8 },
    {
      format: null,
      body: "<p><strong>Nejsme jen projektanti, kteří odevzdají výkresy a zmizí.</strong><br/>Jsme tým, který za svou prací stojí – i když to znamená řešit komplikace, které nikdo nečekal.</p>",
    },
    {
      format: null,
      body: '<p><em>„Finální slavnostní otevření hřiště bylo velkým úspěchem. Oceňujeme, že Plancraft dokázal projekt zpracovat kompletně od začátku až do kolaudace a zajistil, aby vše proběhlo v pořádku a v souladu s projektem."</em></p>',
    },
    {
      format: null,
      body: "<p><strong>— Odbor investic Města Otrokovice</strong></p>",
    },
    {
      format: null,
      body: "<p><strong>Máte projekt, který potřebuje komplexní řešení?</strong><br/>Rádi vám ukážeme, jak pracujeme.</p>",
    },
  ];

  // Convert to Prepr format
  return content
    .filter((item) => !("asset" in item) || item.asset)
    .map((item) => {
      if ("asset" in item && item.asset) {
        return { items: [{ id: item.asset }], label: "Asset" };
      }
      return { label: "Text", format: item.format, body: item.body };
    });
}

// --- Article create/update ---

async function upsertArticle(assetIds: Record<string, string>) {
  const articleContent = buildArticleContent(assetIds);
  const coverImageId = assetIds.image2;

  const payload = {
    model: { id: ARTICLE_MODEL_ID },
    locales: ["cs-CZ"],
    workflow_stage: { "cs-CZ": "Done" },
    publish_on: { "cs-CZ": Math.floor(Date.now() / 1000) },
    slug: { "cs-CZ": ARTICLE_SLUG },
    items: {
      "cs-CZ": {
        article_title: { body: ARTICLE_TITLE },
        article_cover: { items: [{ id: coverImageId }] },
        article_category: { items: [{ id: CATEGORY_ID }] },
        article_next_articles: { items: [{ id: NEXT_ARTICLE_ID }] },
        article_content: { items: articleContent },
      },
    },
  };

  // Try PUT first (update), fall back to POST (create)
  let response = await fetch(`${PREPR_CONTENT_URL}/${ARTICLE_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 404) {
    console.log("  Article not found, creating new...");
    response = await fetch(PREPR_CONTENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
  }

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to upsert article: ${response.status} ${error}`);
  }

  return response.json();
}

// --- Main ---

async function main() {
  console.log("=== Seeding ZŠ Mánesova Article ===\n");

  // Step 1: Extract and upload images
  console.log("1. Extracting images from case-study.md...");
  const images = await extractImagesFromMarkdown();
  console.log(`   Found ${images.size} images\n`);

  console.log("2. Uploading images to Prepr...");
  const assetIds: Record<string, string> = {};
  for (const [name, data] of images) {
    const id = await uploadImage(name, data.base64, data.mimeType);
    if (id) assetIds[name] = id;
  }
  console.log(`   Uploaded ${Object.keys(assetIds).length} images\n`);

  // Step 2: Create/update article with ALL fields
  console.log("3. Upserting article with all fields...");
  const result = await upsertArticle(assetIds);
  console.log(`   ✓ Article ID: ${result.id}`);
  console.log(`   ✓ Title: ${ARTICLE_TITLE}`);
  console.log(`   ✓ Slug: ${ARTICLE_SLUG}`);
  console.log(`   ✓ Cover: image2`);
  console.log(`   ✓ Category: Pasportizace`);
  console.log(`   ✓ Content: ${buildArticleContent(assetIds).length} blocks`);

  console.log("\n=== Done ===");
}

main().catch(console.error);
