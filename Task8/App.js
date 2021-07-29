import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from"react-router-dom" 
import People from './People'

function App(){
  return (
    <div>
    <Router>
      <div>
      <Switch>
      <Route path="/people/:id">
        <People /> 
      </Route>
        </Switch>
        </div>
    </Router>
    </div>
  )
}


export default App;