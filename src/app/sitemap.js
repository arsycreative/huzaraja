const siteUrl = "https://huzaraja.netlify.app";

export default function sitemap() {
  const pages = [
    "",
    "/about",
    "/contact",
  ];

  const lastModified = new Date().toISOString().split("T")[0];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));
}
