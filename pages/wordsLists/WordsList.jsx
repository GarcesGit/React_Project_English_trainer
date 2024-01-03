import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';

function WordsList({ allWords }) {

    const [isVisible, setIsVisible] = useState(false);

    const showLists = allWords.map((words) => {
        return <ul key={words.id}>
            <li className="column_initialWord">{words.initialWord}</li>
            <li className="column_translation">{words.translation}</li>
        </ul>;
    });

    return (
        <div className="wrapper">
                <div className="container-fluid lists">
                    <div className="lists_buttons">
                        <Button variant='primary buttonAllWords' 
                        onClick={()=> setIsVisible((state) => !state)} 
                        >
                            Все слова
                        </Button>
                        <Button variant='primary buttonRestWords'>Осталось выучить</Button>
                    </div>
                    <div className="lists_words">
                            {isVisible ? showLists : null}
                    </div>
                </div>
        </div>

    );
}

export default WordsList;
