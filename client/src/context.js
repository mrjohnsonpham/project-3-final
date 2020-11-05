import React, { Component, createContext } from 'react'
import { storeProducts } from './data'
const ProductContext = createContext();
//Provide
//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }