import {
  Burn,
  Container,
  Hero,
  Introduction,
  KeyNotes,
  Mission,
  Navbar,
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
      </Container>
    </>
  );
};

export default App;
