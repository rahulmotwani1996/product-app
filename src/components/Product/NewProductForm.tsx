import React from 'react'
import { addNewProduct } from '../../productFetcher';
import { IProduct } from '../../types';
import './NewProductForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



function NewProductForm() {
    const [productInfo, setProductInfo] = React.useState<IProduct>({ name: '', price: 0, description: '', _id: '' });
    const { name, price, description } = productInfo;

    const updateProductInfo = (updatedFields: Partial<IProduct>) => {
        setProductInfo({ ...productInfo, ...updatedFields });
    }

    const onAddNewProductClicked = async () => {
        const response = await addNewProduct(productInfo);
        if (response.id) {
            setProductInfo({ name: '', price: 0, description: '', _id: '' });
        } else {
            console.log(response.msg);
        }
    }

    return (
        <Form className={'add-product-form bg-light'}>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="A Product Name" value={name} onChange={({ target: { value } }) => updateProductInfo({ name: value })}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="A Product Name" value={price} onChange={({ target: { value } }) => updateProductInfo({ price: parseInt(value) })}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={description} onChange={({ target: { value } }) => updateProductInfo({ description: value })} />
            </Form.Group>
            <Button variant="success" onClick={onAddNewProductClicked}>
                Submit
            </Button>
        </Form>

    )
}

export default NewProductForm;