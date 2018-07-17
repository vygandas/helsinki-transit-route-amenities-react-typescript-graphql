import * as React from "react";
import "./AmenitiesMap.scss";
import GoogleMapReact from 'google-map-react';
import { ISelectedAddress } from "../../interfaces/ISelectedAddress";
import { Marker } from "../Marker";
import { IQueryAmenityNode } from "../../interfaces/IQueryAmenityNode";
import { IQueryAmenityEdges } from "../../interfaces/IQueryAmenityEdges";
import { IQueryAmenitiesData } from "../../interfaces/IQueryAmenitiesData";

export interface AmenitiesMapComponentProps {
    address: ISelectedAddress;
    amenities: IQueryAmenitiesData
}

class AmenitiesMapComponent extends React.Component<AmenitiesMapComponentProps, {}> {
    constructor(props) {
        super(props);
    }
    
    render(): JSX.Element | null {
        console.log("this.props.address!!!!!!!!!!", this.props.address);
        return (
            <div className="amenities-map-component">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAvqq3Q2JhWgc9onzCzEGA8-vToh14jXBM" }}
                    defaultCenter={{
                        lat: parseFloat(this.props.address.lat.toString()),
                        lng: parseFloat(this.props.address.lon.toString())
                    }}
                    defaultZoom={16}
                    options={{ }}
                >
                    <Marker
                        lat={parseFloat(this.props.address.lat.toString())}
                        lng={parseFloat(this.props.address.lon.toString())}
                        text={this.props.address.address}
                    />

                    {this.props.amenities && this.props.amenities.stops.edges.map((node: IQueryAmenityNode) => (
                        <Marker
                            lat={parseFloat(node.node.place.lat.toString())}
                            lng={parseFloat(node.node.place.lon.toString())}
                            text={`Distance: ${node.node.distance.toString()}`}
                            type="s"
                        />
                    ))}
                    {this.props.amenities && this.props.amenities.bikeRentals.edges.map((node: IQueryAmenityNode) => (
                        <Marker
                            lat={parseFloat(node.node.place.lat.toString())}
                            lng={parseFloat(node.node.place.lon.toString())}
                            text={`Distance: ${node.node.distance.toString()}`}
                            type="r"
                        />
                    ))}
                    {this.props.amenities && this.props.amenities.bikeParkings.edges.map((node: IQueryAmenityNode) => (
                        <Marker
                            lat={parseFloat(node.node.place.lat.toString())}
                            lng={parseFloat(node.node.place.lon.toString())}
                            text={`Distance: ${node.node.distance.toString()}`}
                            type="b"
                        />
                    ))}
                    {this.props.amenities && this.props.amenities.carParkings.edges.map((node: IQueryAmenityNode) => (
                        <Marker
                            lat={parseFloat(node.node.place.lat.toString())}
                            lng={parseFloat(node.node.place.lon.toString())}
                            text={`Distance: ${node.node.distance.toString()}`}
                            type="p"
                        />
                    ))}

                </GoogleMapReact>
            </div>
        );
    }    
}

export default AmenitiesMapComponent;
