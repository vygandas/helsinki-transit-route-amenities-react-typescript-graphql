import * as React from "react";
import "assets/scss/App.scss";

import store from "./store";
import {Provider} from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import FrontDoorPage from "./views/FrontDoor";
import AmenitiesPage from "./views/Amenities";

import Header from "./views/partial/Header";

import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { API_AMENITIES_URL } from "./config/api.config";

const client = new ApolloClient({
    uri: API_AMENITIES_URL,
    headers: {
        accept: 'application/json'
    }
    // ,
    // clientState: {
    //   defaults,
    //   resolvers,
    //   typeDefs
    // }
});

export default class App extends React.Component<undefined, undefined> {
    render(): JSX.Element {
        return (
            <Provider store={store}>
                <div className="app-component">
                    <ApolloProvider client={client}>
                        <HashRouter>
                            <div>
                                <Header/>
                                <Switch>
                                    <Route name="home" exact path="/" component={FrontDoorPage}/>
                                    <Route name="amenities" path="/:address/:lat/:lon" component={AmenitiesPage}/>
                                </Switch>
                            </div>
                        </HashRouter>
                    </ApolloProvider>
                </div>
            </Provider>
        );
    }
}
