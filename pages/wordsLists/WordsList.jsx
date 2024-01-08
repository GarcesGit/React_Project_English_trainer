import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';

function WordsList({ allWords }) {

    const [allVisible, setAllVisible] = useState(true);
    const [renderedWords, setRenderedWords] = useState(allWords);

    useEffect(() => {
        if (!allVisible) {
            setRenderedWords(allWords.filter(words => !words.isLearned));
            return;
        }
        setRenderedWords(allWords);
    }, [allVisible])

    return (
        <div className="wrapper">
            <div className="container-fluid lists">
                <div className="lists_buttons">
                    <Button variant='primary buttonAllWords'
                        onClick={() => setAllVisible(true)}
                    >
                        Все слова
                    </Button>
                    <Button variant='primary buttonRestWords'
                        onClick={() => setAllVisible(false)}
                    >
                        Осталось выучить
                    </Button>
                </div>
                <div className="lists_words">
                    {renderedWords.map((word) => (
                        <ul key={word.id}>
                            <li className="column_initialWord">{word.initialWord}</li>
                            <li className="column_translation">{word.translation}</li>
                        </ul>

                    ))}

                </div>
            </div>
        </div>

    );
}

export default WordsList;
