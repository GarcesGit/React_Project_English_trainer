import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import TranslatorStyles from './TranslatorStyles.css';
import Navbar from '../../components/navbar/Navbar.jsx';

import button_en_img from '../../images/button_en.png';
import button_ru_img from '../../images/button_ru.png';
import ball_img from '../../images/ball.png';
import ball_am_img from '../../images/ball_am.png';
import ball_au_img from '../../images/ball_au.png';
import ball_gb_img from '../../images/ball_gb.png';
import github_img from '../../images/github.jpg';
import telegram_img from '../../images/telegram.jpg';


function Translator() {
	return (
		<div>
			<div className={classes.wrapper}>
				<header>
					<div className="container-fluid">
						HEADER
<Navbar />
					</div>
				</header>
				<section className="a">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-4 col-md-4 col-xl-4 a1">A1
							<img src={button_en_img} alt="" className="lang_img" />

							</div>
							<div className="col-sm-4 col-md-4 col-xl-4 a2">A2
							<Button variant='primary'>&#8596;</Button>

							</div>
							<div className="col-sm-4 col-md-4 col-xl-4 a3">A3
							<img src={button_ru_img} alt="" className="lang_img" />

							</div>
							<div className="col-sm-4 col-md-4 col-xl-4 a4">A4</div>
							<div className="col-sm-4 col-md-4 col-xl-4 a5">A5</div>
							<div className="col-sm-4 col-md-4 col-xl-4 a6">A6</div>
						</div>
					</div>
				</section>
				<section className="b">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6 col-xl-3 b1">B1</div>
							<div className="col-md-6 col-xl-3 b2">B2</div>
							<div className="col-md-6 col-xl-3 b3">B3</div>
							<div className="col-md-6 col-xl-3 b4">B4
							<div className="circle-container">
								<img src={ball_img} alt="" className="ball_img"/>
								<img src={ball_au_img} alt="" className="ball_au_img" />
								<img src={ball_am_img} alt="" className="ball_am_img" />
								<img src={ball_gb_img} alt="" className="ball_gb_img" />
								</div>
							</div>
						</div>

					</div>
				</section>
				<footer>
					<div className="container-fluid">
						FOOTER
						<br />
						<a href="https://github.com/GarcesGit">
							<img src={github_img} alt="" className="social_img" />
						</a>
						<a href="https://t.me/NatashKosh">
							<img src={telegram_img} alt="" className="social_img" />
						</a>
						<br />
						<span>Natalya Koshukova &copy; 2023</span>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Translator;
