import * as React from "react";
import "assets/scss/App.scss";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render(): JSX.Element {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="app-component">
                        Hello
                    </div>
                </div>
            </div>
        );
    }
}
