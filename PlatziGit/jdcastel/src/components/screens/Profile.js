import { Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/img/BannerJD.png";

export const Profile = () => {
  return (
    <section className="profile" id="profiles">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="profile-bx wow zoomIn">
              <Row>
                <Col xs={12} md={6} xl={6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__slideInLeft"
                            : ""
                        }
                      >
                        <h2>Profile</h2>
                        <br></br>
                        <p>
                          I am currently in my last year studying Computer
                          Programming and Analysis at Seneca College; I have
                          been participating in intensive training in IT
                          programs where I have developed solid programming
                          skills and have had the opportunity to develop other
                          essential areas such as DevOps and Cloud Computing.
                          <br />
                          <br />I have developed teamwork skills, looking for
                          ways to work efficiently, accurately, and always
                          successfully managing many stressful situations
                          resolving them under time pressure.
                        </p>
                      </div>
                    )}
                  </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={6}>
                  <img src={headerImg} alt="Header Img" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
};
