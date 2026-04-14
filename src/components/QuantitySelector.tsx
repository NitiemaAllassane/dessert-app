import { Minus, Plus } from 'lucide-react';


interface QuantitySelectorProps {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

function IncrementButton({ onIncrement }: { onIncrement: () => void }) {
    return (
        <button 
            className='group w-6 h-6 flex items-center justify-center border border-white rounded-full
            cursor-pointer hover:bg-white'
            onClick={onIncrement}
        >
            <span>
                <Plus size={16} className='text-white group-hover:text-(--red)'   />
            </span>
        </button>
    )
}


function DecrementButton({ onDecrement }: { onDecrement: () => void }) {
    return (
        <button 
            className='group w-6 h-6 flex items-center justify-center border border-white rounded-full
            cursor-pointer hover:bg-white'
            onClick={onDecrement}
        >
            <Minus size={16} className='text-white group-hover:text-(--red)'  />
        </button>
    )
}


function QuantitySelector({
    quantity,
    onIncrement,
    onDecrement
}: QuantitySelectorProps
) {
    return (
        <div 
            className='flex items-center justify-between gap-1 bg-(--red) w-[70%] p-2 
            rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
        >
            
            <DecrementButton 
                onDecrement={onDecrement} 
            />
            <div
                className='w-8 flex items-center justify-center text-white font-medium text-center 
                outline-none border-none bg-transparent'
            >
                {quantity}
            </div>
            <IncrementButton  
                onIncrement={onIncrement}
            />
        </div>
    )
}


export default QuantitySelector;