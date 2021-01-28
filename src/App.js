import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage';

const App=()=>{
    return(
        <div>
            <h1>Redux Demo</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage}/>
                    <Route exact path="/posts" component={PostsPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App