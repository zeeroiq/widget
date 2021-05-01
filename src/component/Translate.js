import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }

]

const Translate = () => {
    const [language, setLanguage] = useState(options[1]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={ e => setText(e.target.value) } />
                </div>
            </div>
            <br />

            <Convert language={language} text={text} />
            <br/>
            <Dropdown
                  label={`Select Language`}
                  select={language}
                  onSelectChange={setLanguage}
                  options={options}
              />
            <br/>
        </div>
    )
}
export default Translate;