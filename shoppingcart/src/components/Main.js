import Product from "./Product";

export default function Main(props) {
    const { cartItems, products, onAdd, onRemove } = props;

    return <div className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {products.map((product) => {
                return <Product product={product}
                    key={product.id}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    item={cartItems.find((x) => x.id === product.id)} />
            })}

        </div>
    </div>

}

// {products.map((product) => {
//     return  <div>{product.name}</div>
//   })}