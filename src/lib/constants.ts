export const siteConfig = {
    name: 'Clixite',
    companyName: 'Clixite SRL',
    description: 'Agence IT belge spécialisée en transformation digitale depuis 2005',
    url: 'https://clixite.be',
    contact: {
        email: 'nicolas@clixite.be',
        phone: '+32 470 12 34 56', // Placeholder, user didn't provide but good to have struct
        address: 'Avenue Reine Astrid 53',
        city: '1300 Wavre',
        country: 'Belgique',
        vat: 'BE0871.430.776',
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/nicolassim/',
        github: 'https://github.com/clixite',
    },
};

export const navigation = {
    main: [
        { name: 'services', localeKey: 'services', href: '/services' },
        { name: 'solutions', localeKey: 'solutions', href: '/solutions' },
        { name: 'caseStudies', localeKey: 'caseStudies', href: '/case-studies' },
        { name: 'about', localeKey: 'about', href: '/about' },
        { name: 'contact', localeKey: 'contact', href: '/contact' },
    ],
    services: [
        { id: 'consulting', href: '/services#consulting' },
        { id: 'development', href: '/services#development' },
        { id: 'paas', href: '/services#paas' },
        { id: 'solutions', href: '/services#solutions' },
        { id: 'support', href: '/services#support' },
        { id: 'staffing', href: '/services#staffing' },
    ],
};

export const navItems = navigation.main;
