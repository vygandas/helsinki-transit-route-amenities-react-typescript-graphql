import * as React from "react";
import "./Header.scss";

const background = require("assets/img/helsinki.jpg");

import SearchForm from "../../../components/SearchForm";

export interface HeaderPartialProps {
}

interface HeaderPartialState {
}

class HeaderPartial extends React.Component<HeaderPartialProps, HeaderPartialState> {
    constructor(props: HeaderPartialProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div class="container-fluid header-partial" style={{ backgroundImage: `url('${background}')` }}>
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                 <div className="col-12">
                                     <div className="p-5" >
                                        <h2 className="display-4 mt-5 header-title mb-3">Search for amenities near</h2>
                                        <SearchForm/>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderPartial;
