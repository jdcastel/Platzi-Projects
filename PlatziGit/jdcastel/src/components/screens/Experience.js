import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ontarioLogo from "../../assets/img/onLogo.png";
import hispanoLogo from "../../assets/img/hispanotech.png";
import TrackVisibility from "react-on-screen";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem" }}
        style={{ color: "#fff" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Experience() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="experience" id="experiences">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "animate__animated animate__slideInLeft" : ""
            }
          >
            <h2>Professional Experience</h2>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="accordion"
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className="typography-title">
                  Low Code Application Developer co-op
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography className="typography-text">
                        Create using the MERN stack that allows clients to see
                        the progress of pending assignments. Collaborated with
                        an agile team to create a betting application within the
                        company for +1000 users storing the data in Azure blobs.
                        Worked on building a new PowerApps application that
                        contains all the organization's events so employees can
                        subscribe and participate in them.
                        <br />
                        <br />• Technologies: MongoDB, Express.js, React,
                        Node.js, PowerApps, Azure
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        src={ontarioLogo}
                        alt="Ontario"
                        style={{ height: "auto", maxWidth: "80%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="accordion"
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography className="typography-title">
                  Technical Support Assistance Volunteer
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography className="typography-text">
                        Provided solutions for our client engagements to manage
                        the entire implementation life cycle and oversee the
                        required components of the project as an interface to
                        clients. Work together with other technical support
                        specialists to find solutions to more complex problems
                        looking for the most efficient way.
                        <br />
                        <br />• Technologies: HTML, CSS, JavaScript, GitHub
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ alignItems: "center" }}>
                      <img
                        src={hispanoLogo}
                        alt="Ontario"
                        style={{ height: "auto", maxWidth: "50%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
}
