require('dotenv').config();

module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_KEY'),
      secretAccessKey: env('AWS_SECRET'),
      region: env('PROD_AWS_REGION'),
      params: {
        Bucket: env('PROD_AWS_BUCKET'),
      },
    },
  },
  // ...
});