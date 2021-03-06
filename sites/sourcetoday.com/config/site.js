const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'supply-chain', name: 'Supply Chain' },
    { alias: 'news', name: 'News' },
    { alias: 'distributor-news', name: 'Distributor News' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/organization/11093979', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'sourcetoday.home' },
  gtm: {
    containerId: 'GTM-5VDJHFN',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://design.informabi.com/LP=3741',
};
