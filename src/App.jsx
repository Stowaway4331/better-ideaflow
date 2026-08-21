import Header from "./components/Header";
import Hero from "./components/Hero";
import NotesLinks from "./components/NotesLinks";
import BackedBy from "./components/BackedBy";
import Hero2 from "./components/Hero2";
import Founders from "./components/Founders";
import Hiring from "./components/Hiring";
import Footer from "./components/Footer";
import AmbientBackground from "./controllers/AmbientBackground";

const App = () => {

  return (
    <div className="relative flex flex-col items-center">
      <AmbientBackground />
      <Header />
      <div className="pt-28 md:pt-32 px-6 md:px-8 flex flex-col items-center w-full max-w-5xl justify-center gap-32 md:gap-48">
        <div className="mt-8 flex flex-col justify-center items-center w-full">
          <Hero />
          <NotesLinks />
        </div>
        <div className="w-full">
          <BackedBy />
        </div>
        <div className="w-full">
          <Hero2 />
        </div>
        <div className="w-full">
          <Founders />
        </div>
        <div className="w-full">
          <Hiring />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
