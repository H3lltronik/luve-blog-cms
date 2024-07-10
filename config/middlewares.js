module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "s3.amazonaws.com",
            `s3.${env("AWS_REGION")}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "s3.amazonaws.com",
            "market-assets.strapi.io",
            `s3.${env("AWS_REGION")}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
