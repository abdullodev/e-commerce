import React, { FC, useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";
import Loading from "./Loading";

const Filter: FC = () => {
  window.addEventListener("scroll", () => {
    let filter = document.querySelector(".filter_content");

    if (window.pageYOffset > 42) {
      filter?.classList.add("active");
    } else {
      filter?.classList.remove("active");
    }
  });

  const {
    category,
    fetchCategoryData,
    fetchData,
    setTitle,
    setProducts,
    err,
    isLoading,
  } = useContext(ProductContext) as ProductContextType;
  const [search, setSearch] = useState<string>("");
  const [searchedCategory, setSearchedCategory] = useState<string[]>([]);

  // console.log(category);
  const filterCategory = (e: any) => {
    setSearch(e.target.value);
    let allProduct = document.querySelector(".all_product_title");

    if (e.target.value === "") {
      allProduct?.classList.remove("active");
      setSearchedCategory(category);
    } else {
      allProduct?.classList.add("active");

      let searched = category.filter((cat) =>
        cat.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setSearchedCategory(searched);
    }
  };

  const fetchCatData = (name: string) => {
    setProducts([]);
    fetchCategoryData(name);
  };

  useEffect(() => {
    setSearchedCategory(category);
  }, [category]);

  const getAll = () => {
    setProducts([]);
    fetchData();
    setTitle("All Products");
  };
  return (
    <div className="filter_content">
      <div className="filter">
        <div className="filter_bar">
          <div className="filter_title">Categorys</div>
          <span></span>
        </div>

        <div className="filter_input_box">
          <input
            type="text"
            placeholder="Search Category..."
            value={search}
            onChange={filterCategory}
          />
        </div>

        <div className="filter_box">
          {isLoading && !err && (
            <div className="filter_category_loading">
              <Loading height="40" width="60" radius="4" />
            </div>
          )}
          {!isLoading && err && (
            <div className="filter_category_err">
              <h3>Oops Someting went wrong!</h3>
            </div>
          )}
          {!isLoading && !err && (
            <ul className="filter_list">
              <li
                className="filter_li all_product_title my_btn"
                onClick={getAll}
              >
                <Button className="category_menu">All Products</Button>
              </li>
              {searchedCategory?.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => fetchCatData(cat)}
                  className="filter_li"
                >
                  <Button className="category_menu my_btn">{cat}</Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
