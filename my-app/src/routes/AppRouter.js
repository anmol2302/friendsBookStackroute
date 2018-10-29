import React from "react";
import {BrowserRouter , Route,Switch } from  "react-router-dom";
import NextPage from "./../Nextpage";
import NextPage2 from "./../nextpage2"
import App from "./../App";
class AppRouter extends React.Component 
{
    render  ()
    {
        return (
            <div>
            <BrowserRouter>
            <Switch>
                <Route path = "/" component ={App} exact = {true}/>
                <Route path = "/next-page" component = {NextPage}/>
                <Route path = "/next-page2" component = {NextPage2}/>
            </Switch>
                 
            </BrowserRouter>
            </div>
        );
    }
}
export default AppRouter;