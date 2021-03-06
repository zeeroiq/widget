import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debTerm, setDebTerm] = useState(term);
    const [results, setResults] = useState([]);
    // console.log(results);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {

        (async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debTerm
                }
            });
            setResults(data.query.search);
        })();
        // if(term && !results.length) {
        //     search();
        // } else {
        //     const timeOutId = setTimeout(() => {
        //         if (term) {
        //             search()
        //         }
        //     }, 1000);
        //
        //
        //     return () => {
        //         clearTimeout(timeOutId);
        //     };
        // }

    }, [debTerm])

    const renderResults = results.map(result => {
        return (
            <div className={`item`} key={result.pageid}>
                <div className={`right floated content`}>
                    <a className={`ui button`}
                       href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>

                </div>
                <div className={`content`}>
                    <div className={`header`}>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className={`ui form`}>
                <div className={`field`}>
                    <label>Enter Search Term</label>
                    <input value={term}
                           onChange={ e => setTerm(e.target.value) }
                           className={`input`}
                    />
                </div>
            </div>
            <div className={`ui celled list`}>
                {renderResults}
            </div>
        </div>
    );
};


export default Search;