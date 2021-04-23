import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Search from './core/Search';
import Historia from './core/Club';
import Noticia from './core/Noticia';
import Signin from './core/Signin';
import Signup from './core/Signup';
import AddNoticia from './core/noticia/addNoticia';


const Routes = () =>{

    return ( 
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Historia" exact component={Historia}/>
            <Route path="/Noticia" exact component={Noticia}/>
            <Route path="/Signin" exact component={Signin}/>
            <Route path="/Signup" exact component={Signup}/>
            <Route path="/searchById" exact component={Search}/>
            <Route path="/addNoticia" exact component={AddNoticia}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
