import Product from "../product/Product";
import "./productList.css"
import { products } from "../../data";

const ProductList = () => {
  return ( 
    <div className="product-list">
        <div className="product-list-texts">
            <h1 className="product-list-title">Create & inspire</h1>
            <p className="product-list-desc">
                This is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p>
        </div>
        <div className="product-list-list">
            {products.map((item) => {
                return (
                    <Product 
                        key={item.id}
                        img={item.img}
                        link={item.link}
                    />
                )
            })}
        </div>
    </div>
  )
};

export default ProductList;