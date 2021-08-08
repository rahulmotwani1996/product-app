import React from 'react';
import { getProductList, removeProductFromCatalog } from '../../productFetcher';
import { IProduct, SortDirection } from '../../types';
import ItemCard from './ItemCard';
import './ProductCatalog.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import SortButton from './SortButton';
import ProductFilter from './ProductFilter';
import { IFilter } from './types';



interface IProps {
    selectedCategory: string;
}

function ProductCatalog({ selectedCategory }: IProps) {
    const [productList, setProductList] = React.useState<IProduct[]>([]);
    const [sortDirection, setSortDirection] = React.useState<SortDirection>(SortDirection.ASC);
    const [displayDialog, setDisplayDialog] = React.useState<boolean>(false);
    const [filters, setFilters] = React.useState<IFilter>({min: 0, max: 0});
    const fetchProductList = async () => {
        const productList = await getProductList({ sort: sortDirection, min: filters.min, ...(filters.max > 0 ? {max: filters.max} : {})});
        setProductList(productList);
    }
    React.useEffect(() => {
        fetchProductList();
    }, [sortDirection, filters])

    const handleApplyFilter = (filters: IFilter) => {
        setFilters(filters);
        setDisplayDialog(false);
    }

    const handleCloseDialog = () => {
        setDisplayDialog(false);
    }

    const onDeleteProduct = async (id: string) => {
        const response = await removeProductFromCatalog(id);
        if(response.deleted) {
            const updatedProductList = productList.filter(item => item._id !== id);
            setProductList(updatedProductList);
        }else {
            console.log(response.msg);
        }
    }

    const onFilterButtonClick = () => setDisplayDialog(true);

    return (
        <Container fluid>
            <Row xs={12} className="justify-content-sm-end">
                <Col lg={1}><SortButton onSortDirectionSelected={(dir) => setSortDirection(dir)}/></Col>
                <Col lg={1}><Button variant={'outline-dark'} onClick={onFilterButtonClick}>Filter</Button></Col>
            </Row>
             <Row>
            <div className="list-container">{
            productList.map(item => <Col key={item._id} xs={12} sm={6} md={4} lg={4} xl={3}><ItemCard product={item} onDeleteProduct={() => onDeleteProduct(item._id)} key={item._id}/></Col>)
        }</div>

        </Row>
        <ProductFilter
            displayDialog={displayDialog}
            handleApplyFilter={handleApplyFilter}
            handleCloseDialog={handleCloseDialog}
            filters={filters}
        />

        </Container>
       
        
    )
}

export default ProductCatalog;