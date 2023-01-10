import { sectionsData } from '../../assets/sectionsData'

function getProductData(id) {
    let productData = sectionsData.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { sectionsData, getProductData };