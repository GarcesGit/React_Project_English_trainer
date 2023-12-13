import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import './WordsListStyles.css';


function WordsList() {
    return (
        <div className="container-fluid">
            <Button variant='primary buttonAllWords'>Все слова</Button>
            <Button variant='primary buttonRestWords'>Осталось выучить</Button>
            <p className="paragraph" >text</p>

            <div className="container-fluid">
                <table className="table"></table>
            </div>

        </div>
    );
}

export default WordsList;
