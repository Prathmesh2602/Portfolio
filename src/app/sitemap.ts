import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data";

const BASE_URL = "https://prathmeshjadhav.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...projectRoutes,
  ];
}
