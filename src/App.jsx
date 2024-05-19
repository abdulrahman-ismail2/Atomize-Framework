import Design from "./Design";
import Features from "./Features";
import { GetNotifiy } from "./GetNotifiy";
import Landing from "./Landing";
import MoreFeats from "./MoreFeats";
import PerfectDesign from "./PerfectDesign";
import Section from "./Section";
import Symentics from "./Symentics";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style.css";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Section />
      <Features />
      <MoreFeats />
      <PerfectDesign />
      <Design />
      <Symentics />
      <GetNotifiy />
      <Footer />
    </>
  );
}

export default App;
