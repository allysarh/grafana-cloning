import React from 'react';
import { Switch } from 'react-router';
import SidebarComp from './components/SidebarComp';
import DashboardPage from './pages/DashboardPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <SidebarComp />
        <Switch>
          <DashboardPage />
        </Switch>
      </>
    );
  }
}

export default App;