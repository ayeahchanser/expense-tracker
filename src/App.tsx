import React, { FC } from "react";
import AppLayout from "./Layout/AppLayout";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ExpensePage } from "./Pages/ExpensePage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/batch/:batchId"} component={ExpensePage} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
