import React from 'react';
import s from './Header.module.css'
import mainS from '../../css/styles.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Header = (props) => {
    return (
        <div>
            <div className={mainS.container}>
                <div className={s.header + " " + s.block}>

                    <div className={s.logo + " " + s.block}>
                        <Link to='/'>
                            StingerExpress
                        </Link>
                    </div>

                    <div className={s.timeWork + " " + s.block}>
                        <p className={s.timeWork__title}> </p>
                        <p className={s.timeWork__text}> </p>
                    </div>
                    <form className={s.searchItem + " " + s.block}>
                        <div className={s.search__inner}>
                            <input className={s.stringSearch} type="text" placeholder='Поиск товаров'/>
                            <FontAwesomeIcon className={s.searchBtn} icon="search"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}