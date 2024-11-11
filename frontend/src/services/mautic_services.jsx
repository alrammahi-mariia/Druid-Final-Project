import mautic from "mautic-tracking";

const mauticSiteUrl = 'http://mautic-lando.lndo.site';

// Mautic tracking initialization
mautic.initialize(`${mauticSiteUrl}/mtc.js`);

export default mautic;
