import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";


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

function App() {
  return (
    <div>
        <Accordion languages={programmingLanguages}/>
        <Search />
    </div>
  );
}

export default App;
