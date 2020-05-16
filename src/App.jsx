import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ChallengesList} from './ChallengesList'
import {Challenge} from './Challenge'
import {NewChallenge} from './NewChallenge'

function App() {
  return (
    <Switch>
      <Route path="/challenge/:challengeId" component={Challenge}/>
      <Route path="/new-challenge" component={NewChallenge}/>
      <Route exact path="/" component={ChallengesList}/>
    </Switch>
  );
}

export default App;
