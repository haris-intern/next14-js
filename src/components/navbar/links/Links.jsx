"use client";
import { useState } from 'react';
import NavLink from './navLink/navLink';
import Styles from './links.module.css';
// links define which pages are available in the navbar
const links = [
    {
        title: "Home",
        path: '/',
    },
    {
        title: "About",
        path: '/about',
    },
    {
        title: "Contact",
        path: '/contact',
    },
    {
        title: "Blog",
        path: '/blog',
    },
];


const Links = () => {
    // state declared
    const [open, setopen] = useState(false);
    // tempory check
    const session = true;
    const isAdmin = true;
    return (
        <div className={Styles.container}>
            <div className={Styles.links}>
                {
                    links.map(
                        (link => (
                            <NavLink key={link.title} item={link} />
                        ))
                    )
                }
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} />}
                            <button className={Styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: '/login' }} />
                    )
                }
            </div>
            <button onClick={()=>setopen(prev=>!prev)} className={Styles.menuButton}>menu</button>
            {
                open && (
                    <div className={Styles.mobileLinks}>
                        {
                            links.map(
                                (link => (
                                    <NavLink key={link.title} item={link} />
                                ))
                            )
                        }
                        {
                            session ? (
                                <>
                                    {isAdmin && <NavLink item={{ title: "Admin", path: '/admin' }} />}
                                    <button className={Styles.logout}>Logout</button>
                                </>
                            ) : (
                                <NavLink item={{ title: "Login", path: '/login' }} />
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Links;   