const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'columns', name: 'Columns' },
    { alias: 'contracting-business-success', name: 'Contracting Business Success' },
    { alias: 'residential-hvac', name: 'Residential HVAC' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CBMag/?fref=ts', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ContractingBiz', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4078340', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'contractbus.home' },
  gtm: {
    containerId: 'GTM-TPH92QZ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=942%0D',
};
