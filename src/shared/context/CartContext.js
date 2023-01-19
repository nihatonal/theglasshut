import { createContext, useState } from "react";
import moment from "moment";
export const CartContext = createContext({
    items: [],
    dateRange: [],
    booking: null,
    guests: 1,
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
    const [dateRange, setDateRange] = useState([moment(new Date()).format("YYYY/MM/DD"), moment().add(1, 'days').format("YYYY/MM/DD")]);
    const [countGuests, setCountGuests] = useState(1)

    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]
    function modalHandler(x) {
        setBookingOpen(x)
    }
    function setDates(x) {
        setDateRange(x)
    }
    function addGuest() {

        setCountGuests(countGuests + 1)
    }
    function removeGuest() {
        if (countGuests > 1) {
            setCountGuests(countGuests - 1)
        }
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
            // console.log(x[0].additions)

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
            return totalCost += (cartItem.additions.reduce((n, { price }) => n + price * 1, 0));
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        booking: bookingOpen,
        dateRange: dateRange,
        guests: countGuests,
        setDates,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        addAdditionsToCart,
        removeAdditionsToCart,
        modalHandler,
        addGuest,
        removeGuest
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