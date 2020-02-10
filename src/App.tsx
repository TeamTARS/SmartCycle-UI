import "./App.css";

import React from "react";

import AboutPage from "./Pages/About/About";
import Header from "./Pages/CommonComponents/Header";
import FeedbackPage from "./Pages/Feedback/Feedback";
import HelpPage from "./Pages/Help/Help";
import HomePage from "./Pages/Home/Home";
import ItemPage from "./Pages/Item/Item";
import ResultsPage from "./Pages/Results/Results";
import SettingsPage from "./Pages/Settings/Settings";

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
