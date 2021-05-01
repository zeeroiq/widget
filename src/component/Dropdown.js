import React, {useEffect, useRef, useState} from "react";


const Dropdown = ({ label, options, select, onSelectChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // if (ref.current.contains(event.target)) {
            //     return;
            // }
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        // return the cleanup function to clear/remove the body click event
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

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
                <label className={`label`}>{label}</label>
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