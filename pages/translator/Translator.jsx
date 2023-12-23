import React, { useState, useEffect, useRef } from 'react';
import './TranslatorStyles.css';
import { Button } from 'react-bootstrap';
import InputTranslation from '../../components/input/InputTranslation.jsx';
import title_img from '../../images/title_img.png';
import button_en_img from '../../images/button_en.png';
import button_ru_img from '../../images/button_ru.png';
import ball_am3_img from '../../images/ball_am3.png';
import ball_nz2_img from '../../images/ball_nz2.png';
import ball_can2_img from '../../images/ball_can2.png';
import ball_nz_img from '../../images/ball_nz.png';
import ball_gb2_img from '../../images/ball_gb2.png';
import ball_am_img from '../../images/ball_am.png';
import ball_au_img from '../../images/ball_au.png';
import ball_gb_img from '../../images/ball_gb.png';

function Translator({ allWords }) {

	const [startWord, setStartWord] = useState({});
	const [translationWord, setTranslationWord] = useState('');
	const ref = useRef();

	const getRandomWord = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length);
		// setTranslationWord(arr[randomIndex].translation);
		setStartWord(arr[randomIndex]);
	}

	useEffect(() => {
		getRandomWord(allWords);
	}, []);

	// Стейт В инпете Value=tr.input, сделать в инпуте А onChange,  SettranslationInput
//absolute: "абсолютный", accept: "принять", account: "счет", accountant: "бухгалтер", achieve: "достигнуть"

	return (
		<div className="wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="title">
					<img src={title_img} alt="" className="title_img" />
					</div>
					<div className="a2 container_lang">
						<img src={button_en_img} alt="" className="lang_img" />
						<Button variant='primary rotate'>&#8596;</Button>
						<img src={button_ru_img} alt="" className="lang_img" />
					</div>
					<div className="col-xs-6 col-sm-5 col-md-4 col-xl-3 a3 ">
						<p name='initialWord' className="form-control initialWord">
							{startWord.initialWord}
						</p>
					</div>
					<div className="col-xs-6 col-sm-5 col-md-4 col-xl-3 a4">
					<InputTranslation
						type="text" 
						name='translation' 
						className="form-control translation" 
						placeholder="Введите перевод и нажмите Enter"
						ref={ref}
						onChange={event => setTranslationWord(event.target.value)}

						/>
					</div>
						<p className="error">text</p>
					<div className="col-sm-5 col-md-4 col-xl-3 a6 container_balls">
						<img src={ball_am3_img} alt="" className="ball ball_am3_img" />
						<img src={ball_can2_img} alt="" className="ball ball_can2_img" />
						<img src={ball_nz2_img} alt="" className="ball ball_nz2_img" />
						<img src={ball_nz_img} alt="" className="ball ball_nz_img" />
						<img src={ball_gb2_img} alt="" className="ball ball_gb2_img" />
						<img src={ball_au_img} alt="" className="ball ball_au_img" />
						<img src={ball_am_img} alt="" className="ball ball_am_img" />
						<img src={ball_gb_img} alt="" className="ball ball_gb_img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Translator;
