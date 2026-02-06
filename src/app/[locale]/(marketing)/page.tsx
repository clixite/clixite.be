import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services-section';
import { SolutionsPreview } from '@/components/sections/solutions-preview';
import { TrustSection } from '@/components/sections/trust-section';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustSection />
            <ServicesSection />
            <SolutionsPreview />
            <CTASection />
        </>
    );
}
