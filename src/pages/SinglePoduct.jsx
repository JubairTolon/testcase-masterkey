

const SinglePoduct = ({ product }) => {
    return (
        <div className="block cursor-pointer">
            <img src={product.product_img} alt="" />
            <h1>{product.product_name}</h1>
            <div className="flex justify-between mt-2">
                <p>$ {product.product_price}</p>
                <p className="text-red-500">-{product.product_discount} off</p>
            </div>
        </div>
    );
};

export default SinglePoduct;