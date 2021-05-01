import React, {useEffect, useState} from 'react';
import axios from "axios";

const Convert = ({ language, text }) => {

    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerid = setTimeout(() => {
            setDebouncedText(text);
        }, 750);

        // cleanup function
        return () => {
            clearTimeout(timerid);
        };

    }, [text]);

    useEffect(() => {
        const doTranslate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
            setTranslatedText(data.data.translations[0].translatedText)

        };

        // doTranslate().then(r => console.log('here it is ' + JSON.stringify(r)));
        doTranslate();

    }, [language, debouncedText]);

    return (
        <div>
            <form className="ui form">
                <textarea
                    value={translatedText}
                    placeholder='Converted texts'
                    rows="3"
                    disabled={true}
                    style={{resize: 'none'}}
                    />
            </form>
            <br/>
        </div>
    );
};

export default Convert;