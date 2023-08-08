const models = {
  userModel: require(`./nosql/user`),
  educacionModel: require(`./nosql/educacion`),
  proyectosModel: require(`./nosql/proyectos`),
  experienciaModel: require(`./nosql/experiencia`),
  storageModel: require(`./nosql/storage`),
};
module.exports = models;
