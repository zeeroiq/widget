import React, {useEffect, useRef, useState} from "react";


const Dropdown = ({ options, select, onSelectChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        document.body.addEventListener('click', (event) => {
            // if (ref.current.contains(event.target)) {
            //     return;
            // }
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }, {capture: true});

    }, []);

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
        <div ref={ ref } className={`ui form`}>
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