require("dotenv").config();

module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_KEY"),
      secretAccessKey: env("AWS_SECRET"),
      region: env("PROD_AWS_REGION"),
      params: {
        Bucket: env("PROD_AWS_BUCKET"),
      },
    },
  },
  "instagram-feed": {
    username: "centroespanolinc",
    count: 4,
    fields: {
      shortcode: true,
      owner_id: true,
      date: true,
      comment_count: true,
      like_count: true,
      is_video: true,
      text: true,
      display_url: true,
      thumbnail: true,
      thumbnail_150x150: true,
      thumbnail_240x240: true,
      thumbnail_320x320: true,
      thumbnail_480x480: true,
      thumbnail_640x640: true,
    },
  },
  // ...
});
