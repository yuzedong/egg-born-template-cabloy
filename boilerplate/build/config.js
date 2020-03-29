// title
const title = '{{name}}';

// backend
const backend = {
  port: 7002,
  hostname: '0.0.0.0',
};

// front
const front = {
  build: {
    title,
    productionSourceMap: false,
    uglify: true,
  },
  dev: {
    title,
    // hostname: 'localhost',
    port: 9092,
    // proxyBaseURL: 'http://localhost:7002',
  },
};

module.exports = {
  front,
  backend,
};
