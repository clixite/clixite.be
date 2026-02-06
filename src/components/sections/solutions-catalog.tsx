"use client";

import { useState } from 'react';
import { Search as SearchIcon, Cloud, Globe, Shield, Activity, BarChart3, Database, MessageSquare, Zap, FileJson, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/ui/animated-section';
import solutionsData from '@/content/solutions.json';
import { useTranslations } from 'next-intl';

// Icon mapping
const iconMap: Record<string, any> = {
    Cloud, Globe, Shield, Activity, BarChart3, Database, MessageSquare, Zap, FileJson, Play
};

const categoryKeys = [
    'all',
    'productivity',
    'security',
    'media',
    'monitoring',
    'automation',
    'development',
    'bi',
    'documents',
    'communication'
];

export function SolutionsCatalog() {
    const t = useTranslations('Solutions.catalog');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSolutions = solutionsData.filter(solution => {
        const matchesSearch = solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            solution.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || solution.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-20 bg-slate-950">
            <div className="container px-4">

                {/* Filters */}
                <div className="max-w-4xl mx-auto mb-16 space-y-8">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <Input
                            type="text"
                            placeholder={t('search_placeholder')}
                            className="pl-12 h-14 bg-slate-900/50 border-white/10 text-lg focus-visible:ring-teal-500/50 rounded-full backdrop-blur-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {categoryKeys.map((catKey) => (
                            <Button
                                key={catKey}
                                variant={activeCategory === catKey ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveCategory(catKey)}
                                className={activeCategory === catKey ? "bg-teal-600 hover:bg-teal-700" : "border-white/10 hover:bg-white/5"}
                            >
                                {t(`categories.${catKey}`)}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSolutions.map((solution, index) => {
                        const Icon = iconMap[solution.icon as keyof typeof iconMap] || Cloud;
                        return (
                            <AnimatedSection key={solution.id} delay={index * 0.05}>
                                <GlassCard className="p-6 h-full flex flex-col group hover:border-teal-500/30 transition-colors">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                                            <Icon className="w-6 h-6 text-teal-400" />
                                        </div>
                                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-white/10 text-slate-400">
                                            {t(`categories.${solution.category}`)}
                                        </Badge>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{solution.name}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {solution.description}
                                    </p>
                                    <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0 h-auto justify-start font-semibold">
                                        {t('learn_more')} →
                                    </Button>
                                </GlassCard>
                            </AnimatedSection>
                        );
                    })}
                </div>

                {filteredSolutions.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-slate-400">{t('no_results')}</p>
                        <p className="text-slate-500 mt-2">
                            {t('no_results_desc', { query: searchQuery })}
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6 border-white/10"
                            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                        >
                            {t('reset_search')}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
