import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';

function WordsList({ allWords }) {

    const [isVisible, setIsVisible] = useState(false);

    const showRows = allWords.map((words) => {
        return <tr key={words.id}>
            <td>{words.initialWord}</td>
            <td>{words.translation}</td>
        </tr>;
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
                    <div className="tables">
                        <table className="table"> 
                        {/* переделать в flexbox ////////////*/}
                            <tbody>
                                {isVisible ? showRows : null}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>

    );
}

export default WordsList;
