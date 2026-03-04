import { aboutData } from "../../app/about/(client)/aboutData";
import { articlesData } from "../../app/articles/[[...category]]/(client)/articlesData";
import { contactData } from "../../app/contact/(client)/contactData";
import { projectsData } from "../../app/projects/[[...category]]/(client)/projectsData";
import { servicesData } from "../../app/service/[slug]/servicesData";

export const navConfig = [
  ...Object.keys(servicesData).map((slug) => ({
    slug: `/sluzba/${slug}`,
    perex: servicesData[slug].servicePerex,
    name: servicesData[slug].name,
  })),
  {
    name: "Projekty",
    slug: "/projekty",
    perex: projectsData.heroPerex,
  },
  {
    name: articlesData.name,
    slug: "/clanky",
    perex: articlesData.heroPerex,
  },
  {
    name: "O nás",
    slug: "/o-nas",
    perex: aboutData.introPerex,
  },
  {
    name: "Kontakt",
    slug: "/kontakt",
    perex: contactData.header,
  },
];
