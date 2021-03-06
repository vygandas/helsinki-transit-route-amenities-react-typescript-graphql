import * as React from "react";
import {connect} from "react-redux";
import "./Amenities.scss";
import { ISelectedAddress } from "../../interfaces/ISelectedAddress";
import { setSelectedAddress } from "../../actions/search.actions";
import { IAmenitiesState } from "../../interfaces/IAmenitiesState";
import { GET_AMENITIES } from "../../queries";
import QueryAmenities from "../../queries/QueryAmenities";
import AmenitiesMapComponent from "../../components/AmenitiesMap";

export interface AmenitiesPageProps {
    match: { params?: {
        address: string;
        lat: number;
        lon: number;
    }};
    selected: ISelectedAddress;
    setSelectedAddress: typeof setSelectedAddress;
}

interface AmenitiesPageState {
}

class AmenitiesPage extends React.Component<AmenitiesPageProps, AmenitiesPageState> {
    constructor(props: AmenitiesPageProps) {
        super(props);
    }
    componentWillMount(): void {
        if (this.props.selected === null) {
            this.props.setSelectedAddress({
                address: this.props.match.params.address,
                lat: this.props.match.params.lat,
                lon: this.props.match.params.lon,
            });
        }
    }
    render(): JSX.Element {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="amenities-page p-5">
                            <h1 className="h4">
                                Amenities at {this.props.match.params.address}
                            </h1>
                            {this.props.selected &&
                            <QueryAmenities
                                query={GET_AMENITIES}
                                variables={{ lat: this.props.selected.lat, lon: this.props.selected.lon }}
                            >
                                {({ loading, error, data }) => {
                                    if (loading) return <div>Loading...</div>;
                                    if (error) return <div>Error :(</div>;
                                    return (
                                        <AmenitiesMapComponent
                                            address={this.props.selected}
                                            amenities={data}
                                        />
                                    );
                                }}
                            </QueryAmenities>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: { amenities: IAmenitiesState }) => ({
    selected: state.amenities.selected
});
export default connect(
    mapStateToProps,
    {setSelectedAddress}
)(AmenitiesPage);