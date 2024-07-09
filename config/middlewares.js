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
            "s3.amazonaws.com",
            "https://s3.us-east-1.amazonaws.com/luve-blog-cms",
            "https://s3.us-east-1.amazonaws.com/luve-blog-cms/*",
            "https://s3.us-east-1.amazonaws.com/luve-blog-cms/thumbnail_*.jpeg",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://s3.us-east-1.amazonaws.com/luve-blog-cms",
            "https://s3.us-east-1.amazonaws.com/luve-blog-cms/*",
          ],
          upgradeInsecureRequests: null,
        },
      },
      noSniff: true,
    },
  },
];
