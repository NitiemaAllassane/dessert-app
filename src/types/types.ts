export interface DessertType{
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export interface CartItemsType extends DessertType {
    quantity: number;
}