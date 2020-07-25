import React from 'react';

const SettingsInput = props => {

    const {
        label,
        value,
        enableFields,
        enableEdit,
        getIcon
    } = props;



    return (
        <div className="columns">
                    <div className="column is-one-fifth">
                        <label className="label">{label}</label>
                    </div>
                    <div className="columns is-four-fifths">
                        <div className="column is-four-fifths">
                            <input className="input" type="text" 
                                placeholder="Text input" 
                                defaultValue={value} 
                                disabled={enableFields[label] ? false : true}
                            />
                        </div>
                        <div className="column is-one-fifth">
                            <button onClick={() => enableEdit([label])} className="button is-link">
                                <span className="fas fa-pencil-alt"></span>
                            </button>
                        </div>
                    </div>
        </div>
    )
}

export default SettingsInput;