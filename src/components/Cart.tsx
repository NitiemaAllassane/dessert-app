import emptyImage from '../../public/assets/images/illustration-empty-cart.svg';

function EmptyState() {
    return (
        <article>
            <div className='text-center'>
                <figure className='flex items-center justify-center mb-3'>
                    <img src={emptyImage} alt="Illustration empty cart" />
                </figure>
                <p className='text-sm text-(--rose-300)'>Your added items will appear here</p>
            </div>
        </article>
    )
}


function Cart() {
    return (
        <aside className='bg-white w-2xs p-6 rounded-lg'>
            <div>
                <h2 className='text-xl text-(--red) font-bold mb-8'>
                    Your Cart (0)
                </h2>
                <EmptyState  />
            </div>
        </aside>
    )
}

export default Cart;