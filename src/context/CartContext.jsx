import {useContext,  createContext, useState, useEffect} from 'react';

const CartContext = createContext();
const LOCAL_KEY = "grocery_cart_v1"

export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);
    // loading cart from local storage
    useEffect(() => {
        try {
            const localCart = localStorage.getItem(LOCAL_KEY);
        if(localCart) {
            setCart(JSON.parse(localCart));
        }
        } catch (error) {
            console.log("Failed to load form local storage", error);
            
        }
    }, []);
// save cart to local storage
useEffect(() => {
    try {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(cart));
    } catch (error) {
        console.log("Failed to save " , error);
        
    }
}, [cart]);


const addToCart = (product , qty=1) => {
   
    setCart((prev) =>{
          const idx = prev.findIndex((p) => p.id === product.id);
          if(idx !== -1) {
            const newCart = [...prev];
            newCart[idx].qty += qty;
            return newCart;
          }
        //   add New
          return [...prev, {...product, qty}]  
    })
}

const removeFromCart = (product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
}
const increaseQty = (productId) => {
    setCart((prev) => prev.map((p) => p.id === productId ? {...p, qty: p.qty + 1} : p));
}
const decreaseQty = (productId) => {
    setCart((prev) => prev.map((p) => p.id === productId ? {...p, qty: Math.max(1, p.qty - 1)} : p));
}

const clearCart = () => {
    setCart([]);
}


const cartCount = cart.reduce((total, p) => total + Number(p.qty), 0);
const cartTotal = cart.reduce((total, p) => total + Number(p.price) * Number(p.qty), 0);

const  placeOrder =(address) => {
    const order = {
        id: Date.now(),
        items:cart,
        total: cartTotal ,
        address , 
        date : new Date().toLocaleString(),
        status: "Pending"
    }

    const existing = JSON.parse(localStorage.getItem("orders")) || [];
existing.push(order);
localStorage.setItem("orders", JSON.stringify(existing));


    clearCart();
    return order.id;   
}


const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    cartCount,
    cartTotal,
    placeOrder
}
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)

};

export const useCart = () => {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return ctx;
};