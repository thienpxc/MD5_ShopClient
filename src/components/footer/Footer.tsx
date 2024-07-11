import React from "react";
import "./footer.scss";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>{t("hotline")}</h3>
          <p>{t("hotline_purchase")}</p>
          <p>{t("hotline_complain")}</p>
          <p>{t("hotline_guarantee")}</p>
          <h4>{t("payment")}</h4>
          <div className="payment-methods">
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
              alt="Apple Pay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
              alt="VNPay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
              alt="MoMo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
              alt="OnePay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
              alt="MPOS"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
              alt="Kredivo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
              alt="ZaloPay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
              alt="Payoo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
              alt="Fundiin"
            />
          </div>
        </div>

        <div className="footer-section subscription">
          <h3>{t("singup")}</h3>
          <p>
            <i>*</i> {t("voucher")}
          </p>
          <p>
            <i>*</i> {t("voucher_note")}
          </p>
          <form className="subscription-form">
            <input type="email" placeholder={t("email")} required />
            <input type="text" placeholder={t("phone")} />
            <div className="agreement">
              <input type="checkbox" required />
              <a href="https://cellphones.com.vn/tos?part=privacy-policy">
                {t("agreement")}
              </a>
            </div>
            <button type="submit">{t("register")}</button>
          </form>
        </div>

        <div className="footer-section policies">
          <h3>{t("information_policy")}</h3>
          <ul>
            <li>{t("buy_online")}</li>
            <li> {t("installment_online")}</li>
            <li>{t("installment_credit_card")}</li>
            <li>{t("delivery_policy")}</li>
            <li> {t("store_system")}</li>
            <li> {t("smember_offer")}</li>
            <li>{t("warranty_information")}</li>
            <li> {t("electronic_invoice")}</li>
            <li>{t("official_warranty_center")}</li>
            <li> {t("backup_data")}</li>
            <li>{t("apple_product_unboxing_policy")}</li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>{t("other_services_information")}</h3>
          <ul>
            <li>{t("business_customers")}</li>
            <li> {t("payment_offer")}</li>
            <li>{t("operating_regulations")}</li>
            <li>{t("personal_information_privacy_policy")}</li>
            <li> {t("warranty_policy")}</li>
            <li>{t("business_cooperation_contact")}</li>
            <li>{t("recruitment")}</li>
            <li> {t("extended_warranty_service")}</li>
            <li>{t("smember_points")}</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3> {t("connect_with_cellphones")}</h3>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                alt="YouTube"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                alt="TikTok"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                alt="Zalo"
              />
            </a>
          </div>
          <h4>Website thành viên</h4>
          <div className="member-websites">
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                  alt="Điện Thoại Vui"
                />
              </a>
              <div className="description">
                Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                  alt="CareS"
                />
              </a>
              <div className="description">
                Trung tâm bảo hành uỷ quyền Apple
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                  alt="SChannel"
                />
              </a>
              <div className="description">
                Kênh thông tin giải trí công nghệ cho giới trẻ
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                  alt="SForum"
                />
              </a>
              <div className="description">
                Trang thông tin công nghệ mới nhất
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li>
            <a href="#">Back to School là gì</a>
          </li>
          <li>
            <a href="#">Điện thoại iPhone</a>
          </li>
          <li>
            <a href="#">Điện thoại Vivo</a>
          </li>
          <li>
            <a href="#">Điện thoại OPPO</a>
          </li>
          <li>
            <a href="#">Điện thoại Xiaomi</a>
          </li>
          <li>
            <a href="#">Laptop</a>
          </li>
          <li>
            <a href="#">Tivi</a>
          </li>
          <li>
            <a href="#">Đồ gia dụng</a>
          </li>
        </ul>
        <p>
          Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật ĐIỆU PHÚC - GPKD:
          0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ
          Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
