const description = "Full catalog of Rockgevity merchandise.";
const title = "SASI store";
const url = "https://store.stonewerner.com";
// TODO

const seo = {
  title,
  titleTemplate: "%s | SASI Store",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  instagram: {
    handle: "@sasi.llc",
    site: "@sasi.llc",
  },
};

export { seo as defaultSEO, url as defaultUrl };
