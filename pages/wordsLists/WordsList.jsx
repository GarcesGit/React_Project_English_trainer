import React from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';

function WordsList({ allWords }) {

    // const [visible, setVisible] = useState(false);

    const showRows = allWords.map((words) => {
        return <tr key={words.id}>
            <td>{words.initialWord}</td>
            <td>{words.translation}</td>
        </tr>;
    });

    return (
        <div className="wrapper">
            <main>
                <div className="container-fluid lists">
                    <div className="lists_buttons">
                        <Button variant='primary buttonAllWords' 
                        // onClick={()=> setVisible(true)} 
                        >
                            Все слова
                        </Button>
                        <Button variant='primary buttonRestWords'>Осталось выучить</Button>
                    </div>
                    <div className="tables">
                        <table className="table">
                            <tbody>
                                {showRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default WordsList;
