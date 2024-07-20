module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_ACCESS_SECRET,
        },
        region: process.env.AWS_REGION,
        baseUrl: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}`,
        params: {
          ACL: process.env.AWS_ACL || "public-read",
          signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
          Bucket: process.env.AWS_BUCKET_NAME,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "color-picker": {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "blog-entry": {
          field: "slug",
          references: "title",
        },
        tag: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  scheduler: {
    enabled: true,
    config: {
      contentTypes: {
        "api::blog-entry.blog-entry": {
          initialPublishAtDate: new Date(
            new Date().setDate(new Date().getDate() + 1)
          ).setHours(new Date().getHours() + 1),
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    },
  },
  seo: {
    enabled: true,
    config: {
      contentTypes: {
        "api::blog-entry.blog-entry": {
          metaTitle: {
            type: "string",
            required: true,
            configurable: true,
            label: "Meta Title",
            description:
              "The title that will be displayed in search engines and browser tabs.",
          },
          metaDescription: {
            type: "text",
            required: true,
            configurable: true,
            label: "Meta Description",
            description:
              "The description that will be displayed in search engine results.",
          },
          keywords: {
            type: "string",
            configurable: true,
            label: "Keywords",
            description: "Comma-separated keywords for SEO.",
          },
          canonicalURL: {
            type: "string",
            configurable: true,
            label: "Canonical URL",
            description:
              "The canonical URL for the content to avoid duplicate content issues.",
          },
          ogImage: {
            type: "media",
            configurable: true,
            label: "Open Graph Image",
            description:
              "The image that will be displayed when the content is shared on social media.",
          },
          twitterCard: {
            type: "string",
            configurable: true,
            label: "Twitter Card Type",
            description:
              "The type of Twitter card to use (e.g., summary, summary_large_image).",
          },
        },
      },
    },
  },
  "strapi-advanced-uuid": {
    enabled: true,
    config: {
      contentTypes: {
        "api::your-content-type.your-content-type": {
          field: "uuid",
          generateOnCreate: true,
        },
      },
    },
  },
});
