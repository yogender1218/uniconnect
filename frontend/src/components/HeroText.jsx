import { Button, Container, Text, Title } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./HeroText.module.css";
import { Link } from "react-router-dom";
import { StyledGetStarted } from "./StylesGetStarted";

const HeroText = () => {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Ignite Startup Dreams with{" "}
          <Text component="span" className={classes.highlight} inherit>
          AI-Driven Guidance
          </Text>{" "}
          & Real-Time Growth Tracking 🚀
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          Step into a world where timeless entrepreneurial spirit meets cutting-edge digital innovation. Here, every student’s ambition, mentor’s wisdom, and investor’s vision blend seamlessly. Watch live startup pitches evolve, harness AI-powered recommendations, and track funding progress in real time.

This is more than a platform—it’s a symphony of ideas, insights, and impactful networking. Feel the pulse of future unicorns, engage with leaders who shape tomorrow, and let your startup journey unfold with clarity, community, and confidence.
          </Text>
        </Container>

        <div className={classes.controls}>
         <Link to="/sinup">
         <Button style={{marginBottom:'10px'}} className={classes.control} size="lg" variant="default" color="gray">
         <StyledGetStarted ></StyledGetStarted>
          </Button>
         </Link>
          <Button className={classes.control} size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroText;
