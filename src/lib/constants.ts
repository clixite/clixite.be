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
        linkedin: 'https://linkedin.com/company/clixite',
        github: 'https://github.com/clixite',
    },
};

export const navigation = {
    main: [
        { name: 'Services', href: '/services' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'À propos', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Consultance IT', href: '/services#consulting' },
        { name: 'Développement SaaS', href: '/services#development' },
        { name: 'Gestion PaaS', href: '/services#paas' },
        { name: 'Solutions auto-hébergées', href: '/services#solutions' },
        { name: 'Accompagnement', href: '/services#support' },
        { name: 'Staffing IT', href: '/services#staffing' },
    ],
};

export const navItems = navigation.main;
