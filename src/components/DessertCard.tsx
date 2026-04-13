import AddButton from "./AddButton";
import QuantitySelector from "./QuantitySelector";

interface DessertCardProps {
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    },
    category: string;
    name: string;
    price: number;
}


function DessertCard({
    image,
    category,
    name, 
    price
}: DessertCardProps
) {
    return (
        <article>
            <div className="relative mb-8">
                <picture className="h-full w-full">
                    <source media="(max-width: 375px)" srcSet={image.mobile} className="w-full h-full object-cover rounded-lg" />
                    <source media="(max-width: 48rem)" srcSet={image.tablet} className="w-full h-full object-cover rounded-lg" />
                    <img src={image.desktop} alt={name} className="w-full h-full object-cover rounded-lg" />
                </picture>

                <AddButton  />
                {/* <QuantitySelector  /> */}
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