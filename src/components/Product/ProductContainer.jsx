import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Product from "./PageInfo/Product";
import {getInfoProduct} from "../../redux/infoProductReducer";
import {addItem} from "../../redux/cartReducer";
import s from './ProductContainer.module.css';

class ProductContainer extends React.Component {

    componentDidMount() {
        this.props.getInfoProduct(this.props.match.params.id)
    }


    // addProductToCart(idItems, title) {
    //     this.props.addItem(idItems, title)
    // }

    constructor(){
        super();
        this.state = {
            profileDetails: {}
        }
        this.fetchUser = this.fetchUser.bind(this);
    }

    fetchUser() {
        axios.get('https://e-commerce.raiffeisen.ru/pay/sdk/v2/payment.styled.min.js')
        .then((response) => {
            this.setState({profileDetails: response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render() {
        return <div className={s.about__product}>
            <Product {...this.props } addProduct={this.addProductToCart}/>
                <button
                    onClick={() => this.addProductToCart(this.props.match.params.idItems, this.props.infoProduct.title)}>add
                </button>
        </div>

    }


}

let mapStateToProps = (state) => ({
    infoProduct: state.infoProduct,
});

export default compose(
    connect(mapStateToProps, {getInfoProduct, addItem}),
    withRouter,
)(ProductContainer);
