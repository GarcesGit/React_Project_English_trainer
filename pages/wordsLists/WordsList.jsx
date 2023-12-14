import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';


function WordsList() {
    return (
        <div className="body">
            <div className="wrapper">
                <main className="a">
                    <div className="container-fluid">
                        <Button variant='primary buttonAllWords'>Все слова</Button>
                        <Button variant='primary buttonRestWords'>Осталось выучить</Button>
                        <p className="paragraph" >text</p>

                        <table className="table">table</table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default WordsList;
