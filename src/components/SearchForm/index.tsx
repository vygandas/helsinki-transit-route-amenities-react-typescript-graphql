import * as React from "react";
import {connect} from "react-redux";
import "./SearchForm.scss";
import { debounce } from "throttle-debounce";
import {getStreetSuggestions} from "../../actions/search.actions";
import {IAutoCompleteResponse} from "../../interfaces/IAutoCompleteResponse";
import {TAutoCompleteFeature} from "../../types/TAutoCompleteFeature";
import {IAmenitiesState} from "../../interfaces/IAmenitiesState";

export interface SearchFormComponentProps {
    search_input: string;
    autocomplete?: IAutoCompleteResponse<TAutoCompleteFeature>
    getStreetSuggestions: typeof getStreetSuggestions;
}

interface SearchFormComponentState {
}

class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    private getAutoCompleteDebounced;
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.getAutoCompleteDebounced = debounce(500, false, this.getAutoComplete);
    }
    getAutoComplete(text: string): void {
        console.log("text", text);
        this.props.getStreetSuggestions(text);
    }
    render(): JSX.Element {
        console.log("search_input", this.props.search_input);
        return (
            <div className="search-form-component">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        minLength={2}
                        className="form-control p-3"
                        placeholder="Street address..."
                        onChange={event => this.getAutoCompleteDebounced(event.target.value)}
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

const mapStateToProps = (state: IAmenitiesState) => ({
    search_input: state.search_input,
    autocomplete: state.autocomplete
});

export default connect(
    mapStateToProps,
    {getStreetSuggestions}
)(SearchFormComponent);
