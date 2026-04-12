import { Minus, Plus } from 'lucide-react';

function IncrementButton() {
    return (
        <button 
            className='group w-6 h-6 flex items-center justify-center border border-white rounded-full
            cursor-pointer hover:bg-white'
        >
            <span>
                <Plus size={16} className='text-white group-hover:text-rose-500'   />
            </span>
        </button>
    )
}

function DecrementButton() {
    return (
        <button 
            className='group w-6 h-6 flex items-center justify-center border border-white rounded-full
            cursor-pointer hover:bg-white'
        >
            <Minus size={16} className='text-white group-hover:text-rose-500'  />
        </button>
    )
}


function QuantitySelector() {
    return (
        <div 
            className='flex items-center justify-between gap-1 bg-rose-700 w-[70%] p-2 
            rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer'
        >
            
            <DecrementButton  />
            <input 
                type="number" 
                name="quantityValue" 
                id="quantityValue"
                value={0}
                readOnly
                className='w-8 text-white font-medium text-center outline-none border-none'
            />
            <IncrementButton  />
        </div>
    )
}


export default QuantitySelector;