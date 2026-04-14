import { useState } from "react";
import DessertCard from "./components/DessertCard";
import Cart from "./components/Cart";
import data from '../data.json';
import type { CartItemsType } from "./types/types";


function App() {
    const [cartItems, setCartItems] = useState<CartItemsType[]>([]);

    // Add Dessert to Cart
    function addToCart(item: CartItemsType) {
        const newCartItems = cartItems.slice();
        const alreadyInCart = newCartItems.some(
            (cartItem) => cartItem.name === item.name
        );

        if (alreadyInCart) return;

        newCartItems.push(item);
        setCartItems(newCartItems);
    }

    // Remove items to Cart
    function removeItemToCart(id: string) {
        const removedItems = cartItems.filter((item) => item.name !== id);
        setCartItems(removedItems)
    }

    function initCartItems() {
        setCartItems([])
    }


    // increment CartItems quantity
    function incrementQuantity(id: string) {
        const incrementedCartItems = cartItems.map((item) => {
            if (item.name === id) {
                return {...item, quantity: item.quantity + 1}
            }

            return item;
        });

        setCartItems(incrementedCartItems);
    }


    // increment CartItems quantity
    function decrementQuantity(id: string) {
       const decrementedCartItems = cartItems.map((item) => {
            if (item.name === id && item.quantity !== 0) {
                return {...item, quantity: item.quantity - 1}
            }

            return item;
        }).filter((item) => item.quantity > 0);;

        setCartItems(decrementedCartItems);
    }


    
    return (
        <main className="relative bg-(--rose-100) min-h-dvh py-12">
            <div className="container flex flex-col lg:flex-row gap-8">
                <div className="list">
                    <h1 className="text-4xl font-bold mb-6">Desserts</h1>
                    <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-6 list-none">
                        {data.map((dessert) => (
                            <li key={dessert.name}>
                                <DessertCard  
                                    image={{
                                        mobile: dessert.image.mobile,
                                        tablet: dessert.image.tablet,
                                        desktop: dessert.image.desktop,
                                    }}
                                    category={dessert.category}
                                    name={dessert.name}
                                    price={dessert.price}
                                    onAdding={() => addToCart({...dessert, quantity: 1})}
                                    quantity={cartItems.find(item => item.name === dessert.name)?.quantity ?? 0}
                                    onIncrementQuantity={() => incrementQuantity(dessert.name)}
                                    onDecrementQuantity={() => decrementQuantity(dessert.name)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="basket">
                    <Cart  
                        cartItems={cartItems}
                        onRemove={removeItemToCart}
                        initializeCart={initCartItems}
                    />
                </div>
            </div>
        </main>
    )
}

export default App;