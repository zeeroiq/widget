import React, {useState} from "react";


const Dropdown = ({ options, select, onSelectChange }) => {

    const [open, setOpen] = useState(false);

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
                <div onClick={ () => setOpen(!open) } className={`ui selection dropdown ${ open ? 'visible active' : ''}`}>
                    <i className={`dropdown icon`} />
                    <div className={`text`}>{select.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        { renderedOption }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;