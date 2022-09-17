import styled from "styled-components";

import { HashRouter, Routes } from "react-router-dom";

import { generalRoutes } from "./routes/generalRoutes";
import DistributionOfRoutes from "./components/hoc/DistributionOfRoutes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const routes = DistributionOfRoutes(generalRoutes);

  return (
    <Wrapper>
      <HashRouter>
        <Routes>{routes}</Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
