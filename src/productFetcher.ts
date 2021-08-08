import { IProduct, SortDirection } from './types';

interface IDeleteProductResponse {
    msg: string;
    deleted: boolean;
}

interface IAddProductResponse {
    msg: string;
    id?: string;

}

interface IFetchProductListQueryParams {
    sort: SortDirection;
    min?: Number;
    max?: Number;
}
const HOSTNAME = "http://localhost:8080";
const API_ENDPOINT = "api/product";

async function getProductList({sort, min, max}: IFetchProductListQueryParams) {
    try {
    const url = new URL(`${HOSTNAME}/${API_ENDPOINT}`);
    url.searchParams.append('sort', sort);
    min && url.searchParams.append('min', min.toString());
    max && url.searchParams.append('max', max.toString());

    const request = new Request(url.toString(), { method: 'GET'});
    const data: IProduct[] = await fetch(request)
    .then(response => response.json())
    .then(data => data);
    return data;
        
    } catch(error) {
        return [];
    }
    
}

async function addNewProduct(product: IProduct): Promise<IAddProductResponse> {
    try {
        const headers = new Headers()
        headers.append('Content-type', 'application/json');
        const request = new Request(`${HOSTNAME}/${API_ENDPOINT}`, { method: 'POST', body: JSON.stringify(product), headers: headers});
        
        
        const data: IAddProductResponse = await fetch(request).then(response => response.json())
        console.log(data);
        return data;
    } catch(error) {
        return { msg: error.message };
    }
}

async function removeProductFromCatalog(id: string): Promise<IDeleteProductResponse> {
    try {
        const request = new Request(`${HOSTNAME}/${API_ENDPOINT}/${id}`, { method: 'DELETE'});
        const data: any = await fetch(request).then(response => {
            if(response.status === 200) {
                return response.json();
            }else {
                throw new Error('Failed to  delete the product');
            }
        });

        return data;
    } catch(error) {
        return { msg: 'Failed to delete the product', deleted: false};
    }
}

export { getProductList, removeProductFromCatalog, addNewProduct }