import { Query } from "../../node_modules/react-apollo";
import { IQueryAmenitiesVariables } from "../interfaces/IQueryAmenitiesVariables";
import { IQueryAmenitiesData } from "../interfaces/IQueryAmenitiesData";

export default class QueryAmenities extends Query<IQueryAmenitiesData, IQueryAmenitiesVariables> {}