import * as React from "react";
import "assets/scss/App.scss";

import store from "./store";
import {Provider} from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import FrontDoorPage from "./views/FrontDoor/index";
import AmenitiesPage from "./views/Amenities/index";

import Header from "./views/partial/Header";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render(): JSX.Element {
        return (
            <Provider store={store}>
                <div className="app-component">
                    <HashRouter>
                        <div>
                            <Header/>
                            <Switch>
                                <Route name="home" exact path="/" component={FrontDoorPage}/>
                                <Route name="amenities" path="/:address/:lat/:lon" component={AmenitiesPage}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </div>
            </Provider>
        );
    }
}
