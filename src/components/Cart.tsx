import { useState } from 'react';
import emptyImage from '../../public/assets/images/illustration-empty-cart.svg';
import carbobIcon from '../../public/assets/images/icon-carbon-neutral.svg'
import PrimaryButton from './PrimaryButton';
import ConfirmationModal from './ConfirmationModal';
import { X } from 'lucide-react';
import type { CartItemsType } from '../types/types';

interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    onRemoving: () => void;
}

interface CartProps {
    cartItems: CartItemsType[];
    onRemove: (id: string) => void;
    initializeCart: () => void;
}

function EmptyState() {
    return (
        <article>
            <div className='text-center'>
                <figure className='flex items-center justify-center mb-3'>
                    <img src={emptyImage} alt="Illustration empty cart" />
                </figure>
                <p className='text-sm text-(--rose-400)'>
                    Your added items will appear here
                </p>
            </div>
        </article>
    )
}


function CartItem({name, price, quantity, onRemoving}: CartItemProps) {
    
    return (
        <article className='flex items-center justify-between'>
            <div>
                <h3 className='font-semibold text-(--rose-900)'>{name}</h3>
                <p className='flex items-center gap-3'>
                    <span className='text-(--red) font-semibold'>{quantity}x</span>
                    <span className='text-(--rose-400) font-medium'>@ ${price}</span>
                    <span className='text-(--rose-500) font-semibold'>${price * quantity}</span>
                </p>
            </div>

            <button 
                className='group text-(--rose-400) w-5 h-5 rounded-full border border-(--rose-400) 
                flex items-center justify-center cursor-pointer hover:border-(--rose-900)'
                onClick={onRemoving}
            >
                <X size={14} className='group-hover:text-(--rose-900)' />
            </button>
        </article>
    )
}


export function OrderTotal({ value }: { value: number}) {
    return (
        <div className='flex items-center justify-between'>
            <h3 className='text-(--rose-500) font-medium'>
                Order Total
            </h3>
            <p className='text-xl font-bold'>
                ${value}
            </p>
        </div>
    )
}


function Cart({ cartItems, onRemove, initializeCart }: CartProps) {
    const [confirmed, setConfirmation] = useState(false);

    const orderQuantities = cartItems.map((item) => item.quantity);
    const itemsQuantity = orderQuantities.reduce((prevQuantity, currentQuantity) => prevQuantity + currentQuantity, 0);
    const orderTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    function confirmOrder() {
        if (confirmed) return;
        setConfirmation(true);
    }


    return (
        <>
            <aside className='lg:sticky lg:top-12 bg-white lg:w-90 p-6 rounded-lg'>
                <div>
                    <h2 className='text-xl text-(--red) font-bold mb-8'>
                        Your Cart ({itemsQuantity})
                    </h2>
                    
                    {cartItems.length === 0 ? (
                        <EmptyState  />
                    ): (
                        <div>
                            <ul className='grid grid-cols-1 gap-6 mb-12 list-none'>
                                {cartItems.map((item) => (
                                    <li key={item.name}>
                                        <CartItem  
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            onRemoving={() => onRemove(item.name)}
                                        />
                                    </li>
                                ))}
                            </ul>

                            <div className='mb-8'>
                                <OrderTotal value={orderTotal} />
                            </div>

                            <article 
                                className='flex items-center justify-center gap-2 
                                bg-(--rose-50) p-4 rounded-lg mb-3'
                            >
                                <figure>
                                    <img src={carbobIcon} alt="Icon Carbon neutral" />
                                </figure>
                                <p className='text-(--rose-900) text-sm md:text-[16px]'>
                                    This is a <strong>carbon-neutral</strong> delivery
                                </p>
                            </article>

                            <PrimaryButton 
                                content='Confirm Order' 
                                onClick={confirmOrder}  
                            />
                        </div>
                    )
                }
                </div>
            </aside>


            {confirmed && (
                <ConfirmationModal  
                    cartItems={cartItems}
                    orderTotal={orderTotal}
                    onInitialiseCart={() => {
                        initializeCart();
                        setConfirmation(false);
                    }}
                />
            )}
        </>
    )
}

export default Cart;