import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembrs";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="Sobre">
      <CommonSection title="Sobre nós" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Estamos comprometidos em fornecer soluções de passeio seguro 
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque in 
                  laboriosam voluptates culpa doloribus, 
                  odit perferendis consectetur rerum deserunt odio 
                  tenetur dolores consequatur eligendi aut illum alias  officiis.
                </p>

                <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque in 
                  laboriosam voluptates culpa doloribus, 
                  odit perferendis consectetur rerum deserunt odio 
                  tenetur dolores consequatur eligendi aut illum alias nam officiis.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Precisa de alguma coisa?</h6>
                    <h4>0800 123 456</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Especialistas</h6>
              <h2 className="section__title">Nossos Membros</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;