import React from 'react';
import {Switch,Route} from 'react-router-dom';

import LandingPageLayout from './layouts/Landingpage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Switch>
      <Route path="/">
        <LandingPageLayout heading="Infinite Yoga">
          <HomePage></HomePage>

        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
