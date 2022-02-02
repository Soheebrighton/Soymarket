module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "Soymarket",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};
