import Header from './components/layouts/Header'
import Sidebar from './components/layouts/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscriptions from './pages/Subscriptions'
import Channel from './pages/Channel'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <div id="content" className="p-4 ml-20 overflow-y-scroll">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/channel" component={Channel} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
