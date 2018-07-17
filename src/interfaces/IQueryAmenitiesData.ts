import { IQueryAmenityEdges } from "./IQueryAmenityEdges";
import { IQueryAmenityNode } from "./IQueryAmenityNode";

export interface IQueryAmenitiesData {
    bikeParkings: IQueryAmenityEdges<IQueryAmenityNode>,
    bikeRentals: IQueryAmenityEdges<IQueryAmenityNode>,
    carParkings: IQueryAmenityEdges<IQueryAmenityNode>,
    stops: IQueryAmenityEdges<IQueryAmenityNode>,
}