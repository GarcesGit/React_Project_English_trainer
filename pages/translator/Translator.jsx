import React, { useEffect, useMemo, useState } from 'react';
import './TranslatorStyles.css';
import { Button } from 'react-bootstrap';

import button_en_img from '../../images/button_en.png';
import button_ru_img from '../../images/button_ru.png';
import ball_img from '../../images/ball.png';
import ball_am_img from '../../images/ball_am.png';
import ball_au_img from '../../images/ball_au.png';
import ball_gb_img from '../../images/ball_gb.png';
import github_img from '../../images/github.jpg';
import web_img from '../../images/web.png';
import telegram_img from '../../images/telegram.jpg';


function Translator() {
	return (
		<div>
			<div className="wrapper">
				<header>
				</header>
				<section className="a">
					<div className="container-fluid">
						<div className="row">
								<div className="tytle1">
									ТРЕНАЖЁР ДЛЯ ИЗУЧЕНИЯ
								</div>
								<div className="tytle2">
									1000 АНГЛИЙСКИХ СЛОВ
							</div>

							<div className="a2 container_lang">
								<img src={button_en_img} alt="" className="lang_img" />
								<Button variant='primary rotate'>&#8596;</Button>
								<img src={button_ru_img} alt="" className="lang_img" />
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3 a3 ">
								<input disabled type="text" className="form-control initialWord"></input>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3 a4">
								<input type="text" className="form-control translation" placeholder="Введите перевод и нажмите Enter"></input>
							</div>
							<div className="a5">
								<p className="error"></p>
							</div>

							<div className="a6">
								<img src={ball_img} alt="" className="ball_img" />
								<img src={ball_au_img} alt="" className="ball_au_img" />
								<img src={ball_am_img} alt="" className="ball_am_img" />
								<img src={ball_gb_img} alt="" className="ball_gb_img" />
							</div>

						</div>
					</div>
				</section>
				<footer>
					<div className="container-fluid footer">
						<a href="https://github.com/GarcesGit">
							<img src={github_img} alt="" className="social_img" />
						</a>
						<a href="#">
							<img src={web_img} alt="" className="social_img" />
						</a>
						<a href="https://t.me/NatashKosh">
							<img src={telegram_img} alt="" className="social_img" />
						</a>
						<p>Natalya Koshukova &copy; 2023</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Translator;
