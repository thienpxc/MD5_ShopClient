import React, { useEffect } from "react";

import "./ProductList.scss";
import ProductLayout from "@components/Product-layout/ProductLayout";
import { useTranslation } from "react-i18next";
import apis from "@/apis";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState([]);
  useEffect(() => {
    apis.category.findAll().then((res) => {
      setCategory(res.data);
      console.log("category", res.data);
    });
  }, []);

  const handleCategory = (id) => {
   navigate(`/category/product/${id}`);
  };
  const { t } = useTranslation();
  return (
    <div className="product-list">
      <h2>{t("telephone")}</h2>
      <div className="brand-filters">
        {category.map((category) => (
          <button
            key={category.id}
            className="brand-button"
            onClick={() => handleCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <ProductLayout></ProductLayout>
    </div>
  );
}

export default ProductList;
