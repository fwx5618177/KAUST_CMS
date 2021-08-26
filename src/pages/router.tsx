import React, { lazy, Suspense } from "react";
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import Home from './home';
import Detail from './detail/detail';
import path from 'path';

// 1.　路由地址配置
const viewPages: {
    [pagesNumber: number]: Function
} = {
    1001: lazy(() =>　import(path.join(__dirname, 'login/index'))),
    1002: lazy(() =>　import(path.join(__dirname, 'detail/detail'))),
}

const Router = () =>　{
    return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Route exact path="/" component={Home} />
        {Object.entries(viewPages).map(item => {
            return (
                <Route path={item[0]} name={item[0]} component={item[1]} />
            )
        })}
        </Switch>
    </Suspense>
    </BrowserRouter>
    )
};

export default Router;