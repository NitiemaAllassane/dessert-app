import checkIcon from '../../public/assets/images/icon-order-confirmed.svg'
import thumnailTest from '../../public/assets/images/image-brownie-thumbnail.jpg'
import PrimaryButton from './PrimaryButton';
import { OrderTotal } from './Cart';

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
                    <h3 className='font-semibold text-(--rose-900) mb-0.5'>{name}u</h3>
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

function ConfirmationModal() {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full bg-black/45'>
                <article 
                    className='z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-white w-120 p-6 rounded-lg'
                >
                    <div>
                        <figure className='mb-6'>
                            <img 
                                src={checkIcon} 
                                alt="Icon order confirmed" 
                            />
                        </figure>

                        <div className='mb-8'>
                            <h1 className='text-4xl font-bold text-(--rose-900) mb-1'>
                                Order Confirmed
                            </h1>
                            <p className='text-(--rose-500) font-medium'>
                                We hope you enjoy your food !
                            </p>
                        </div>

                        <div className='bg-(--rose-50) p-4 rounded-lg'>
                            <div className='flex flex-col gap-6 mb-4'>
                                <ConfirmationItem  
                                    thumnail={thumnailTest}
                                    name='Classic Tiramisu'
                                    price={7.00}
                                    quantity={1}
                                />

                                <ConfirmationItem  
                                    thumnail={thumnailTest}
                                    name='Classic Tiramisu'
                                    price={12.30}
                                    quantity={8}
                                />

                                <ConfirmationItem  
                                    thumnail={thumnailTest}
                                    name='Classic Tiramisu'
                                    price={22.50}
                                    quantity={7}
                                />
                            </div>

                            <OrderTotal  
                                value={90}
                            />
                        </div>

                        <PrimaryButton content="Start New Order" />
                    </div>
                </article>
            </div>
        </>
    )
}

export default ConfirmationModal;