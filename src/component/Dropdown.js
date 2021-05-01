import React from "react";


const Dropdown = ({ options, select, onSelectChange }) => {

    const renderedOption = options.map(option => {
        if (option.value === select.value) {
            return null;
        }
        return (
            <div className={`item`}
                 key={ option.value }
                 onClick={() => onSelectChange(option)}
            >
                { option.label }
            </div>
        );
    });

    return (
        <div className={`ui form`}>
            <div className={`field`}>
                <label className={`label`}>Select a Color</label>
                <div className={`ui selection dropdown visible active`}>
                    <i className={`dropdown icon`} />
                    <div className={`text`}>{select.label}</div>
                    <div className={`menu visible transition`}>
                        { renderedOption }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;