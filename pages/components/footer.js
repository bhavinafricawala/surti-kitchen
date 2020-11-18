import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faPhone, faEnvelope, faMapMarker);

const Footer = () => {
    return(
      <div className="contactinfobox">
        <Container>
          <Row>
            <Col>
              <FontAwesomeIcon icon="phone" size="md"/>
              <div className="overflow-hidden">
                <h4>Phone</h4>
                <p className="lead">
                  (443) 467-1561
                </p>
              </div>
            </Col>
            <Col>
            <FontAwesomeIcon icon="envelope" />
              <div className="overflow-hidden">
                <h4>Email</h4>
                <p className="lead">
                  surtikitchen.catering@gmail.com
                </p>
              </div>
            </Col>
            <Col>
            <FontAwesomeIcon icon="map"/>
              <div className="overflow-hidden">
                <h4>Location</h4>
                <p className="lead">
                  8461 Calhay Way, Elk Grove, CA 95757
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer;