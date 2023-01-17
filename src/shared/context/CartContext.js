import { createContext, useState, useEffect } from "react";
import { getProductData } from "../util/productStore";


export const CartContext = createContext({
    items: [],
    booking: null,
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
    addAdditionsToCart: () => { },
    removeAdditionsToCart: () => { },
    modalHandler: () => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [bookingOpen, setBookingOpen] = useState(false);

    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]
    function modalHandler(x) {
        setBookingOpen(x)
    }


    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        additions: []
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }
    function addAdditionsToCart(id, item) {
        const x = cartProducts.filter(product => product.id === id)
        if (x.length === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        additions: [item]
                    }
                ]
            )
        } else {
            console.log(x[0].additions)

            x[0].additions.push(item)
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product }
                            : product
                )
            )
        }




    }
    function removeAdditionsToCart(id, item_id) {

        setCartProducts(
            cartProducts.map(
                product =>
                    product.id === id
                        ? { ...product, additions: product.additions.filter(item => item.id !== item_id) }
                        : product
            )
        )
    }


    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            const selected_product = cartProducts.filter(product => product.id === cartItem.id)[0]
            if (selected_product.additions) {
                totalCost += (productData.price + selected_product.additions.reduce((n, { price_additon }) => n + price_additon * 1, 0)) * cartItem.quantity;

            } else {
                totalCost += (productData.price * cartItem.quantity);
            }

        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        booking: bookingOpen,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        addAdditionsToCart,
        removeAdditionsToCart,
        modalHandler
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context