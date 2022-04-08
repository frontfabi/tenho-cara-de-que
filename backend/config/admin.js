module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '648fd71183c2e7ae4fcf337b4c529a8f'),
  },
});
