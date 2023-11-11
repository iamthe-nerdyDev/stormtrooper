import { Container, Hero, Introduction, Navbar } from "./components";
import "./main.css";

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Introduction />
      </Container>
    </>
  );
};

export default App;
