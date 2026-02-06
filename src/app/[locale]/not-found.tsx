import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h2>
            <p className="text-muted-foreground mb-8">La page que vous recherchez n'existe pas.</p>
            <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition-opacity"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
}
