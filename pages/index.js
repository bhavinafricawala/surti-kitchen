/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuBar from './components/menubar';
import Slides from './components/slides';
import styles from '../styles/Home.module.css';
import Footer from './components/footer';

const Home = () => {
    return (
        <div>
            <header className="top-navbar">
                <MenuBar pagename="home" />
            </header>
            <div className={styles.container}>
                <Head>
                    <title>Surti Kitchen</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={styles.bodyContainer}>
                    <Slides />
                </div>
                <div className="qt-background">
                    <Container>
                        <Row>
                            <Col>
                                <p className="lead">
                                    " A recipe has no soul. You as the cook must bring soul to the
                                    recipe. "
                                    <br />
                                    Thomas Keller
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
