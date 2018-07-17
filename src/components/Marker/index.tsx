import * as React from "react";
import "./Marker.scss";

const markerImageS = require('assets/img/marker-s.png');
const markerImageR = require('assets/img/marker-r.png');
const markerImageB = require('assets/img/marker-b.png');
const markerImageP = require('assets/img/marker-p.png');
const markerImageA = require('assets/img/marker-a.png');

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
    type?: string;
}

const getMarkerImage = (type: string) => {
    switch (type) {
        case "s": return <img src={markerImageS} width={20} height={20}/>
        case "r": return <img src={markerImageR} width={20} height={20}/>
        case "b": return <img src={markerImageB} width={20} height={20}/>
        case "p": return <img src={markerImageP} width={20} height={20}/>
        default: return <img src={markerImageA} width={20} height={20}/>
    }
}

export const Marker = (props: MarkerProps) => {
    return (
        <div className="marker-component">
            {getMarkerImage(props.type)}
            <span>{props.text}m</span>
        </div>
    );
}