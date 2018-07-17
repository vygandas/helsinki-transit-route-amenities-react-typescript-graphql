import * as React from "react";
import {connect} from "react-redux";
import "./SearchForm.scss";
import { debounce } from "throttle-debounce";
import {getStreetSuggestions, clearStreetSuggestions, setSelectedAddress} from "../../actions/search.actions";
import {IAutoCompleteResponse} from "../../interfaces/IAutoCompleteResponse";
import {TAutoCompleteFeature} from "../../types/TAutoCompleteFeature";
import {IAmenitiesState} from "../../interfaces/IAmenitiesState";
import {AutoCompleteComponent} from "../AutoComplete/index";
import { ISelectedAddress } from "../../interfaces/ISelectedAddress";

export interface SearchFormComponentProps {
    selected: ISelectedAddress;
    autocomplete?: IAutoCompleteResponse<TAutoCompleteFeature>
    getStreetSuggestions: typeof getStreetSuggestions;
    clearStreetSuggestions: typeof clearStreetSuggestions;
    setSelectedAddress: typeof setSelectedAddress;
}

interface SearchFormComponentState {
    isAddressSelected: boolean;
    inputValue: string;
}

class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    private getAutoCompleteDebounced;
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.state = {
            isAddressSelected: false,
            inputValue: ''
        };
        this.getAutoCompleteDebounced = debounce(300, false, this.getAutoComplete);
    }
    getAutoComplete = (text: string): void => {
        console.log("text", text);
        console.log("SearchFormComponent this.props", this.props);
        if (text !== null && text.length > 0) {
            this.props.getStreetSuggestions(text);
        } else {
            this.clearSuggestionsHandler();
        }
    }
    clearSuggestionsHandler = () => {
        this.setState({
            isAddressSelected: false
        });
        this.props.clearStreetSuggestions();
    }
    selectSuggestionHandler = (suggestion: ISelectedAddress) => {
        this.setState({
            isAddressSelected: true,
            inputValue: suggestion.address
        });
        this.props.setSelectedAddress(suggestion);
        this.props.clearStreetSuggestions();
    }
    render(): JSX.Element {
        return (
            <div className="search-form-component">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        minLength={2}
                        className="form-control p-3"
                        placeholder="Street address..."
                        onChange={event => {
                            this.setState({ isAddressSelected: false, inputValue: event.target.value });
                            this.getAutoCompleteDebounced(event.target.value);
                        }}
                        value={this.state.inputValue}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            type="button"
                            disabled={!this.state.isAddressSelected}
                        >Search</button>
                    </div>
                </div>
                <AutoCompleteComponent
                    autocomplete={this.props.autocomplete}
                    clearHandler={this.clearSuggestionsHandler}
                    onSelectHandler={this.selectSuggestionHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: { amenities: IAmenitiesState }) => ({
    selected: state.amenities.selected,
    autocomplete: state.amenities.autocomplete
});

export default connect(
    mapStateToProps,
    {getStreetSuggestions, clearStreetSuggestions, setSelectedAddress}
)(SearchFormComponent);
