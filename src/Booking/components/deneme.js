import React, { useContext, useState, useEffect } from 'react';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { CartContext } from "../../shared/context/CartContext";
import { getProductData } from "./productStore";
import Arrow_up from '../../assets/icons/arrow_up.svg';
import Arrow_down from '../../assets/icons/arrow_down.svg'
import Thumbnails from '../../shared/UI/Thumbnails';
import { AiFillCloseCircle } from "react-icons/ai";
import './Product.css';
function Product(props) {

    const additions_array = [
        {
            id: 'addition_1',
            value: '450',
            name: 'Тигровые креветки'
        },
        {
            id: 'addition_2',
            value: '80',
            name: 'Томаты / паприка'
        },
        {
            id: 'addition_3',
            value: '120',
            name: 'Бекон'
        },
        {
            id: 'addition_4',
            value: '80',
            name: 'Сыр чеддер 30 г'
        },
    ]
    const cart = useContext(CartContext);
    const id = props.id;
    const productData = getProductData(id);
    const [quantitys, setQuantity] = useState(null);
    const [checkedState, setCheckedState] = useState(
        new Array(additions_array.length).fill(false)
    );
    const quantity_ = cart.items.filter(item => item.id === productData.id).length > 0 && cart.items.filter(x => x.id === id)[0].quantity;
    const selected_product = cart.items.filter(item => item.id === productData.id).length > 0 ? cart.items.filter(item => item.id === productData.id)[0].additions : [];

    useEffect(() => {
        setQuantity(quantity_ || 0)
    }, [quantity_]);

    const checkboxHandler = (e, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        // console.log(updatedCheckedState)
        setCheckedState(updatedCheckedState);

        let addition;
        if (e.target.checked) {
            addition = {
                id: e.target.id,
                name: e.target.name,
                price_additon: e.target.value
            }
            cart.addAdditionsToCart(id, addition);
        } else {
            let addition_id = e.target.id;
            cart.removeAdditionsToCart(id, addition_id);
        }

    }

    return (
        <div className="product-container">
            <div className="product-wrapper">

                <div className="product-thumbnail">
                    <div onClick={props.close} className="product-modal-close-icon"><AiFillCloseCircle /></div>
                    <Thumbnails images={productData.images} />
                </div>
                <div className="product_content">
                    <p className="product-title">{productData.title}</p>
                    <span className="product-line"></span>
                    <p className="product-price-info">{productData.price} ₽<span> / {productData.portion}</span> </p>
                    <p className="product-quantity">Количество порций:</p>
                    <div className="product-quantity-wrapper">
                        <form className='productcard-btn-count'>
                            <p className='product-count'>{quantitys}</p>
                            <div className='count_prodcut'>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    cart.removeOneFromCart(id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_down} alt='down' />
                                </button>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    cart.addOneToCart(id)
                                }} className="product-count-arrow">

                                    <img src={Arrow_up} alt='up' />
                                </button>

                            </div>
                        </form>
                        <button className='productcard-btn'
                            onClick={() => cart.addOneToCart()}
                        >
                            В корзину
                        </button>
                    </div>
                    <span className="product-line"></span>
                    <div className="product-addition">
                        <p className="product-title">Сделать еще вкуснее</p>
                        {additions_array.map(({ id, value, name }, index) =>
                            <div className="addition-item" key={id}>
                                <p className="addition-item-name">{name}</p>
                                <p className="addition-item-price">{value} ₽</p>
                                <label className="addition-item-input">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        value={value}
                                        name={name}
                                        onChange={(e) => checkboxHandler(e, index)}
                                        checked={selected_product.filter((item) => item.id === id).length > 0 ? true : false}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;