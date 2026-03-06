import { PageIntroProps } from "../../../components/PageIntro/PageIntro";

type Bullet = {
  header: string;
  list: string[];
};

export type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Bullets = { type: "bullets"; bullets: Bullet[] };
export type Text = { type: "text"; text: string };
export type Header = { type: "header"; header: string };

export type ServiceContentItem = Bullets | Text | Header;
export type Cabinet = {
  mainHeader: string;
  list: {
    slug: string;
    linkLabel?: string;
    header: string;
    image: ImageProps;
    content: ServiceContentItem[];
  }[];
};

export interface ServiceContentCabinet extends Cabinet {
  type: "cabinet";
}

export interface ServiceContentList {
  type: "list";
  list: { header: string; perex: string }[];
}

export type PageData = PageIntroProps & {
  id: string;
  name: string;
  homepageServiceCabinetItem: ServiceContentItem;
  serviceContent: ServiceContentList | ServiceContentCabinet;
  servicePerex: string;
  advantages: { header: string; perex: string }[];
  quote: { client: string; quote: string };
};

export type ServicesData = {
  [key: string]: PageData;
};

export const servicesData: ServicesData = {
  "projektova-dokumentace": {
    id: "projektova-dokumentace",
    name: "Projektová dokumentace",
    homepageServiceCabinetItem: {
      type: "text",
      text: "Naše pečlivě zpracovaná dokumentace v BIM je Vaším plánem k úspěšné realizaci stavby.\nVypracujeme projektovou dokumentaci, zajistíme souhlasná stanoviska dotčených orgánů státní správy a získáme stavební povolení.",
    },
    heroHeader:
      "Naše pečlivě zpracovaná dokumentace v BIM je Vaším plánem k úspěšné realizaci stavby",
    figureBanner: {
      perex:
        'Víme, že ďábel se skrývá v detailech. A proto zajistíme, že bude vyřešen každý milimetr stavby. Už žádné "red flags", jen kvalita a preciznost.',
      image: {
        src: "/img/service-projektova-dokumentace-0.jpg",
        width: 1070,
        height: 615,
        alt: "Projektová dokumentace",
      },
    },
    introPerex:
      "S naší odborností v zaměřování a 3D modelování vytváříme detailní a komplexní digitální podklady pro tvorbu vašich architektonických studií a zhmotnění vašich vizí.",
    scrollFigureBanner: {
      items: [
        {
          image: {
            src: "/img/service-projektova-dokumentace-1.jpg",
            width: 1000,
            height: 500,
            alt: "Projektová dokumentace",
          },
          perex:
            "Naše služby zahrnují analýzu vašeho projektu, vypracování potřebné dokumentace a aktivní komunikaci s příslušnými úřady.",
        },
        {
          image: {
            src: "/img/service-projektova-dokumentace-2.jpg",
            width: 1000,
            height: 500,
            alt: "Projektová dokumentace",
          },
          perex:
            "BIM řešení poskytuje komplexní přehled o vašem projektu, od počátečního návrhu po dlouhodobou správu. S BIMem dosahujeme maximální efektivity, minimalizujeme chyby a zajišťujeme lepší spolupráci mezi všemi účastníky projektu.",
        },
        {
          image: {
            src: "/img/service-projektova-dokumentace-3.jpg",
            width: 1000,
            height: 500,
            alt: "Projektová dokumentace",
          },
          perex:
            "S dotčenými orgány státní správy aktivně komunikujeme již v průběhu projekčních prací, tím zrychlujeme celý proces a předcházíme změnám a námitkám v pozdní fázi projektu. Díky nám se tedy vyhnete zdlouhavým byrokratickým procesům a budete moci rychle přejít ke stavbě vašich snů.",
        },
      ],
    },
    serviceContent: {
      mainHeader: "Obsah služby",
      type: "cabinet",
      list: [
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Projektová dokumentace",
          image: {
            src: "/img/service-projektova-dokumentace-0.jpg",
            alt: "Projektová dokumentace",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Náš profesionální tým ve spolupráci s ověřenými externími speciality pro Vás zpracuje nejen kompletní dokumentaci dle Vyhlášky č. 499/2006 Sb. Vše bude navíc zpracováno v BIM (informační model budovy) - dosáhneme maximální efektivity a minimalizujeme chyby.",
            },
            {
              type: "header",
              header: "Dokumentace zejména obsahuje:",
            },
            {
              type: "bullets",
              bullets: [
                {
                  header: "Průvodní zpráva",
                  list: [],
                },
                {
                  header: "Souhrnná technická zpráva",
                  list: [],
                },
                {
                  header: "Situační výkresy",
                  list: [],
                },
                {
                  header: "Dokumentace stavebního nebo inženýrského objektu",
                  list: [
                    "Architektonicko-stavební řešení",
                    "Stavebně konstrukční řešení",
                    "Požárně bezpečnostní řešení",
                    "Technika prostředí staveb",
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Inženýring a zisk povolení",
          image: {
            src: "/img/service-projektova-dokumentace-4.jpg",
            alt: "Inženýring a zisk povolení",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Jsme vaším partnerem pro efektivní a spolehlivé řešení byrokratických procesů. S našimi odbornými znalostmi a zkušenostmi vám pomůžeme rychle překonat administrativní překážky a dostat se ke stavbě, kterou si přejete.Náš tým má hluboké znalosti místního stavebního práva a dlouholeté zkušenosti s komunikací s úřady. Díky této znalosti budete mít jistotu, že všechny administrativní kroky jsou vyřízeny efektivně a v souladu se zákony.",
            },
          ],
        },
      ],
    },
    servicePerex:
      "Náš cíl je ulehčit vám život. Technické řešení a byrokracii předejte do našich rukou a mějte jistotu, že všechny aspekty projektu jsou pod kontrolou.",
    advantages: [
      {
        header: "Zpracování v BIM",
        perex:
          "S BIMem (informační model budovy) dosahujeme maximální efektivity, minimalizujeme chyby a zajišťujeme lepší spolupráci mezi všemi účastníky projektu. S námi máte jistotu, že váš projekt bude plánován, navrhován a realizován s nejvyšší přesností a profesionalitou.",
      },
      {
        header: "Zaměření na Architektonickou kvalitu",
        perex:
          "Naším cílem je posílit vaše architektonické návrhy o jasná a přesná technická řešení. V dokumentaci se postaráme o nejmenší technické detaily, aby se Architekt mohl soustředit na celkový obraz a vizi.",
      },
      {
        header: "Spolupráce a konzultace",
        perex:
          "Kvalitně provedená komplexní projektová dokumentace se vzájemně zkoordinovanou činností všech specialistů a architetků. Proto vedeme strukturované kontrolní dny a průběžné koordinační schůzky.",
      },
      {
        header: "Kvalita a profesionalita",
        perex:
          "Profesionálně provedená dokumentace a precizní řešení problematických detailů ve fázi projektu Vám ušetří nejen nervy ne stavbě, ale i finanční prostředky, které byste museli investovat do nápravy chyb.",
      },
      {
        header: "Efektivita a rychlost procesu",
        perex:
          "Projekt průběžně konzultujeme s dotčenými orgány státní správy, tím předcházíme případným změnám a kolizím v pozdních fázích projektu",
      },
      {
        header: "Šetříte své nervy",
        perex:
          "Stres nechte na nás. Úspěšné dokončení projektu a zisk stavebního povolení je naše zodpovědnost, ne vaše. Vás budeme jen průběžně informovat o stavu projektu.",
      },
    ],
    quote: {
      client: "Radek Vašulík, Archidrip s.r.o.",
      quote:
        "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”",
    },
  },
  pasportizace: {
    id: "pasportizace",
    name: "Pasportizace",
    homepageServiceCabinetItem: {
      type: "text",
      text: "S hrdostí se staráme o 3D pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněné nemovitosti určené k obnově nebo novostavby, které potřebují dokumentaci skutečného stavu.\nDíky přesnému zaměření objektů včetně detailů a lokalizace problematických míst budete připraveni na cokoliv. V rámci následných konzultací vám pomůžeme navrhnout to nejlepší řešení a vhodné stavební úpravy.",
    },
    heroHeader:
      "Nejlepší přítel architekta v přesném zaměření, pasportizaci a digitalizaci staveb",
    figureBanner: {
      perex:
        "S hrdostí se staráme o 3D pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněné nemovitosti určené k obnově nebo novostavby, které potřebují dokumentaci skutečného stavu.",
      image: {
        src: "/img/service-pasportizace-0.jpg",
        width: 1070,
        height: 615,
        alt: "Pasportizace",
      },
    },
    introPerex:
      "S naší odborností v zaměřování a 3D modelování vytváříme detailní a komplexní digitální podklady pro tvorbu vašich architektonických studií a zhmotnění vašich vizí.",
    scrollFigureBanner: {
      items: [
        {
          image: {
            src: "/img/service-pasportizace-1.jpg",
            width: 960,
            height: 560,
            alt: "Pasportizace",
          },
          perex:
            "Jsme zde, abychom vám poskytli kvalitní pasporty budov a detailní 3D digitalizaci, které budou technicky vysoce přesné a budou kompetně odpovídat vašim požadavkům.",
        },
        {
          image: {
            src: "/img/service-pasportizace-2.jpg",
            width: 960,
            height: 560,
            alt: "Pasportizace",
          },
          perex:
            "Díky přesnému zaměření objektů včetně detailů a lokalizace problematických míst budete připraveni na cokoliv. V rámci následných konzultací vám pomůžeme navrhnout to nejlepší řešení a vhodné stavební úpravy.",
        },
        {
          image: {
            src: "/img/service-pasportizace-3.jpg",
            width: 960,
            height: 560,
            alt: "Pasportizace",
          },
          perex:
            "Nejenže zakreslíme stávající stav a identifikujeme problémy, ale zapojíme se do vaší vize a zajistíme kvalitní podklad pro Váš stavební záměr a architektonickou vizi.",
        },
      ],
    },
    serviceContent: {
      type: "cabinet",
      mainHeader: "Obsah služby",
      list: [
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Detailní pasportizace",
          image: {
            src: "/img/service-pasportizace-0.jpg",
            alt: "Detailní pasportizace",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Kvalitní podklad s komplexním balíkem informací pro architektonické studio a následnou architektonickou studii, nebo Národní památkový ústav",
            },
            {
              type: "bullets",
              bullets: [
                {
                  header:
                    "Detailní zaměření objektu obsahující podrobné údaje, šikmosti, diagonály, klenby, rozvody TZB, technologie, zakreslení problematických míst, trhlin, stavu omítky, požadovaných detailů, včetně kompletní fotodokumentace objektu a technickým popisem stavu objektu",
                  list: [],
                },
                {
                  header: "3D model jako podklad pro architektonickou studii",
                  list: [],
                },
                {
                  header:
                    "Proces pasportizace a její výstupy jsou průběžně konzultovány se zadavatelem a do výstupů jsou zakomponovány veškeré specifické požadavky",
                  list: [],
                },
                {
                  header: "Odevzdání výstupu do 2 měsíců od zadání",
                  list: [],
                },
              ],
            },
          ],
        },
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Zjednodušená dokumentace",
          image: {
            src: "/img/service-pasportizace-4.jpg",
            alt: "Zjednodušená dokumentace",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Dokumentace pro účely zápisu do katastru nemovitostí, legalizace stavby, facility managementu a monitoringu budovy, nebo pro účely odstranění stavby.",
            },
            {
              type: "bullets",
              bullets: [
                { header: "Odevzdání výstupu do 3 týdnů od zadání", list: [] },
              ],
            },
          ],
        },
      ],
    },
    servicePerex:
      "Spojte se s námi a využijte naše technické know-how a přesnost k získání excelentních vstupů pro vaši architektonickou práci.\n\nNaše dokumenty jsou vytvářeny a dodávány v BIM a lze je na požádání přizpůsobit vašim požadavkům.",
    advantages: [
      {
        header: "Přesnost a preciznost",
        perex:
          "Díky dlouhodobé spolupráci s architektonickými studii víme, že pro jejich návrh je každý centimetr důležitý, proto se zaměřujeme i na minimální niance.",
      },
      {
        header: "Rychlost, dodržení termínu",
        perex:
          "Detailní pasportizaci s komplexním balíkem informací pro architektonické studio odevzdáváme vždy do 2 měsíců od zadání. Zjednodušenou pasportizaci do 3 týdnů",
      },
      {
        header: "3D digitalizace, 3D model",
        perex:
          "Výstupem nejsou jen půdorysy, ale 3D model korespondující s realitou, který následně slouží jako podklad pro architektonickou studii nebo pro správu budovy",
      },
      {
        header: "Nasloucháme vašim potřebám",
        perex:
          "Žádné zaměření nezapočne bez konzultace se zadavatelem a důkladného prozkoumání jeho požadavků a očekávání. Následná pasportizace je zpracována tak, aby přímo odpovídala požadavkům každého klienta",
      },
      {
        header: "Úroveň detailu",
        perex:
          "Chcete jednoduchou a levnou dokumentaci, nebo precizní digitalizaci včetně trhlin a stav omítky? Úroveň detailu bude odpovídat vašim požadavkům",
      },
      {
        header: "Lokalizace problematických míst",
        perex:
          "Při digitalizaci vyhledáme poruchy a detaily, které by mohly mít negativní dopad na další fáze projektu a životnost stavby.",
      },
    ],
    quote: {
      client: "Radek Vašulík, Archidrip s.r.o.",
      quote:
        "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”",
    },
  },
  "energeticka-uspornost": {
    id: "energeticka-uspornost",
    name: "Energetická úspornost",
    homepageServiceCabinetItem: {
      type: "text",
      text: "Zajišťujeme komplexní služby v oblasti energetiky s cílem pro udržitelnou výstavbu s co nejmenším negativním dopadem na životní přostředí.\nVytvoříme analýzu a navrhneme řešení, která sníží energetickou náročnost a zvýší komfort uživatelů budovy",
    },
    heroHeader: "Úsporné energetické řešení staveb od konceptu až po provoz",
    figureBanner: {
      perex:
        "Zajišťujeme komplexní služby v oblasti energetiky s cílem pro udržitelnou výstavbu s co nejmenším negativním dopadem na životní přostředí a s co nejefektivnějším využitím zdrojů.",
      image: {
        src: "/img/service-energetika-0.jpg",
        width: 1000,
        height: 500,
        alt: "Energetická úspornost",
      },
    },
    introPerex:
      "Nabijeme váš projekt pozitivní energií od konceptu až po detaily.",
    scrollFigureBanner: {
      items: [
        {
          image: {
            src: "/img/service-energetika-1.jpg",
            width: 960,
            height: 560,
            alt: "Energetická úspornost",
          },
          perex:
            "Hledáme a navrhujeme ty nejzajímavější a nejoptimálnější řešení pro jakýkoliv typ projektu. Přinášíme nejmodernější energetické řešení pro zlepšení kvality života ve městech.",
        },
        {
          image: {
            src: "/img/service-energetika-2.jpg",
            width: 960,
            height: 560,
            alt: "Energetická úspornost",
          },
          perex:
            "Řešení energetiky je sice nezbytná záležitost, ale také ideální příležitost pro to, vymyslet řešení, které bude nejen úsporné, ale i udržitelné  po celé generace.",
        },
        {
          image: {
            src: "/img/service-energetika-3.jpg",
            width: 960,
            height: 560,
            alt: "Energetická úspornost",
          },
          perex:
            "Dokážeme se adaptovat na jakýkoliv řešený problém, v kterékoliv fázi projektu. Nabízíme komplexní odborné služby, od samotného konceptu po finální analýzy a posudky.",
        },
      ],
    },
    serviceContent: {
      type: "list",
      list: [
        {
          header: "Konzultace pro architekty",
          perex:
            "Energetická konzultace pro Architektonická studia před započetím Architektonické studie nebo v jejím průběhu, ověření funkčnosti navrhovaných skladeb a zdrojů tepla",
        },
        {
          header: "Energetické studie a řešení",
          perex:
            "Energetické studie nabízí komplexní a kvalitní analýzu energetického aspektu vašich stavebních projektů. Od návrhu až po konkrétní orientační bilanci spotřeby a nákladů na provoz již ve fázi stavební studie.",
        },
        {
          header: "Energetické optimalizace budov",
          perex:
            "Identifikovat možností zlepšení energetické efektivity vašich budov. Prostřednictvím detailního průzkumu a analýzy navrhneme konkrétní opatření, která povedou ke snížení nákladů a zvýšení komfortu v interiéru.",
        },
        {
          header: "Komplexní servis k získání dotací",
          perex:
            "Komplexní servis při získávání státních a evropských dotací na zateplení budov a modernizaci zdrojů tepla. Provedeme vás celým procesem získání dotace – od první konzultace až po podání kompletní žádosti. Usnadníme vám získání dotace a umožníme vám provést energetické úpravy vašeho objektu s minimálními náklady a maximálními úsporami.",
        },
        {
          header: "Analýza tepelných mostů a úniků",
          perex:
            "Provádíme analýzy tepelných mostů a úniků za využití pokročilé technologie termokamery a dronu. Tyto metody nám umožňují detailní vizualizaci tepelných anomálií na budovách. Na základě získaných dat provedeme pečlivé vyhodnocení, které zahrnuje identifikaci problematických míst a navrh účinných opatření pro eliminaci těchto nedostatků. Naším cílem je zabezpečit optimální tepelnou pohodu vašeho objektu a maximalizovat energetickou účinnost, což zároveň přispívá ke snížení provozních nákladů.",
        },
        {
          header: "Tepelně-technické posouzení detailů",
          perex:
            "V oblasti tepelné techniky provádíme pečlivé analýzy a posouzení projektovaných konstrukčních detailů s důrazem na tepelnou účinnost. Na základě těchto analýz připravujeme návrhy opatření zaměřených na eliminaci tepelných ztrát a zvýšení celkové energetické účinnosti konstrukcí.",
        },
      ],
    },
    servicePerex:
      "Otevíráme nové horizonty v energetice, abychom vymanili koncepty ze zaběhlých kolejí. Naším cílem je přinést do projektů revoluční energetické systémy, které nám ušetří planetu i peněženku.",
    advantages: null,
    quote: {
      client: "Radek Vašulík, Archidrip s.r.o.",
      quote:
        "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”",
    },
  },
  "design-due-diligence": {
    id: "design-due-diligence",
    name: "Design due diligence",
    homepageServiceCabinetItem: {
      type: "text",
      text: "Podporujeme vize architektů prostřednictvím inovativního přístupu k projektování a životnímu cyklu budovy. Umožníme vašemu týmu vytvářet průlomové návrhy, které zanechají trvalý pozitivní dopad na kvalitu života ve městech. Společně nestavíme jen stavby, ale vytváříme odkaz pro další generace.",
    },
    heroHeader:
      "Podpora vize architektů inovativním přístupem k projektování a životnímu cyklu budovy.",
    figureBanner: {
      perex:
        "Kromě toho, že jsme Vaším partnerem v procesu, pomáháme navigovat při přípravě, schvalování a povolování složitých projektů. Zapojujeme se do všech fází projektu a nabízíme podporu při získávání autorizací a povolovacích dokumentů i při správě stavby.",
      image: {
        src: "/img/service-design-0.jpg",
        width: 1070,
        height: 615,
        alt: "Design due diligence",
      },
    },
    introPerex:
      "Umožníme vašemu týmu vytvářet průlomové návrhy, které zanechají trvalý pozitivní dopad na kvalitu života ve městech.",
    scrollFigureBanner: {
      items: [
        {
          image: {
            src: "/img/service-design-1.jpg",
            width: 960,
            height: 560,
            alt: "Design due diligence",
          },
          perex:
            "Hledáme a navrhujeme ty nejzajímavější a nejoptimálnější řešení pro jakýkoliv typ projektu. Přinášíme nejmodernější energetické řešení pro zlepšení kvality života ve městech.",
        },
        {
          image: {
            src: "/img/service-design-2.jpg",
            width: 960,
            height: 560,
            alt: "Design due diligence",
          },
          perex:
            "Řešení energetiky je sice nezbytná záležitost, ale také ideální příležitost pro to, vymyslet řešení, které bude nejen úsporné, ale i udržitelné  po celé generace.",
        },
        {
          image: {
            src: "/img/service-design-3.jpg",
            width: 960,
            height: 560,
            alt: "Design due diligence",
          },
          perex:
            "Dokážeme se adaptovat na jakýkoliv řešený problém, v kterékoliv fázi projektu. Nabízíme komplexní odborné služby, od samotného konceptu po finální analýzy a posudky.",
        },
      ],
    },
    serviceContent: {
      type: "cabinet",
      mainHeader: "Obsah služby",
      list: [
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Technické prověření proveditelnosti",
          image: {
            src: "/img/service-design-0.jpg",
            alt: "Technické prověření proveditelnosti",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Prověření proveditelnosti a možných technických hrozeb ve stádiu architektonické studie, přípravy zakázky či soutěžního návrhu. Podpora architektonických ateliérů ve fázích FS01 a FS02.",
            },
          ],
        },
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Detailní pasportizace",
          image: {
            src: "/img/service-pasportizace-0.jpg",
            alt: "Detailní pasportizace",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "S hrdostí se staráme o pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněný objekt určený k obnově, nebo novostavbu, která potřebuje dokumentaci skutečného stavu. Nejenže zakreslíme stávající stav a identifikujeme problémy, ale zapojíme se do vaší vize a zajistíme kvalitní podklad s komplexním balíkem informací pro Váši architektonickou vizi.",
            },
          ],
        },
        {
          slug: "/kontakt",
          linkLabel: "Poptat",
          header: "Dokumentace v BIM, inženýring",
          image: {
            src: "/img/service-design-5.jpg",
            alt: "Dokumentace v BIM, inženýring",
            width: 830,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "Zpracováním technické dokumentace v BIMu dosahujeme maximální efektivity, minimalizujeme chyby a zajišťujeme lepší spolupráci mezi všemi účastníky projektu. S námi máte jistotu, že vaší architektonickou vizí bude nakládáno s nejvyšší přesností a profesionalitou.",
            },
            {
              type: "text",
              text: "V dokumentaci se postaráme o nejmenší technické detaily a inženýrskou činnost, abyste se Vy mohli soustředit na celkovou architektonickou vizi.",
            },
            {
              type: "bullets",
              bullets: [
                {
                  header:
                    "Detailní zaměření objektu obsahující podrobné údaje, šikmosti, diagonály, klenby, rozvody TZB, technologie, zakreslení problematických míst, trhlin, stavu omítky, požadovaných detailů, včetně kompletní fotodokumentace objektu a technickým popisem stavu objektu",
                  list: [],
                },
                {
                  header: "3D model jako podklad pro architektonickou studii",
                  list: [],
                },
                {
                  header:
                    "Proces pasportizace a její výstupy jsou průběžně konzultovány se zadavatelem a do výstupů jsou zakomponovány veškeré specifické požadavky",
                  list: [],
                },
                {
                  header: "Odevzdání výstupu do 2 měsíců od zadání",
                  list: [],
                },
              ],
            },
          ],
        },
      ],
    },
    advantages: [
      {
        header: "Přesnost a preciznost",
        perex:
          "Považujte nás za svůj podpůrný tým pro technickou preciznost, který stojí po Vašem boku od první vize až po realizaci stavby. Díky dlouhodobé spolupráci s architektonickými studii víme, že pro jejich návrh je každý centimetr důležitý.",
      },
      {
        header: "Vaše tajná zbraň",
        perex:
          "Jsme vaše tajná zbraň, která podpoří vaše návrhy a rozšíří váš tvůrčí arzenál.",
      },
      {
        header: "Zpracování v BIM",
        perex:
          "Naše dokumentace jsou vytvářeny a dodávány v BIM a lze je na požádání přizpůsobit vašim požadavkům",
      },
      {
        header: "Zaměření na Architektonickou kvalitu",
        perex:
          "Naším cílem je posílit vaše architektonické návrhy o jasná a přesná technická řešení. V dokumentaci se postaráme o nejmenší technické detaily, abyste se Vy mohli soustředit na celkový obraz a architektonickou vizi.",
      },
      {
        header: "Zajistíme stavební povolení",
        perex:
          "Stres s byrokracií nechte na nás. Úspěšné dokončení projektu a zisk stavebního povolení je naše zodpovědnost, ne vaše. Zařídíme povolovací procesu a to při zachování Vaši nadčasové architektonické vize.",
      },
    ],
    servicePerex:
      "Nejsme jen konzultanti, jsme vaše tajná zbraň, která podpoří vaše návrhy a rozšíří váš tvůrčí arzenál.",
    quote: {
      client: "KOGAA studio s.r.o.",
      quote:
        "Plancraft, náš specializovaný partner pro pasporty a tvorbu v BIM, úspěšně podporuje naše nejnáročnější projekty. Podporují architekty při vytváření kvalitních a jedinečných řešení.",
    },
  },
};
