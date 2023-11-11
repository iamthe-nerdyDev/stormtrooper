import { Container, Hero, Introduction, Mission, Navbar } from "./components";
import "./main.css";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Introduction />
        <Mission />
      </Container>
    </>
  );
};

export default App;
