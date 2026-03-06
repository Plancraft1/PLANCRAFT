import { aboutData } from "../../app/about/(client)/aboutData";
import { articlesData } from "../../app/articles/[[...category]]/(client)/articlesData";
import { contactData } from "../../app/contact/(client)/contactData";
import { projectsData } from "../../app/projects/[[...category]]/(client)/projectsData";
import { servicesData } from "../../app/service/[slug]/servicesData";

export const navConfig = [
  ...Object.keys(servicesData).map((slug) => ({
    name: servicesData[slug].name,
    slug: `/sluzba/${slug}`,
    perex: servicesData[slug].servicePerex,
    id: servicesData[slug].id,
  })),
  {
    name: "Projekty",
    slug: "/projekty",
    perex: projectsData.heroPerex,
    id: "projects",
  },
  {
    name: articlesData.name,
    slug: "/clanky",
    perex: articlesData.heroPerex,
    id: "articles",
  },
  {
    name: "O nás",
    slug: "/o-nas",
    perex: aboutData.introPerex,
    id: "about",
  },
  {
    name: "Kontakt",
    slug: "/kontakt",
    perex: contactData.header,
    id: "contact",
  },
];
