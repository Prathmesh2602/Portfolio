import type { Metadata } from "next";
import { PROJECTS } from "@/data";

const BASE_URL = "https://prathmeshjadhav.com";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.meta} — Case Study`;
  const description = project.context;
  const url = `${BASE_URL}/projects/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
