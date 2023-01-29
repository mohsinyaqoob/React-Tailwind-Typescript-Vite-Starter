import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routings from "@/routing/Routings";
import Layout from "@/shared/layout";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  );
};

export default App;
