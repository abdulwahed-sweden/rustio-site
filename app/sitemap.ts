import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/why/", "/engine/", "/draft/", "/sponsors/", "/docs/"];
  const now = new Date();
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
