

export interface Product {
    name: String;
    contents?: Array<any>;
}

export interface Cart {
    shoppingList: Package[] | any[];
    userDetails: UserDetails;
    payment: PaymentDetails;
}

export interface UserDetails {
    email: String;
    fullName: String;
    streetName: String;
    streetNumber: Number;
    city: String;
}
export interface PaymentDetails {
    ccnum: number;
    fullName: String;
    expiry: String;
    cvv: Number;
}

export interface LoginDetails {
    email: String;
    password: String;
}

export interface Package{
    name: String;
    price: String;
    options: Option[];
    billing: String;
}

export interface Option{
    name: String;
    available: boolean;
    description?: String;
}

