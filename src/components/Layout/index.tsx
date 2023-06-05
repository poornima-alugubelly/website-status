import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '@/components/footer';
import styles from '@/components/Layout/Layout.module.scss';
import NavBar from '@/components/navBar';
import { useGetUserQuery } from '@/app/services/userApi';
import { Loader } from '../tasks/card/Loader';
import useUserData from '@/hooks/useUserData';

interface Props {
    children?: ReactNode;
}

const navBarContent = (title: string, refUrl: string, isActive = false) => {
    const linkClasses = `${styles.link} ${isActive ? styles.active : ''}`;

    return (
        <Link href={refUrl} passHref>
            <button type="button" tabIndex={0} className={linkClasses}>
                {title}
            </button>
        </Link>
    );
};

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter();
    const { isLoading } = useGetUserQuery();
    const { data } = useUserData();

    // Dev feature toggle
    const { query } = router;
    const dev = !!query.dev;

    return (
        <div className={styles.layout}>
            <NavBar />
            {isLoading && <Loader />}
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {navBarContent('Tasks', '/', router.pathname === '/')}|
                    {navBarContent(
                        'Issues',
                        '/issues',
                        router.pathname === '/issues'
                    )}
                    |
                    {navBarContent(
                        'Mine',
                        '/mine',
                        router.pathname === '/mine'
                    )}
                    {/* TODO: Uncomment when DS(Chanllenges) is ready */}
                    {/* |
                    {navBarContent(
                        'DS',
                        '/challenges',
                        router.pathname === '/challenges'
                    )} */}
                    |
                    {navBarContent(
                        'Open PRs',
                        '/openPRs',
                        router.pathname === '/openPRs'
                    )}
                    |
                    {navBarContent(
                        'Stale PRs',
                        '/stale-pr',
                        router.pathname === '/stale-pr'
                    )}
                    |
                    {navBarContent(
                        'Idle Users',
                        '/idle-users',
                        router.pathname === '/idle-users'
                    )}
                    {dev && (
                        <>
                            |
                            {navBarContent(
                                'Availability Panel',
                                '/availability-panel'
                            )}
                        </>
                    )}
                </div>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
