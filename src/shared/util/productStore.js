import { productsData } from '../../assets/productsData'

function getProductData(id) {
    let productData = productsData.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsData, getProductData };