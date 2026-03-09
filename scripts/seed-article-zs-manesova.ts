export {};

const PREPR_API_URL = "https://mutation.prepr.io/content_items";
const ACCESS_TOKEN = process.env.PREPR_MUTATION_ACCESS_TOKEN;
const ARTICLE_MODEL_ID = "0ff51361-e616-4692-a975-611eda579f00";

// Existing category ID for "Pasportizace"
const CATEGORY_ID = "4ba09063-0a63-4cbe-9766-ebb40f0c8e29";

if (!ACCESS_TOKEN) {
  console.error("Missing PREPR_MUTATION_ACCESS_TOKEN environment variable");
  process.exit(1);
}

const articleData = {
  title: "ZŠ Mánesova: Když se projekt od A do Z setká s realitou",
  slug: "zs-manesova-kdyz-se-projekt-od-a-do-z-setka-s-realitou",
  content: [
    { format: "H2", body: "Chyba za 400 000 Kč" },
    {
      format: null,
      body: "<p>Objevila se uprostřed realizace multifunkčního hřiště pro ZŠ Mánesova v Otrokovicích. Investor nervózní, termíny v ohrožení, rozpočet překročený.</p>",
    },
    {
      format: null,
      body: "<p>Tohle je ten moment, kdy se pozná, jestli jste projektanti, kteří za svou prací stojí, nebo jestli se začnete schovávat.</p>",
    },
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
    { format: "H2", body: "A jak to vypadá dnes?" },
    {
      format: null,
      body: "<p>Žáci ZŠ Mánesova běhají po novém hřišti. Město Otrokovice má moderní venkovní zázemí, které slouží škole i veřejnosti.</p>",
    },
    {
      format: null,
      body: "<p>A my jsme si z toho projektu odnesli potvrzení, že komplexní přístup dává smysl. Když jste u projektu od první skici až po kolaudaci, dokážete reagovat rychle, protože znáte každý detail.</p>",
    },
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
  ],
};

async function createArticle() {
  const contentItems = articleData.content.map((item) => ({
    label: "Text",
    format: item.format,
    body: item.body,
  }));

  const response = await fetch(PREPR_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      model: { id: ARTICLE_MODEL_ID },
      locales: ["cs-CZ"],
      workflow_stage: {
        "cs-CZ": "Done",
      },
      publish_on: {
        "cs-CZ": Math.floor(Date.now() / 1000),
      },
      slug: {
        "cs-CZ": articleData.slug,
      },
      items: {
        "cs-CZ": {
          article_title: { body: articleData.title },
          article_category: {
            items: [{ id: CATEGORY_ID }],
          },
          article_content: {
            items: contentItems,
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create article: ${response.status} ${error}`);
  }

  return response.json();
}

async function main() {
  console.log("Seeding article: ZŠ Mánesova...\n");

  try {
    const result = await createArticle();
    console.log(`  ✓ Created article with ID: ${result.id}`);
    console.log(`  ✓ Slug: ${articleData.slug}`);
  } catch (error) {
    console.error(
      `  ✗ Error: ${error instanceof Error ? error.message : error}`
    );
  }

  console.log("\nDone.");
}

main();
