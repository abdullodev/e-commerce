import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContextType, ProductType } from "../types.products.";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [singleProduct, setSingleProduct] = useState<ProductType | undefined>(
    undefined
  );
  const [title, setTitle] = useState<string>("All Products");
  const [err, setErr] = useState<any>("");
  const [searchErr, setSearchErr] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [likeItems, setLikeItems] = useState<any[]>(
    JSON.parse(localStorage.getItem("like") || "[]")
  );
  const [isProductCome, setIsProductCome] = useState<boolean>(false);

  const SINGLE_PRODUCT: string = "https://dummyjson.com/products/";
  const fetchProduct = async (id: number) => {
    setSingleProduct(undefined);
    setIsProductCome(true);

    try {
      const response = await fetch(SINGLE_PRODUCT + id);
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
      setErr(error);
    } finally {
      setIsProductCome(false);
    }
  };

  const CATEGORY: string = "https://dummyjson.com/products/categories";
  const fetchCategory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(CATEGORY);
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.log(error);
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  };

  const CATEGORY_DATA: string = "https://dummyjson.com/products/category/";
  const fetchCategoryData = async (name: string) => {
    setTitle(name);
    setIsLoading(true);
    try {
      const response = await fetch(CATEGORY_DATA + name);
      const data = await response.json();
      setProducts(data.products);
      setSearchedProducts(data.products);
    } catch (error) {
      console.log(error);
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ALL_PRODUCTS: string = "https://dummyjson.com/products";
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(ALL_PRODUCTS);
      const res = await response.json();
      const data = res.products;

      setProducts(data);
      setSearchedProducts(data);
    } catch (error) {
      setErr(error);
    } finally {
      setIsLoading(false);
    }
  };

  // cart product

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const addCartProducts = (id: number) => {
    if (cartItems?.some((c: any) => c.id === id)) {
      toast.warn("Product is in the cart:)", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      let newCart = products?.find((p) => p.id === id);
      cart.push({ ...newCart, count: 1 });
      setCartItems(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      totalAmountFunc();
      toast.success(` Added to cart successfully!`, {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const deleteCartProduct = (id: number) => {
    let deleted = cartItems.filter((c: any) => c.id !== id);
    setCartItems(deleted);
    localStorage.setItem("cart", JSON.stringify(deleted));
    totalAmountFunc();
    toast.warn("Deleted from the cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  // like products

  let like = JSON.parse(localStorage.getItem("like") || "[]");

  const addLikeProducts = (id: number) => {
    if (like.some((l: any) => l.id === id)) {
      deleteLikeProduct(id);
    } else {
      let newLike = products.find((like) => like.id === id);
      like.push({ ...newLike, isLike: true });

      setLikeItems(like);
      localStorage.setItem("like", JSON.stringify(like));
    }
  };

  const deleteLikeProduct = (id: number) => {
    let deleted = like.filter((l: any) => l.id !== id);
    setLikeItems(deleted);
    localStorage.setItem("like", JSON.stringify(deleted));
  };

  // like mark

  const isProductmark = (id: number) => {
    return !!likeItems.find((like) => like.id === id);
  };

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  let totalAmount = Number(
    JSON.parse(localStorage.getItem("totalAmount") || "0")
  );

  const totalAmountFunc = () => {
    let initialValue: number = 0;
    let cartsTotal = JSON.parse(localStorage.getItem("cart") || "[]");
    totalAmount = cartsTotal.reduce(
      (a: number, b: any) => a + b.price * b.count,
      initialValue
    );

    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  };

  // increase count function

  const increseCount = (id: number) => {
    let newCarts = cartItems.map((cart) => {
      if (cart.id === id) {
        if (cart.count < cart.stock) {
          cart.count++;
        } else {
          toast.warn("This product is out of stock", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }

      return cart;
    });

    setCartItems(newCarts);
    localStorage.setItem("cart", JSON.stringify(newCarts));
    totalAmountFunc();

    console.log(newCarts);
  };

  // increase count function

  const decreseCount = (id: number) => {
    let newCarts = cartItems.map((cart) => {
      if (cart.id === id) {
        if (cart.count > 1) {
          cart.count--;
        }
      }

      return cart;
    });

    setCartItems(newCarts);
    localStorage.setItem("cart", JSON.stringify(newCarts));
    totalAmountFunc();
  };

  return (
    <ProductContext.Provider
      value={{
        err,
        searchErr,
        isLoading,
        isProductCome,
        searchedProducts,
        increseCount,
        decreseCount,
        cartItems,
        totalAmount,
        likeItems,
        isProductmark,
        products,
        title,
        singleProduct,
        category,
        setProducts,
        setSearchedProducts,
        setTitle,
        setSearchErr,
        setCategory,
        fetchData,
        fetchProduct,
        fetchCategory,
        fetchCategoryData,
        addCartProducts,
        deleteCartProduct,
        addLikeProducts,
        deleteLikeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
