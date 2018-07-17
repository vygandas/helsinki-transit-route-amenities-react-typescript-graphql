import * as React from "react";
import "./SearchForm.scss";

export interface SearchFormComponentProps {
}

interface SearchFormComponentState {
}

class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    constructor(props: SearchFormComponentProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div className="search-form-component">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Street address..."
                    />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                            >Search</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default SearchFormComponent;
