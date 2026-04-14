import checkIcon from '../../public/assets/images/icon-order-confirmed.svg'
import PrimaryButton from './PrimaryButton';
import { OrderTotal } from './Cart';
import type { CartItemsType } from '../types/types';


interface ConfirmationModalProps {
    cartItems: CartItemsType[];
    orderTotal: number;
    onInitialiseCart: () => void;
}
interface ConfirmationItemProps {
    thumnail: string;
    name: string;
    quantity: number;
    price: number;
}



function ConfirmationItem({
    thumnail,
    name,
    quantity,
    price
}: ConfirmationItemProps
) {
    return (
        <article className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <figure className='w-12 h-12 rounded-lg overflow-hidden'>
                    <img 
                        src={thumnail} 
                        alt="Test" 
                        className='w-full h-full object-cover'
                    />
                </figure>
                <div>
                    <h3 className='font-semibold text-sm sm:text-[16px] text-(--rose-900) mb-0.5'>{name}u</h3>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold text-(--red)'>{quantity}x</span>
                        <span className='font-medium text-(--rose-500)'>@ ${price}</span>
                    </p>
                </div>
            </div>

            <span className='font-semibold text-(--rose-500)'>${price * quantity}</span>
        </article>
    )
}

function ConfirmationModal({ cartItems, orderTotal, onInitialiseCart}: ConfirmationModalProps) {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full bg-black/45'>

                {/* Modal bellow */}
                <article 
                    className='z-50 absolute bottom-0 left-0 w-full rounded-t-lg
                    md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                    max-h-full md:w-120 md:rounded-lg bg-white p-6'
                >
                    <div>
                        <figure className='mb-6'>
                            <img 
                                src={checkIcon} 
                                alt="Icon order confirmed" 
                            />
                        </figure>

                        <div className='mb-6'>
                            <h1 className='text-4xl font-bold text-(--rose-900) mb-1'>
                                Order Confirmed
                            </h1>
                            <p className='text-(--rose-500) font-medium'>
                                We hope you enjoy your food !
                            </p>
                        </div>

                        <div className='bg-(--rose-50) p-4 rounded-lg max-h-60 md:max-h-80 overflow-y-scroll'>
                            <ul className='flex flex-col mb-12 list-none'>
                                {cartItems.map(item => (
                                    <li 
                                        key={item.name} 
                                        className='not-last:border-b border-(--rose-100) py-3 md:py-4 last:border-b-none'
                                    >
                                        <ConfirmationItem  
                                            thumnail={item.image.thumbnail}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                        />
                                    </li>
                                ))}
                            </ul>

                            <OrderTotal  
                                value={orderTotal}
                            />
                        </div>

                        <div className='bg-white pt-6'>
                            <PrimaryButton 
                                content="Start New Order" 
                                onClick={onInitialiseCart}
                            />
                        </div>
                    </div>
                </article>


            </div>
        </>
    )
}

export default ConfirmationModal;