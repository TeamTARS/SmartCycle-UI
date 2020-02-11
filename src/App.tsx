import "./App.css";

import React from "react";

import AboutPage from "./Pages/About";
import Header from "./Pages/CommonComponents/Header";
import FeedbackPage from "./Pages/Feedback";
import HelpPage from "./Pages/Help";
import HomePage from "./Pages/Home";
import ItemPage from "./Pages/Item";
import ResultsPage from "./Pages/Results";
import SettingsPage from "./Pages/Settings";

const App = () => {
  return (
    <div className="App">
      <Header test="props test" />
      <body>
        <HomePage test="props test" />
        <HelpPage test="props test" />
        <FeedbackPage test="props test" />
        <AboutPage test="props test" />
        <ItemPage test="props test" />
        <ResultsPage test="props test" />
        <SettingsPage test="props test" />
      </body>
    </div>
  );
};

export default App;
