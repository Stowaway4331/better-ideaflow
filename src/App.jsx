import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NotesLinks from "./components/NotesLinks";
import BackedBy from "./components/BackedBy";
import Hero2 from "./components/Hero2";
import Founders from "./components/Founders";
import Hiring from "./components/Hiring";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="pt-12 px-8 flex flex-col items-center max-w-5xl justify-center gap-80">
        <div className="mt-20 flex flex-col justify-center items-center">
          <Hero />
          <NotesLinks />
        </div>
        <div className="">
          <BackedBy />
        </div>
        <div className="">
          <Hero2 />
        </div>
        <div className="">
          <Founders />
        </div>
        <div className="">
          <Hiring />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
