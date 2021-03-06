const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: '/technologies/cylinders-actuators', name: 'Cylinders & Actuators' },
    { alias: 'technologies/hydraulic-valves', name: 'Hydraulic Valves' },
    { alias: 'technologies/hydraulic-pumps-motors', name: 'Hydraulic Pumps & Motors' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HydraulicsPneumatics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/HPpenton', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/40236/profile', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'hnp.home' },
  gtm: {
    containerId: 'GTM-NNFQ6CV',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://design.informabi.com/LP=3633',
};
