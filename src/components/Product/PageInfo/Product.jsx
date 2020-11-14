import React from 'react';
import s from './Product.module.css';
import axios from 'axios';

// import PaymentPageSdk from './payment.js';

// const paymentPage = new PaymentPageSdk('000001680200002-80200002', {
//     url: 'https://test.ecom.raiffeisen.ru/pay'
// });



const Product = (props) => {
    return <div className={s.product}>
        <p>{props.infoProduct.categoryRU}</p>
        <div className={s.product__main}>
            <div className={s.product__image}>
                <img src={props.infoProduct.image} alt=""/>
            </div>
            <div className={s.product__little_info}>
                <div className={s.info__title}>
                    <h1>{props.infoProduct.title}</h1>
                </div>
                <div className={s.info__describe}>
                    <p>{props.infoProduct.describe}</p>
                </div>
                <div className={s.info__describe}>
                    <p>{props.infoProduct.price}</p>
                </div>
                <div className="paymentSdk">
                    <script src="https://e-commerce.raiffeisen.ru/pay/sdk/v2/payment.styled.min.js"></script>
                </div>
                
                <button
                    // onClick={() => 
                    //     paymentPage.openWindow({
                    //     amount: 10.10,
                    //     orderId: '91700',
                    //     successUrl: 'https://www.raiffeisen.ru',
                    //     failUrl: 'https://e-commerce.raiffeisen.ru/pay/demo.html',
                    //     extra: {
                    //         email: 'test@test.ru',
                    //         login: 'testLogin',
                    //         phone: '79191234567'
                    //     },
                    //     style: {
                    //         button: {
                    //             backgroundColor: '#ffc800',
                    //             textColor: '#542595',
                    //             hoverTextColor: '#ffc800',
                    //             hoverBackgroundColor: '#542595',
                    //             borderRadius: '3px'
                    //         },
                    //         header: {
                    //             logo: 'https://www.raiffeisen.ru/common/new/images/logo-raif.svg',
                    //             titlePlace: 'right'
                    //         }                    
                    //     },
                    //     comment: 'Тирольский пирог с яблоками, грушами, ветчиной, сыром, ананасами, 50см'
                    // })}
                    > Добавить в корзину
                </button>
            </div>
        </div>


    </div>
}

export default Product



