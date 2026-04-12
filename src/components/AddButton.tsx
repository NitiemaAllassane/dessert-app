import addIcon from '../../public/assets/images/icon-add-to-cart.svg';

function AddButton() {
    return (
        <button 
            className='flex items-center justify-center gap-1 bg-white w-[70%] px-4 py-2 rounded-full border
            border-rose-700 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer
            hover:text-rose-500'
        >
            <span>
                <img src={addIcon} alt="Basket Icon" />
            </span>
            <span className='font-medium'>
                Add to Cart
            </span>
        </button>
    )
}

export default AddButton;