import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";
import Loading from "./Loading";
import Product from "./Product";

const Products = () => {
  const { title, searchedProducts, err, isLoading, searchErr } = useContext(
    ProductContext
  ) as ProductContextType;

  return (
    <div className="products_container">
      <div className="title_category">
        <h3>{title}</h3>
        <span></span>
      </div>
      <div className="all_products">
        {isLoading && !err && (
          <div className="my_loader">
            <Loading height="80" width="100" radius="9" />
          </div>
        )}
        {!isLoading && err && (
          <div className="my_err_box">
            <h3>Oops Someting went wrong!</h3>
          </div>
        )}
        {!isLoading && !err && (
          <div className="products">
            {searchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}

        {!isLoading && !err && searchedProducts.length === 0 && (
          <div className="search_err_box">
            <h3>{searchErr}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
