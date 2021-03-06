import React, {useState} from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const programmingLanguages = [
    {
        title: 'Java',
        description: 'A backend programming language'
    },
    {
        title: 'JavaScript',
        description: 'A language for the web'
    },
    {
        title: 'C',
        description: 'A powerful general-purpose programming language'
    },
    {
        title: 'C++',
        description: 'A powerful general-purpose programming language, superset of C'
    },
    {
        title: 'Python',
        description: 'A multi-paradigm programming language'
    },
    {
        title: 'Go',
        description: 'A procedural programming language'
    },
    {
        title: 'Kotlin',
        description: 'Gradle is introducing Kotlin as a language for writing build scripts'
    },
    {
        title: 'Swift',
        description: 'Language for macOS, iOS, watchOS, tvOS and beyond'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'The Shade of Blue',
        value: 'Blue'
    }
]

function App() {
    const [select, onSelectChange] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div className='ui basic container'>
            <BrowserRouter>
                <Header/>
                <Route exact path='/'>
                    <Accordion languages={programmingLanguages}/>
                </Route>
                <Route path='/accordion'>
                    <Accordion languages={programmingLanguages}/>
                </Route>
                <Route path='/search' component={Search}/>
                <Route path='/dropdown'>
                    {
                        showDropdown
                            ? <Dropdown label={`Select Color`} options={options} select={select}
                                        onSelectChange={onSelectChange}/>
                            : null
                    }
                    <br/>
                    <button onClick={() => setShowDropdown(!showDropdown)}
                            className='ui teal button'
                    >
                        Toggle Dropdown
                    </button>
                </Route>
                <Route path='/translate' component={Translate}/>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;

//     <Accordion languages={programmingLanguages}/>
//     <br />
//     <hr />
//     <br />
//     <Search />
//     <br />
//     <hr />
//     <br />
//     {
//         showDropdown
//             ? <Dropdown label={`Select Color`} options={options} select={select} onSelectChange={onSelectChange}/>
//             : null
//     }
//     <br/>
//     <button onClick={ () => setShowDropdown(!showDropdown) }
//             className='ui teal button'
//     >
//         Toggle Dropdown
//     </button>
//     <br/>
//     <br/>
//     <hr />
//     <Translate />
// </div>

