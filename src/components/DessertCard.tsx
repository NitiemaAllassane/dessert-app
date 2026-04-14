import { useState } from "react";
import AddButton from "./AddButton";
import QuantitySelector from "./QuantitySelector";
import clsx from "clsx";

interface DessertCardProps {
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    },
    category: string;
    name: string;
    price: number;
    onAdding: () => void;
    quantity: number;
    onIncrementQuantity: () => void;
    onDecrementQuantity: () => void;
}


function DessertCard({
    image,
    category,
    name, 
    price,
    onAdding,
    quantity,
    onIncrementQuantity,
    onDecrementQuantity
}: DessertCardProps
) {
    const [isSelected, setIsSlected] = useState(false);

    function switchToSelectedMode() {
        if (isSelected) return;
        setIsSlected(true);
    }


    return (
        <article>
            <div className={clsx(
                "relative mb-8 rounded-lg",
                isSelected && quantity !== 0 ? "outline-3 outline-(--red)": ""
            )}>
                <picture className="h-full w-full rounded-lg">
                    <source media="(max-width: 375px)" srcSet={image.mobile} className="w-full h-full object-cover " />
                    <source media="(max-width: 48rem)" srcSet={image.tablet} className="w-full h-full object-cover" />
                    <img src={image.desktop} alt={name} className="w-full h-full object-cover rounded-lg" />
                </picture>

                {isSelected && quantity !== 0
                    ? (
                        <QuantitySelector 
                            quantity={quantity} 
                            onIncrement={onIncrementQuantity}
                            onDecrement={onDecrementQuantity}
                        />
                    )
                    : (
                        <AddButton 
                            onAdding={onAdding} 
                            onSelect={switchToSelectedMode}
                        />
                    )
                }
            </div>
            <div>
                <p className="font-medium text-(--rose-400) ">{category}</p>
                <h2 className="text-lg font-semibold text-(--rose-900)">{name}</h2>
                <p className="text-lg font-bold text-(--red)">${price}</p>
            </div>
        </article>
    )
}

export default DessertCard;