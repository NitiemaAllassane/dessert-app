import emptyImage from '../../public/assets/images/illustration-empty-cart.svg';
import carbobIcon from '../../public/assets/images/icon-carbon-neutral.svg'
import { X } from 'lucide-react';

interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
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


function CartItem({name, price, quantity}: CartItemProps) {
    
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
            >
                <X size={14} className='group-hover:text-(--rose-900)' />
            </button>
        </article>
    )
}


function OrderTotal({ value }: { value: number}) {
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

function ConfirmButton() {
    return (
        <button 
            className='bg-(--red) inline-block w-full p-3 
            rounded-full text-white font-medium cursor-pointer'
        >
            Confirm Order
        </button>
    )
}


function Cart() {
    return (
        <aside className='bg-white w-90 p-6 rounded-lg'>
            <div>
                <h2 className='text-xl text-(--red) font-bold mb-8'>
                    Your Cart (0)
                </h2>
                {/* <EmptyState  /> */}
                
                <section>
                    <div className='grid grid-cols-1 gap-6 mb-12'>
                        <CartItem  
                            name='Classic Tiramisu'
                            price={5.50}
                            quantity={1}
                        />

                        <CartItem  
                            name='Classic Tiramisu'
                            price={12.50}
                            quantity={4}
                        />

                        <CartItem  
                            name='Classic Tiramisu'
                            price={7.20}
                            quantity={2}
                        />
                    </div>

                    <div className='mb-8'>
                        <OrderTotal value={46.50} />
                    </div>

                    <article 
                        className='flex items-center justify-center gap-2 
                        bg-(--rose-100) p-4 rounded-lg mb-3'
                    >
                        <figure>
                            <img src={carbobIcon} alt="Icon Carbon neutral" />
                        </figure>
                        <p className='text-(--rose-900)'>
                            This is a <strong>carbon-neutral</strong> delivery
                        </p>
                    </article>
                </section>

                <ConfirmButton  />
            </div>
        </aside>
    )
}

export default Cart;