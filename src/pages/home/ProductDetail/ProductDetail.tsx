import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProductDetail.scss";
import { useTranslation } from "react-i18next";
import apis from "@/apis";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import { orderActions } from "@/stores/slices/order.slice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [showProduct, setShowProduct] = useState<any>(false);
  const userStore = useSelector((store: StoreType) => {
    return store.userStore;
  });
  useEffect(() => {
    apis.product
      .getProductById(productId ?? "")
      .then((res) => {
        setShowProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);
  console.log("showProduct", showProduct);
  const handleColor = (id: any) => {
    setSelectedImageId(id);
    console.log(id);
  };

  const handlePurchase = (id: any) => {
    const cart = {
      product: {
        id: productId,
      },
      user: userStore.data,

      quantity: 1,
      productVariant: { id: selectedImageId },
    };
    console.log(selectedImageId);
    apis.cart
      .addCart(cart)
      .then((res) => {
        console.log(res.data);
        navigate("/cart");
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
    console.log(id);
    selectedImageId;
    console.log(selectedImageId);
  };

  const { t } = useTranslation();
  if (!showProduct) return <div>Loading...</div>;
  return (
    <>
      <div className="product-page">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#ff3b30",
          }}
        >
          <HomeIcon />
          {t("home")}
        </Link>

        <h1>
          {showProduct.name}
          <span className="rating">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#ffd700" }} />
            ))}
            184 đánh giá
          </span>
        </h1>

        <div className="line"></div>

        <div className="product-content">
          <div className="product-image-container">
            <FavoriteIcon className="heart-icon" sx={{ color: "#ff3b30" }} />
            <div className="product-image-slider">
              {showProduct.productVariantImg.map((variantImg: any) => (
                <img
                  key={variantImg.id}
                  src={variantImg.images}
                  alt="Hình ảnh sản phẩm"
                />
              ))}
            </div>
            {/* {showProduct.productVariantImg.map((variantImg, index) => (
              <img
                key={`thumb-${variantImg.id}`}
                src={variantImg.images}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  index === activeImageIndex ? "active" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))} */}
            <div className="thumbnail-container">
              {showProduct.productVariantImg.map((variantImg: any, index: any) => (
                <img
                  key={`thumb-${variantImg.id}`}
                  src={variantImg.images}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail"
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="storage-options">
              <button
                className={
                  showProduct.storage === showProduct.storage ? "active" : ""
                }
              >
                {showProduct.storage}
              </button>
            </div>
            <p>{t("color")}</p>
            <div className="color-options">
              {showProduct.productVariants.map((img: any, index: any) => (
                <button
                  key={index}
                  onClick={() => handleColor(img.id)}
                  className={`color-selector ${
                    img.id === selectedImageId ? "selected" : ""
                  }`}
                >
                  <img
                    className="color-circle"
                    src={img.image}
                    alt="Description"
                  />
                  {img.color}
                  <div>
                    {showProduct.productVariants.price}đ
                  </div>
                </button>
              ))}
            </div>
            <div className="price-section">
              <div className="current-price">
                {showProduct.productVariants.price}đ
              </div>
              <div className="old-price">18.990.000đ</div>
            </div>

            <div className="button-grid">
              <button
                className="buy-now"
                // onClick={() => handlePurchase(showProduct.id)}
                onClick={() => {
                  console.log("da vao", showProduct)
                  console.log("test", selectedImageId)
                  let data = {
                    productId: parseInt(showProduct.id), // ID của sản phẩm chính
                    productVariantId: parseInt(selectedImageId), // ID của biến thể đã chọn
                    quantity: 1,
                    price: showProduct.productVariants[0].price,
                  };
                  if(data.productVariantId != null) {
                    apis.order.addToCart(data)
                    .then((res) => {
                      dispatch(orderActions.loadDataThunk() as any)
                    })
                    .then(() => {
                      navigate("/cart");
                    })
                    .catch((err) => {
                      console.error("There was an error!", err);
                    });
                  }
                }}
              >
                {t("buynow")}
              </button>

              <button className="add-to-cart">
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  <ShoppingCartIcon /> {t("addcart")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* detail --------------------------------------------------------------------------*/}
      {/* <div className="product-details">
        <div className="features">
          <h2>{t("about")}</h2>
          <ul>
            {features
              .slice(0, showMoreFeatures ? features.length : 1)
              .map((feature, index) => (
                <li key={index}>
                  <img
                    src={feature.image}
                    style={{
                      width: "750px",
                    }}
                  ></img>
                  <p>{feature.text}</p>
                </li>
              ))}
          </ul>
          <Button
            style={{
              border: "1px solid #ff3b30",
              color: "#ff3b30",
            }}
            variant="outlined"
            onClick={() => setShowMoreFeatures(!showMoreFeatures)}
            endIcon={
              showMoreFeatures ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            {showMoreFeatures ? t("less") : t("seemore")}
          </Button>
        </div>

        <div className="specs">
          <h2>{t("detail")}</h2>
          <table>
            <tbody>
              {specs
                .slice(0, showMoreSpecs ? specs.length : 4)
                .map((spec, index) => (
                  <tr key={index}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Button
            style={{
              border: "1px solid #ff3b30",
              color: "#ff3b30",
            }}
            variant="outlined"
            onClick={() => setShowMoreSpecs(!showMoreSpecs)}
            endIcon={
              showMoreSpecs ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            {showMoreSpecs ? t("less") : t("seemore")}
          </Button>
        </div>
      </div> */}
    </>
  );
};

export default ProductDetail;
