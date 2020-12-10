
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Riddles from './Pages/Ridddles';
import Leaderboard from './Pages/Leaderboard'
import Scores from './Pages/Scores';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/riddles' component={Riddles} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/scores' component={Scores} />
      </Switch>
      </Router>
    </>
  );
}

export default App;