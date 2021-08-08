import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IFilter } from './types';
import Form from 'react-bootstrap/Form';



interface IProps {
    displayDialog: boolean;
    filters: IFilter;
    handleCloseDialog: () => void;
    handleApplyFilter: (filters: IFilter) => void;
}

function ProductFilter({
    displayDialog,
    handleApplyFilter,
    handleCloseDialog,
    filters,
}: IProps) {
    const [minPrice, setMinPrice] = React.useState(filters.min);
    const [maxPrice, setMaxPrice] = React.useState(filters.max);

    return (
        <Modal show={displayDialog} onHide={handleCloseDialog} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Min Price</Form.Label>
            <Form.Control type="number" value={minPrice} onChange={({target: { value }}) => setMinPrice(Number(value))}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Max Price</Form.Label>
            <Form.Control type="number" value={maxPrice} onChange={({target: { value }}) => setMaxPrice(Number(value))}></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDialog}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleApplyFilter({min: minPrice, max: maxPrice})}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ProductFilter;
