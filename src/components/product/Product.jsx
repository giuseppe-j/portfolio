import "./product.css"

const Product = ({img,link}) => {
  return ( 
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a href={link} className="" rel="no-referrer">
        <img src={img} alt="" className="product-img" />
      </a>
    </div>
  )
};

export default Product;