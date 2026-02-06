export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface Solution {
    id: string;
    name: string;
    description: string;
    category: string;
    icon?: string;
    url?: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    description: string;
    services: string[];
    results: string[];
    image?: string;
}
