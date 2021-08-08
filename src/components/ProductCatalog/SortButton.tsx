import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { SortDirection } from '../../types';

interface IProps {
    onSortDirectionSelected: (direction: SortDirection) => void;
}
function SortButton({ onSortDirectionSelected }: IProps) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSortDirectionSelected(SortDirection.ASC)}>Price Low To High</Dropdown.Item>
                <Dropdown.Item onClick={() => onSortDirectionSelected(SortDirection.DESC)}>Price High to Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortButton;