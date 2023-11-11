import {
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
      </Container>
    </>
  );
};

export default App;
