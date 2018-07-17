import * as React from "react";
import "./FrontDoor.scss";

export interface FrontDoorPageProps {
}

interface FrontDoorPageState {
}

class FrontDoorPage extends React.Component<FrontDoorPageProps, FrontDoorPageState> {
    constructor(props: FrontDoorPageProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <div className="fd-page text-center p-5">
                            <h1 className="display-1">
                                Find amenities!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontDoorPage;
