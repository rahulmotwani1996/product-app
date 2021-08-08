export interface IProduct  {
    _id: string;
    name: string;
    price: number;
    description: string;
}


export interface ICategory {
    id: string;
    label: string;
}


export enum SortDirection {
    ASC ='ASC',
    DESC = 'DESC'
}