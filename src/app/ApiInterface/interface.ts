export interface apishop{
    
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;

}

export enum Category{
    
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSCloting = "women's clothing",

}

export interface Rating{

    rate: number;
    count: number;

}