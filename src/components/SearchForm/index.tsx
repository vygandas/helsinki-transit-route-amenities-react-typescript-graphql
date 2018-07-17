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
import { Route, Redirect } from 'react-router'
import { Link, withRouter } from "react-router-dom";

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
    selectedAddress: ISelectedAddress;
}

class SearchFormComponent extends React.Component<SearchFormComponentProps, SearchFormComponentState> {
    private getAutoCompleteDebounced;
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.state = {
            isAddressSelected: false,
            inputValue: '',
            selectedAddress: null
        };
        this.getAutoCompleteDebounced = debounce(300, false, this.getAutoComplete);
    }
    getAutoComplete = (text: string): void => {
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
            inputValue: suggestion.address,
            selectedAddress: suggestion
        });
        this.props.setSelectedAddress(suggestion);
        this.props.clearStreetSuggestions();
    }
    searchHandler = (e) => {
        if (!this.state.isAddressSelected) {
            e.preventDefault();
            return false;
        }   
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
                        <Link
                            to={this.state.isAddressSelected
                                ? `/${this.props.selected.address}/${this.props.selected.lat}/${this.props.selected.lon}`
                                : ''}
                            className={`btn btn-primary ${!this.state.isAddressSelected ? 'link-disabled' : ''}`}
                            onClick={this.searchHandler}
                        >Search</Link>
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
