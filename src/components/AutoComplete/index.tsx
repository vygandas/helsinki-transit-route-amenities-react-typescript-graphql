import * as React from "react";
import "./AutoComplete.scss";
import {TAutoCompleteFeature} from "../../types/TAutoCompleteFeature";
import {IAutoCompleteResponse} from "../../interfaces/IAutoCompleteResponse";
import onClickOutside from 'react-onclickoutside'

export interface AutoCompleteComponentProps {
    autocomplete: IAutoCompleteResponse<TAutoCompleteFeature>;
    clearHandler: () => void;
}

class AutoCompleteBaseComponent extends React.Component<AutoCompleteComponentProps, {}> {
    constructor(props) {
        super(props);
    }
    handleClickOutside(event) {
        console.log('onClickOutside() method called');
        this.props.clearHandler();
    }
    render(): JSX.Element | null {
        return typeof this.props.autocomplete !== typeof undefined
            && this.props.autocomplete !== null
            && typeof this.props.autocomplete.features !== typeof undefined
            && this.props.autocomplete.features.length > 0 ? (
            <ul className="autocomplete-component">
                {this.props.autocomplete.features.map((feature: TAutoCompleteFeature) => (
                    <li key={`autocomplete-${feature.properties.gid}`} className="px-3 py-1">
                        <span>
                            {feature.properties.label}
                        </span>
                    </li>
                ))}
            </ul>
        ) : null;
    }    
}

export const AutoCompleteComponent = onClickOutside(AutoCompleteBaseComponent);