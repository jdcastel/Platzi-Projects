
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";


export const Expertise = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="expertise" id="expertises">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="expertise-bx wow zoomIn">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInLeft" : ""
                    }
                  >
                    <h2>My Expertise</h2>
                    <br></br>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.<br></br> Lorem Ipsum has been the
                      industry's standard dummy text.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <h5>React</h5>
              <div className="bar-box" responsive={responsive} infinite={true}>
                <div
                  className="progressbar"
                  style={{
                    width: `${95}%`,
                  }}
                />
              </div>
              <h5>Node.js</h5>
              <div className="bar-box" responsive={responsive} infinite={true}>
                <div
                  className="progressbar"
                  style={{
                    width: `${90}%`,
                  }}
                />
              </div>
              <h5>Express.js</h5>
              <div className="bar-box" responsive={responsive} infinite={true}>
                <div
                  className="progressbar"
                  style={{
                    width: `${100}%`,
                  }}
                />
              </div>
              <h5>JavaScript</h5>
              <div className="bar-box" responsive={responsive} infinite={true}>
                <div
                  className="progressbar"
                  style={{
                    width: `${85}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
