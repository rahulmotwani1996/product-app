import React from 'react';
import { IProduct } from '../../types';
import './ItemCard.css';
import Button from 'react-bootstrap/Button';



interface IProps {
    product: IProduct;
    onDeleteProduct: (id: string) => void;
}

function ItemCard({ product : { _id, name, description, price }, onDeleteProduct}: IProps) {

    return (

            <div className="card">
            <img className={'product-img'} src='/image.jpeg'></img>
            <div className={'product-details'}>
            <h4 className="product-name">{name}</h4>
            <p>${price}</p>
            <p className="product-description text-muted">{description}</p>
            <Button variant="danger" onClick={() => onDeleteProduct(_id)}>Delete Product</Button>
            </div>
            </div>
    )

}

export default ItemCard;