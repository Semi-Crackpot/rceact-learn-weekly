function loader(content, map, meta) {
  const logger = this.getLogger();
  logger.info("[custom-loader] running...");
  this.callback(null, content, map, meta);

  return;
}

module.exports = loader;
