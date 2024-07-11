import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";

import apis from "@/apis";
import ProductDetail from "@/pages/home/ProductDetail/ProductDetail";
import { useNavigate, useParams } from "react-router-dom";
export default function Product() {
   const { productId } = useParams();
   console.log(productId);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState(false);
  
  useEffect(() => {
    apis.product
      .productCategory(productId)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);
  const handleDetail = (id) => {
    setDetail(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.productVariantImg && product.productVariantImg[0] && (
              <button onClick={() => handleDetail(product.id)}>
                <img
                  key={product.productVariantImg[0].id}
                  src={product.productVariantImg[0].images}
                  alt="Hình ảnh sản phẩm"
                />
              </button>
            )}
            <h3>{product.name}</h3>
            <div className="price-info">
              {product.productVariants && product.productVariants[0] && (
                <>
                  <span
                    className="current-price"
                    key={product.productVariants[0].id}
                  >
                    {product.productVariants[0].price.toLocaleString()} đ
                  </span>
                  <span className="old-price">18,990,000đ</span>
                </>
              )}
            </div>
            <div className="discount-badge">Giảm 20%</div>
            <div className="installment-badge">Trả góp 0%</div>
            <p className="product-pay">
              Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6...
            </p>

            <div className="rating">★★★★★</div>
            <span className="like-button">♡</span>
          </div>
        ))}
      </div>
      {detail && <ProductDetail productId={detail} />}
    </div>
  );
}
