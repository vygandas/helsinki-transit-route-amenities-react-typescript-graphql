import { gql } from "apollo-boost";

export const GET_AMENITIES = gql`
  query getAmenities($lat: Float!, $lon: Float!) {
    stops: nearest(lat: $lat, lon: $lon, filterByPlaceTypes: [STOP]) {
      edges {
        node {
          distance
          place {
            id
            lat
            lon
            __typename
          }
        }
      }
    }
    bikeRentals: nearest(lat: $lat, lon: $lon, filterByPlaceTypes: [BICYCLE_RENT]) {
      edges {
        node {
          distance
          place {
            id
            lat
            lon
            __typename
          }
        }
      }
    }
    bikeParkings: nearest(lat: $lat, lon: $lon, filterByPlaceTypes: [BIKE_PARK]) {
      edges {
        node {
          distance
          place {
            id
            lat
            lon
            __typename
          }
        }
      }
    }
    carParkings: nearest(lat: $lat, lon: $lon, filterByPlaceTypes: [CAR_PARK]) {
      edges {
        node {
          distance
          place {
            id
            lat
            lon
            __typename
          }
        }
      }
    }
  }
`;