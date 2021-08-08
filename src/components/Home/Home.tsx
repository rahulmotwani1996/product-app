import React from 'react';
import CategorySelector from '../CategorySelector/CategorySelector';
import ProductCatalog from '../ProductCatalog/ProductCatalog';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import './Home.css';

function Home() {
 

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const onSelectedCategoryChanged = (id: string) => {
    console.log('Category Changed');
    setSelectedCategory(id);
  }
  return (
    <>
    <Container fluid className={'p-4'}>
      <Row>
        <Col className={'p-2'} xs={12} sm={6} md={4} lg={3}><CategorySelector onSelectedCategoryChanged={onSelectedCategoryChanged} selectedCategory={selectedCategory}/></Col>
        <Col className={'p-2'} xs={12} sm={6} md={8} lg={9}><ProductCatalog selectedCategory={selectedCategory}/></Col>
      </Row>
    </Container>
          
          
    </>
  );
}

export default Home;
