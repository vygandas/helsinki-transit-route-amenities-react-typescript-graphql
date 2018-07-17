import * as React from "react";
import "./Amenities.scss";

export interface AmenitiesPageProps {
    match: { params?: { location?: string } };
}

interface AmenitiesPageState {
}

class AmenitiesPage extends React.Component<AmenitiesPageProps, AmenitiesPageState> {
    constructor(props: AmenitiesPageProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <div className="amenities-page text-center p-5">
                            <h1 className="display-1">
                                Amenities at {this.props.match.params.location}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AmenitiesPage;
