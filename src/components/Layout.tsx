import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import MouseGlow from './MouseGlow';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <MouseGlow />
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
