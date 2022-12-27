import {useEffect, useState} from "react";
import LoginDialog from "../login/LoginDialog";

const Nav = () => {
    const [isClient , setIsClient ] = useState(false);
    const [loginVisible , setLoginVisible ] = useState(false);
    const [isLoggedIn , setIsLoggedIn ] = useState(false);
    const [user , setUser ] = useState(null);

    useEffect(() => {
        setIsClient(true)
        // update some client side state to say it is now safe to render the client-side only component
        let token = localStorage.getItem('auth_token');

        if (token == null) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            setUser(JSON.parse(atob(token.split('.')[1])));
        }
    }, []);

    const handleClickLoginButton = () => {
        let loginDialog = document.getElementById('loginDialog');
        loginDialog.classList.add('is-active')
    };

    console.log(user)
    return (
        <nav id="navbar-main" className="navbar is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
                    <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
                </a>
                <div className="navbar-item has-control">
                    <div className="control"><input placeholder="Search everywhere..." className="input"/></div>
                </div>
            </div>

            <div className="navbar-brand is-right">
                <a className="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
                    <span className="icon"><i className="mdi mdi-dots-vertical"></i></span>
                </a>
            </div>

            {isClient && !isLoggedIn &&
                <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
                    <div className="navbar-end">
                        <a href="#" title="About" className="navbar-item has-divider is-desktop-icon-only" onClick={handleClickLoginButton}>
                            <span className="icon"><i className="mdi mdi-account"></i></span>
                            <span>Login</span>
                        </a>
                    </div>
                </div>
            }

            { isClient && !isLoggedIn && <LoginDialog /> }

            { isClient && isLoggedIn &&
                <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
                            <a className="navbar-link is-arrowless">
                                <div className="is-user-avatar">
                                    <img src={user.picture} alt={user.name}/>
                                </div>
                                <div className="is-user-name"><span>{user.given_name}</span></div>
                                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                            </a>
                            <div className="navbar-dropdown">
                                <a href="profile.html" className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-account"></i></span>
                                    <span>My Profile</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-settings"></i></span>
                                    <span>Settings</span>
                                </a>
                                <a className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-email"></i></span>
                                    <span>Messages</span>
                                </a>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-logout"></i></span>
                                    <span>Log Out</span>
                                </a>
                            </div>
                        </div>

                        <a title="Log out" className="navbar-item is-desktop-icon-only">
                            <span className="icon"><i className="mdi mdi-logout"></i></span>
                            <span>Log out</span>
                        </a>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Nav;