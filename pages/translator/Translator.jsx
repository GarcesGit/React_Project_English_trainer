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
	const ref = useRef(null);
	const [message, setMessage] = useState('');
	const [isEnglish, setIsEnglish] = useState(true);
	const [wordIndex, setWordIndex] = useState();
	const [learnedWordsCounter, setLearnedWordsCounter] = useState();

	const getRandomWord = (arr) => {
		if (arr.length === learnedWordsCounter) {
			return;
		}
		const randomIndex = Math.floor(Math.random() * arr.length);
		if (arr[randomIndex].isLearned === true){
			getRandomWord(allWords);

		}
		setStartWord(arr[randomIndex]);
		setWordIndex(randomIndex);
	}

	useEffect(() => {
		getRandomWord(allWords);
		const learnedWords = allWords.filter((word)=> word.isLearned).length;
		setLearnedWordsCounter(learnedWords);

	}, []);

	const checkTranslation = (event) => {
		if (event.key !== 'Enter') {
			return;
		}

		if (ref.current.value === startWord.translation) {
			allWords[wordIndex].isLearned = true;
			setMessage('Отлично! Следующее слово.');
			setLearnedWordsCounter((state) => state+1);

			getRandomWord(allWords);
			ref.current.value = '';
			return;
		}

		setMessage('Попробуйте еще раз.');
	}


//absolute: "абсолютный", accept: "принять", account: "счет", accountant: "бухгалтер", achieve: "достигнуть"

const changeLanguage = () => {
	console.log('click');
}




return (
	<div className="wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="title">
					<img src={title_img} alt="" className="title_img" />
				</div>
				<div className="a2 container_lang">
					<img src={button_en_img} alt="" className="lang_img"
					// {isEnglish ? null : src={button_ru_img}}
					/>
					<Button variant='primary rotate'
						onClick={() => setIsEnglish((state) => !state)}
					>&#8596;
					</Button>
					<img src={button_ru_img} alt="" className="lang_img"
					// {isEnglish ? null : src={button_en_img}}

					/>
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
						onKeyDown={checkTranslation}
					/>
				</div>
				<p className="error">{message}</p>
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
