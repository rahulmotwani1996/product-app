import React from 'react';
import { getAvailableCategories } from '../../helper';
import './CategorySelector.css';
import ListGroup from 'react-bootstrap/ListGroup';


interface IProps {
    onSelectedCategoryChanged: (id: string) => void;
    selectedCategory: string;
}

function CategorySelector({
    onSelectedCategoryChanged,
    selectedCategory,
}: IProps) {
    return (
        <div>
            <h4>Shop Name</h4>
            <ListGroup>
                {
                    getAvailableCategories().map(item => {
                        return <ListGroup.Item key={item.id} onClick={() => onSelectedCategoryChanged(item.id)} className={'text-primary'}>{item.label}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    )

}

export default CategorySelector;