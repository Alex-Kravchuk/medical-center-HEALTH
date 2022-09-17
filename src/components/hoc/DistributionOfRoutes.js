import { Route } from "react-router-dom";

const DistributionOfRoutes = (routes) => {
  return routes.map((route, index) => {
    const { path, element, children } = route;

    if (children) {
      return (
        <Route path={path} element={element} key={index}>
          {DistributionOfRoutes(children)}
        </Route>
      );
    } else {
      return <Route path={path} element={element} key={index} />;
    }
  });
};

export default DistributionOfRoutes;
