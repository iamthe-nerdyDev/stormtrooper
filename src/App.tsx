import {
  Burn,
  CTA,
  CallToJoin,
  Container,
  Footer,
  Grid,
  Hero,
  Introduction,
  KeyNotes,
  Mission,
  Navbar,
  Partners,
} from "./components";
import "./main.css";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Introduction />
        <Mission />
        <KeyNotes />
        <Burn />
        <CallToJoin />
        <Grid />
        <CTA />
        <Partners />
        <Footer />
      </Container>
    </>
  );
};

export default App;
