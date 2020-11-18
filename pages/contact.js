import MenuBar from './components/menubar';
import React from 'react';
import Footer from './components/footer';

const Contact = () => {
    return (
        <div>
            <header className="top-navbar">
                <MenuBar pagename="contact" />
                <Footer />
            </header>
        </div>
    );
};

export default Contact;
