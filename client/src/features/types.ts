export enum Category {
    Appetizer = 'Appetizer',
    MainCourse = 'Main Course',
    Dessert = 'Dessert',
    Drink = 'Drink',
  }
  
  interface ICustomization {
    name: string; 
    price: number; 
    maxQuantity: number; 
  }
  
  export interface IMenuItem {
    _id : string;
    name: string;
    price: number;
    category: Category;
    description?: string;
    ingredients?: string[];
    tags?: string[];
    availability: {
      isAvailable: boolean;
    };
    customizations?: ICustomization[];
    imageUrl?: string;
    cartQuantity? : number;
  }
  

export interface User{
    id : string;
    name : string;
    email : string;
    phoneNum : string;
}
