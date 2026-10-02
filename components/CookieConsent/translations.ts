import type { Translations } from "@c15t/nextjs";

export const csTranslations: Translations = {
  common: {
    acceptAll: "Přijmout vše",
    rejectAll: "Odmítnout vše",
    customize: "Nastavení",
    save: "Uložit nastavení",
    close: "Zavřít",
    securedBy: "Zabezpečuje",
  },
  cookieBanner: {
    title: "Cookies",
    description:
      "Tento web používá cookies pro správné fungování stránek a pro měření účinnosti našich kampaní. Můžete přijmout vše, vše odmítnout, nebo si nastavení přizpůsobit.",
  },
  consentManagerDialog: {
    title: "Nastavení cookies",
    description:
      "Zde si můžete přizpůsobit, které typy cookies a sledovacích technologií povolíte. Nastavení můžete kdykoli změnit v patičce webu.",
  },
  consentTypes: {
    necessary: {
      title: "Nezbytně nutné",
      description:
        "Tyto cookies jsou nezbytné pro správné fungování webu a nelze je vypnout.",
    },
    functionality: {
      title: "Funkční",
      description:
        "Tyto cookies umožňují rozšířenou funkčnost a personalizaci webu.",
    },
    measurement: {
      title: "Analytické",
      description:
        "Tyto cookies nám pomáhají pochopit, jak návštěvníci web používají, a zlepšovat jeho výkon.",
    },
    marketing: {
      title: "Marketingové",
      description:
        "Tyto cookies používá Meta Pixel k měření účinnosti našich reklam na Facebooku a Instagramu.",
    },
    experience: {
      title: "Uživatelská zkušenost",
      description:
        "Tyto cookies nám pomáhají poskytovat lepší uživatelskou zkušenost a testovat nové funkce.",
    },
  },
  frame: {
    title: "Pro zobrazení tohoto obsahu povolte kategorii {category}.",
    actionButton: "Povolit kategorii {category}",
    policyBlocked: "Tento obsah není ve vašem regionu dostupný.",
    loading: "Načítání obsahu…",
    error: "Obsah se nepodařilo načíst.",
  },
  legalLinks: {
    privacyPolicy: "Zásady ochrany osobních údajů",
    cookiePolicy: "Zásady používání cookies",
    termsOfService: "Obchodní podmínky",
  },
};
