# Helsinki Transit Route Amenities

[![CircleCI](https://circleci.com/gh/vygandas/helsinki-transit-route-amenities-react-typescript-graphql/tree/master.svg?style=svg)](https://circleci.com/gh/vygandas/helsinki-transit-route-amenities-react-typescript-graphql/tree/master)

Website is deployed with CI here https://agitated-lovelace-bc6fda.netlify.com/#/

## Task

API: https://api.digitransit.fi/graphiql/hsl

Console: http://dev.hsl.fi/graphql/console/ 

More Details: https://digitransit.fi/en/developers/
 
**Requirements:**

- App should enable user to enter a location in Helsinki and it should show me the nearest amenities (stops, bike rentals, bike parking, and car parking)
  - You will probably want to use some geocoding API for this. 
    (e.g. https://digitransit.fi/en/developers/apis/2-geocoding-api/address-search/) 
- App should use React
- App should be written in TypeScript and demonstrate proper usage of types 
- App should consist of two screens:
  - Enter location screen
  - Results screen
- App should be mobile responsive


## Features in this project core

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (2.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (6.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Production build script
* Image loading/minimization using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
* Code quality (linting) for Typescript and SASS/CSS.
* **[Axios](https://github.com/axios/axios)**
* **[Thunk](https://github.com/reduxjs/redux-thunk)**
---

## Installation
1. `npm install`

## Usage
**Development**

`npm run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080` 

**Production**

`npm run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/` 
`npm run test:watch` | Run tests and watch
`npm run lint` | Run Typescript and SASS linter
`npm run lint:ts` | Run Typescript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)
`npm run deploy` | Run tests and then build

