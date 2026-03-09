import * as fs from "fs";
import * as path from "path";

const PREPR_ASSETS_URL = "https://mutation.prepr.io/assets";
const PREPR_CONTENT_URL = "https://mutation.prepr.io/content_items";
const ACCESS_TOKEN = process.env.PREPR_MUTATION_ACCESS_TOKEN;
const ARTICLE_ID = "1ec4db8a-32a9-4155-97a5-ce80853fccfe";

if (!ACCESS_TOKEN) {
  console.error("Missing PREPR_MUTATION_ACCESS_TOKEN environment variable");
  process.exit(1);
}

// Image names and descriptions for the blog article
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

// Blog article uses these images in order:
// Header: image2
// After intro: image1
// After outdoor spaces: image4
// After "Proč to nebylo": image6
// After crisis resolution: image7
// Final: image8

async function extractImagesFromMarkdown(): Promise<
  Map<string, { base64: string; mimeType: string }>
> {
  const mdPath = path.join(__dirname, "case-study.md");
  const content = fs.readFileSync(mdPath, "utf-8");

  const images = new Map<string, { base64: string; mimeType: string }>();

  // Match [imageN]: <data:image/...;base64,...>
  const regex = /^\[(image\d+)\]: <data:(image\/\w+);base64,([^>]+)>/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const imageName = match[1];
    const mimeType = match[2];
    const base64Data = match[3];
    images.set(imageName, { base64: base64Data, mimeType });
    console.log(`  Found ${imageName} (${mimeType})`);
  }

  return images;
}

async function uploadImage(
  name: string,
  base64Data: string,
  mimeType: string
): Promise<string | null> {
  // Convert base64 to buffer
  const buffer = Buffer.from(base64Data, "base64");

  // Determine file extension
  const ext = mimeType === "image/png" ? "png" : "jpg";
  const filename = `${name}.${ext}`;

  // Save to temp file
  const tempPath = path.join(__dirname, filename);
  fs.writeFileSync(tempPath, buffer);

  try {
    // Create form data using fetch with File API
    const fileBlob = new Blob([buffer], { type: mimeType });

    const formData = new FormData();
    formData.append("source", fileBlob, filename);
    formData.append("name", imageInfo[name] || name);

    const response = await fetch(PREPR_ASSETS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(
        `  ✗ Failed to upload ${name}: ${response.status} ${error}`
      );
      return null;
    }

    const result = await response.json();
    console.log(`  ✓ Uploaded ${name} → ID: ${result.id}`);
    return result.id;
  } finally {
    // Cleanup temp file
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function updateArticleWithImages(assetIds: Map<string, string>) {
  // Build the article content with images inserted at appropriate positions
  // Based on the blog article structure:
  // - After H2 "Chyba za 400 000 Kč" intro paragraphs → image1
  // - After H2 "Velký projekt" and list → image4
  // - After H2 "Proč to nebylo" section → image6
  // - After H2 "Když přijde krize" resolution → image7
  // - After H2 "A jak to vypadá" → image8

  const contentItems = [
    { format: "H2", body: "Chyba za 400 000 Kč" },
    {
      format: null,
      body: "<p>Objevila se uprostřed realizace multifunkčního hřiště pro ZŠ Mánesova v Otrokovicích. Investor nervózní, termíny v ohrožení, rozpočet překročený.</p>",
    },
    {
      format: null,
      body: "<p>Tohle je ten moment, kdy se pozná, jestli jste projektanti, kteří za svou prací stojí, nebo jestli se začnete schovávat.</p>",
    },
    // Insert image1 here
    { asset: assetIds.get("image1") },
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
    // Insert image4 here
    { asset: assetIds.get("image4") },
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
    // Insert image6 here
    { asset: assetIds.get("image6") },
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
    // Insert image7 here
    { asset: assetIds.get("image7") },
    { format: "H2", body: "A jak to vypadá dnes?" },
    {
      format: null,
      body: "<p>Žáci ZŠ Mánesova běhají po novém hřišti. Město Otrokovice má moderní venkovní zázemí, které slouží škole i veřejnosti.</p>",
    },
    {
      format: null,
      body: "<p>A my jsme si z toho projektu odnesli potvrzení, že komplexní přístup dává smysl. Když jste u projektu od první skici až po kolaudaci, dokážete reagovat rychle, protože znáte každý detail.</p>",
    },
    // Insert image8 here
    { asset: assetIds.get("image8") },
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
  const preprItems = contentItems
    .filter((item) => {
      // Skip if asset reference but no ID
      if ("asset" in item && !item.asset) return false;
      return true;
    })
    .map((item) => {
      if ("asset" in item && item.asset) {
        return {
          items: [{ id: item.asset }],
          label: "Asset",
        };
      }
      return {
        label: "Text",
        format: item.format,
        body: item.body,
      };
    });

  // Update article with PUT
  const response = await fetch(`${PREPR_CONTENT_URL}/${ARTICLE_ID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      locales: ["cs-CZ"],
      items: {
        "cs-CZ": {
          article_content: {
            items: preprItems,
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
  console.log("Extracting images from case-study.md...\n");

  const images = await extractImagesFromMarkdown();
  console.log(`\nFound ${images.size} images\n`);

  console.log("Uploading images to Prepr...\n");

  const assetIds = new Map<string, string>();

  for (const [name, data] of images) {
    const id = await uploadImage(name, data.base64, data.mimeType);
    if (id) {
      assetIds.set(name, id);
    }
  }

  console.log(`\nUploaded ${assetIds.size} images successfully\n`);

  if (assetIds.size > 0) {
    console.log("Updating article with images...\n");
    await updateArticleWithImages(assetIds);
    console.log("  ✓ Article updated with images\n");
  }

  console.log("Done.");
}

main().catch(console.error);
