import Products from "../components/Products/Products";

import Cart from "../components/Cart/Cart";

import "./Store.css";

const StorePage = (props) => {
    return (
            <>
                <Products products={props.products} />
                <Cart title={"See the Cart"} color={"primary"} />
            </>
    );
};

export default StorePage;
