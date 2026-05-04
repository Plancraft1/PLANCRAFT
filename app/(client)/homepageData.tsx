import { Cabinet, servicesData } from "../service/[slug]/servicesData";

export const homepageData = {
  heroHeader: "Budujeme udržitelnější\na spokojenější budoucnost.",
  heroPerex:
    "Jsme stabilním inženýrským partnerem pro architektonická studia a developery, poskytující technickou podporu a expertizu, odborné know-how a zajišťující včasné a kvalitní provedení projektu při dodržení kvalitního designu a optimalizace nákladů.",
  about: {
    figureBanner: {
      perex:
        "Zajištujeme kompletní support pro architektonická studia a investory s cílem zefektivnit a zkvalitnit proces předrealizační části výstavby.",
      image: {
        src: "/img/homepage-1.jpg",
        width: 4000,
        height: 2667,
        alt: "Budujeme udržitelnější a spokojenější budoucnost.",
      },
    },
    perex:
      "Naše komplexní sada služeb je přizpůsobena tak, aby pomohla architektům v každé fázi projektů.",
  },
  services: {
    mainHeader: "Naše služby",
    list: [
      ...Object.keys(servicesData).map((slug) => ({
        slug: `sluzba/${slug}`,
        header: servicesData[slug].name,
        image: {
          src: servicesData[slug].figureBanner.image.src,
          width: servicesData[slug].figureBanner.image.width,
          height: servicesData[slug].figureBanner.image.height,
          alt: servicesData[slug].figureBanner.image.alt,
        },
        content: [servicesData[slug].homepageServiceCabinetItem],
      })),
    ],
  } as Cabinet,
  servicesQuote:
    "Na každém detailu záleží. Postaráme se o to, aby naše společná cesta byla zcela bez komplikací a vedla k dechberoucím výsledkům.",
  quote: {
    quote:
      "Plancraft, náš specializovaný partner pro pasporty a tvorbu v BIM, úspěšně podporuje naše nejnáročnější projekty. Podporují architekty při vytváření kvalitních a jedinečných řešení.",
    client: "KOGAA studio s.r.o.",
  },
};
