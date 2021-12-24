import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Datasources from "./Pages/Datasources";
import ConfigTable from "./Pages/ConfigTable";
import DatasourceTable from "./Pages/DatasourceTable";
import MartDetails from "./Pages/MartDetails";
import QualityChecksView from "./Pages/QualityChecksView";
import TableExpectation from "./Components/Expectations/TableExpectation";
import ColumnExpectation from "./Components/Expectations/ColumnExpectation";

function AppBody() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Datasources />} exact />
        <Route path="/configuration" element={<ConfigTable />} />
        <Route path="/configuration/datasource" element={<DatasourceTable />} />
        <Route
          path="/configuration/datasource/martdetails"
          element={<MartDetails />}
        />
        <Route
          path="/configuration/datasource/martdetails/qualitychecks"
          element={<QualityChecksView />}
        />
        <Route
          path="/configuration/datasource/martdetails/qualitychecks/tablechecks"
          element={<TableExpectation />}
        />
        <Route
          path="/configuration/datasource/martdetails/qualitychecks/columnchecks"
          element={<ColumnExpectation />}
        />
      </Routes>
    </Router>
  );
}
export default AppBody;
