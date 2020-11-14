import React from 'react';
import s from './Navigation.module.css';
import {Link} from "react-router-dom";

export const NavigationLeft = (props) => {
    return (
        <div className={s.nav}>
            <ul className={s.nav__inner}>
                <li className={s.nav__item}>
                    <Link to='/collections/appliences'>
                        Женская мода
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/household_products'>
                        Мужская мода
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/electronic'>
                        Телефоны и телекоммуникации
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/TV'>
                        Компьютеры и офис
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/satellite-and-cable-TV'>
                        Электроника
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/TV-antennas'>
                        Украшения и часы
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Дом, товары для животных
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Сумки и обувь
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Игрушки, мамам и детям
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Спорт и отдых
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Красота, здоровье и волосы
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Автотовары
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link to='/collections/Washing-machines'>
                        Обустройство дома и инструменты
                    </Link>
                </li>
            </ul>
        </div>
    )
}