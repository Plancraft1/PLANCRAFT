import { MetadataRoute } from "next";
import { navConfig } from "../components/Navbar/navConfig";
import { getProjects, getServices } from "../lib/cms";

const domain = "https://plancraft.eu";
const date = new Date();
const generateRow = (url: string) => ({
  url: `${domain}${url}`,
  lastModified: date,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projectsResult, servicesResult] = await Promise.all([
    getProjects(),
    getServices(),
  ]);

  const projects = projectsResult;
  const services = servicesResult;

  const projectsPages = services.items.map((s) =>
    generateRow(`/projekty/${s._slug}`)
  );

  const projectPages = projects.items.map((p) =>
    generateRow(`/projekt/${p._slug}`)
  );

  const staticPages = navConfig.map((page) => generateRow(page.slug)).flat();

  return [generateRow("/"), ...staticPages, ...projectPages, ...projectsPages];
}
