const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'RFTnewpref' });
//   .addForm('magazineSignup', { omedasite: 'PEN6133_ASland', query: { pk: 'NNHWEB' } });

module.exports = config;
