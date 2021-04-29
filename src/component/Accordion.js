import React, { useState } from 'react';

const Accordion = ({ languages }) => {

    const [activeLanguage, setActiveLanguage] = useState(null);

    const onTitleClick = currentLanguage => {
        setActiveLanguage(currentLanguage)
    }

    const renderItems = languages.map((language, currentLanguageIndex) => {

        const activeLang = currentLanguageIndex === activeLanguage ? 'active' : '';

        return (
            <React.Fragment key={language.title}>
                <div className={`title ${ activeLang }`} onClick={() => onTitleClick(currentLanguageIndex)}>
                    <i className={`dropdown icon`} />
                    {language.title}
                </div>
                <div className={`content ${ activeLang }`}>
                    <p>{language.description}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className={`ui styled accordion`}>
            {renderItems}
        </div>
    );
};

export default Accordion;