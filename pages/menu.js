import React from 'react';
import MenuBar from './components/menubar';
import Footer from './components/footer';

const Menu = () => {
    return (
        <div>
            <header className="top-navbar">
                <MenuBar pagename="menu" />
                <Footer />
            </header>
        </div>
    );
};

export default Menu;
