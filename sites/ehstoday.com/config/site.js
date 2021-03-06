const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'safety-technology', name: 'Safety Technology' },
    { alias: 'americas-safest-companies-awards', name: 'America\'s Safest Companies Awards' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/EHS-Today/66542218626?ref=ts', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/EHSToday', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4355311', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'ehs.home' },
  gtm: {
    containerId: 'GTM-KC2S36C',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1852',
};
