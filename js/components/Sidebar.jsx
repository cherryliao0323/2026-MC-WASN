import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
    sidebar: {
        width: '250px',
        backgroundColor: '#5d2f0a',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRight: '1px solid #dee2e6',
        padding: '20px 0',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    sidebarMobile: {
        width: '80vw',
        maxWidth: '300px',
    },
    sidebarCollapsed: {
        transform: 'translateX(-100%)',
    },
    toggleButton: {
        position: 'fixed',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#5d2f0a',
        color: '#ecf0f1',
        border: 'none',
        padding: '15px',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1002,
        transition: 'all 0.3s ease',
        fontSize: '18px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButtonExpanded: {
        left: '260px',
    },
    sidebarOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        display: 'none',
    },
    sidebarOverlayActive: {
        display: 'block',
    },
    sidebarHeader: {
        padding: '0 20px 20px',
        borderBottom: '1px solid #dee2e6',
    },
    sidebarHeaderTitle: {
        margin: 0,
        color: '#ecf0f1',
        fontSize: '1.2em',
    },
    sidebarHeaderTitleMobile: {
        fontSize: '1.1em',
    },
    sidebarNav: {
        padding: '20px',
    },
    sidebarNavMobile: {
        padding: '15px',
    },
    navLink: {
        display: 'block',
        padding: '12px 12px',  
        color: '#ecf0f1',
        textDecoration: 'none',
        borderRadius: '4px',
        marginBottom: '8px', 
    },
    navLinkMobile: {
        padding: '10px 10px',
        fontSize: '0.95em',
    },
    navLinkActive: {
        backgroundColor: '#a0522d',
        color: 'white',
        borderRadius: '4px'
    },
    navGroup: {
        margin: '8px 0',
    },
    navGroupTitle: {
        fontSize: '1em',
        color: '#ecf0f1',
        margin: '10px 0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    navGroupLink: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    navGroupTitleMobile: {
        fontSize: '0.95em',
    },
    subNav: {
        paddingLeft: '20px',
        display: 'none',
    },
    subNavOpen: {
        display: 'block',
        paddingLeft: '20px',
        marginTop: '8px'
    },
    subNavMobile: {
        paddingLeft: '15px',
    },
    arrow: {
        transition: 'transform 0.3s',
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
    },
    arrowOpen: {
        transform: 'rotate(90deg)',
    }
};

function Sidebar({ onToggle }) {
    const location = useLocation();
    const [openSections, setOpenSections] = useState(() => ({
        committee: location.pathname.includes('committee'),
        'mc-papers': true,
        'wasn-papers': true,
    }));
    
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const mobile = width <= 768;
            setIsMobile(mobile);
            
            // 計算側邊欄實際寬度
            if (mobile) {
                setSidebarWidth(Math.min(width * 0.8, 300));
                setIsExpanded(false);
                if (onToggle) onToggle(false);
            } else {
                setSidebarWidth(250);
                setIsExpanded(true);
                if (onToggle) onToggle(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        setOpenSections(prev => ({
            committee: location.pathname.includes('committee'),
            'mc-papers': true,
            'wasn-papers': true,
        }));
    }, [location.pathname]);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleSidebar = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    const handleOverlayClick = () => {
        if (isMobile && isExpanded) {
            setIsExpanded(false);
            if (onToggle) {
                onToggle(false);
            }
        }
    };

    // 計算按鈕位置
    const getButtonPosition = () => {
        if (!isExpanded) return '10px';
        if (isMobile) {
            return `${sidebarWidth + 10}px`;
        }
        return '260px';
    };

    return (
        <>
            <div 
                style={{
                    ...styles.sidebarOverlay,
                    ...(isMobile && isExpanded ? styles.sidebarOverlayActive : {})
                }}
                onClick={handleOverlayClick}
            />
            
            <div style={{
                ...styles.sidebar,
                ...(isMobile ? styles.sidebarMobile : {}),
                ...(!isExpanded ? styles.sidebarCollapsed : {})
            }}>
                <div style={styles.sidebarHeader}>
                    <h3 style={{
                        ...styles.sidebarHeaderTitle,
                        ...(isMobile ? styles.sidebarHeaderTitleMobile : {})
                    }}>2025 MC & WASN</h3>
                </div>
                <nav style={{
                    ...styles.sidebarNav,
                    ...(isMobile ? styles.sidebarNavMobile : {})
                }}>
                    <Link to="/" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        首頁
                    </Link>
                    <div style={styles.navGroup}>
                        <div style={{
                            ...styles.navGroupTitle,
                            ...(isMobile ? styles.navGroupTitleMobile : {})
                        }} onClick={() => toggleSection('committee')}>
                            <div style={styles.navGroupLink}>
                                <Link to="/committee" style={{ 
                                    ...styles.navLink,
                                    ...(isMobile ? styles.navLinkMobile : {}),
                                    ...(location.pathname === '/committee' ? styles.navLinkActive : {}),
                                    marginBottom: 0,
                                    width: '100%'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isMobile) {
                                        setIsExpanded(false);
                                        if (onToggle) onToggle(false);
                                    }
                                }}>大會組織</Link>
                            </div>
                            <span style={{ ...styles.arrow, ...(openSections['committee'] ? styles.arrowOpen : {}) }}>▶</span>
                        </div>
                        <div style={{ 
                            ...styles.subNav,
                            ...(isMobile ? styles.subNavMobile : {}),
                            ...(openSections['committee'] ? styles.subNavOpen : {}) 
                        }}>
                            <Link to="/mc-committee" style={{ 
                                ...styles.navLink,
                                ...(isMobile ? styles.navLinkMobile : {}),
                                ...(location.pathname === '/mc-committee' ? styles.navLinkActive : {}) 
                            }}
                            onClick={() => {
                                if (isMobile) {
                                    setIsExpanded(false);
                                    if (onToggle) onToggle(false);
                                }
                            }}>MC 委員會</Link>
                            <Link to="/wasn-committee" style={{ 
                                ...styles.navLink,
                                ...(isMobile ? styles.navLinkMobile : {}),
                                ...(location.pathname === '/wasn-committee' ? styles.navLinkActive : {}) 
                            }}
                            onClick={() => {
                                if (isMobile) {
                                    setIsExpanded(false);
                                    if (onToggle) onToggle(false);
                                }
                            }}>WASN 委員會</Link>
                        </div>
                    </div>
                    <Link to="/agenda" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/agenda' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        大會議程
                    </Link>
                    <Link to="/speech" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/speech' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        專題演講
                    </Link>
                    <Link to="/discussion" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/discussion' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        跨域論壇
                    </Link>
                    <div style={styles.navGroup}>
                        <div style={{
                            ...styles.navGroupTitle,
                            ...(isMobile ? styles.navGroupTitleMobile : {})
                        }} onClick={() => toggleSection('mc-papers')}>
                            <div style={styles.navGroupLink}>
                                <Link to="/mc-papers" style={{ 
                                    ...styles.navLink,
                                    ...(isMobile ? styles.navLinkMobile : {}),
                                    ...(location.pathname === '/mc-papers' ? styles.navLinkActive : {}),
                                    marginBottom: 0,
                                    width: '100%'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isMobile) {
                                        setIsExpanded(false);
                                        if (onToggle) onToggle(false);
                                    }
                                }}>MC 論文徵稿主題</Link>
                            </div>
                            <span style={{ ...styles.arrow, ...(openSections['mc-papers'] ? styles.arrowOpen : {}) }}>▶</span>
                        </div>
                        <div style={{ 
                            ...styles.subNav,
                            ...(isMobile ? styles.subNavMobile : {}),
                            ...(openSections['mc-papers'] ? styles.subNavOpen : {}) 
                        }}>
                            <Link to="/mc-submission" style={{ 
                                ...styles.navLink,
                                ...(isMobile ? styles.navLinkMobile : {}),
                                ...(location.pathname === '/mc-submission' ? styles.navLinkActive : {}) 
                            }}
                            onClick={() => {
                                if (isMobile) {
                                    setIsExpanded(false);
                                    if (onToggle) onToggle(false);
                                }
                            }}>MC 論文投稿</Link>
                        </div>
                    </div>
                    <div style={styles.navGroup}>
                        <div style={{
                            ...styles.navGroupTitle,
                            ...(isMobile ? styles.navGroupTitleMobile : {})
                        }} onClick={() => toggleSection('wasn-papers')}>
                            <div style={styles.navGroupLink}>
                                <Link to="/wasn-papers" style={{ 
                                    ...styles.navLink,
                                    ...(isMobile ? styles.navLinkMobile : {}),
                                    ...(location.pathname === '/wasn-papers' ? styles.navLinkActive : {}),
                                    marginBottom: 0,
                                    width: '100%'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isMobile) {
                                        setIsExpanded(false);
                                        if (onToggle) onToggle(false);
                                    }
                                }}>WASN 論文徵稿主題</Link>
                            </div>
                            <span style={{ ...styles.arrow, ...(openSections['wasn-papers'] ? styles.arrowOpen : {}) }}>▶</span>
                        </div>
                        <div style={{ 
                            ...styles.subNav,
                            ...(isMobile ? styles.subNavMobile : {}),
                            ...(openSections['wasn-papers'] ? styles.subNavOpen : {}) 
                        }}>
                            <Link to="/wasn-submission" style={{ 
                                ...styles.navLink,
                                ...(isMobile ? styles.navLinkMobile : {}),
                                ...(location.pathname === '/wasn-submission' ? styles.navLinkActive : {}) 
                            }}
                            onClick={() => {
                                if (isMobile) {
                                    setIsExpanded(false);
                                    if (onToggle) onToggle(false);
                                }
                            }}>WASN 論文投稿</Link>
                        </div>
                    </div>
                    <Link to="/registration" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/registration' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        大會註冊
                    </Link>
                    <Link to="/transportation" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/transportation' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        交通資訊
                    </Link>
                    <Link to="/sponsorship" style={{ 
                        ...styles.navLink,
                        ...(isMobile ? styles.navLinkMobile : {}),
                        ...(location.pathname === '/sponsorship' ? styles.navLinkActive : {}) 
                    }}
                    onClick={() => {
                        if (isMobile) {
                            setIsExpanded(false);
                            if (onToggle) onToggle(false);
                        }
                    }}>
                        贊助辦法
                    </Link>
                </nav>
            </div>
            
            <button
                style={{
                    ...styles.toggleButton,
                    left: getButtonPosition()
                }}
                onClick={toggleSidebar}
                aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            >
                {isExpanded ? '◀' : '▶'}
            </button>
        </>
    );
}

export default Sidebar;
