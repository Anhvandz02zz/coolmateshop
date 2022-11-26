import useFetch from "../../Hook/useFetch";
import footer from "../Style/footer.css";
import imgphone from "../img/phone.png";
import imggmail from "../img/gmail.png";
import imgfacebook from "../img/facebook.png";
import imginstagram from "../img/instagram.png";
import imgyoutobe from "../img/youtube.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function Footer() {
  // const {
  //   data: dataproduct,
  //   isLoading: isLoadingdataproduct,
  //   isError: loi,
  // } = useFetch(`http://localhost:3004/productData`, false);
  // console.log(dataproduct, isLoadingdataproduct, loi);
  const footer = [
    {
      id: "FT1",
      title: "Khám phá COOLMATE",

      textLink: [
        "Aó polo",
        "Áo T-shirt",
        "Quần",
        "Quần Lót",
        "Tất (Vớ)",
        "Mũ (Nón)",
        "Phụ Kiện Khác",
      ],
      textlinkone: [],
    },
    {
      id: "FT2",
      title: "Dịch vụ khách hàng",
      textLink: [
        "Hỏi đáp - FAQs",
        "Chính sách đổi trả 60 ngày",
        "Liên hệ",
        "Thành viên Coolclub",
        "Khách hàng hài lòng 100%",
        "Mũ (Nón)",
        "Phụ Kiện Khác",
        "Chính sách khuyến mãi",
        "Chính sách giao hàng",
      ],
      title1: "Kiến thức mặc đẹp",
      textlinkone: ["Hướng dẫn chọn size", "Blog", "Group mặc đẹp sống chất"],
    },

    {
      id: "FT5",
      title: "Tài liệu - Tuyển dụng",
      textLink: ["Tuyển dụng", "Đăng ký bản quyền"],
      title1: "Về COOLMATE",
      textlinkone: [
        "Câu chuyện về Coolmate",
        "Nhà máy",
        "CoolClub",
        "Care & Share",
      ],
    },
    {
      id: "FT7",
      title: "Địa chỉ liên hệ",
      textLink: [
        "HUB Hà Nội: Số 103, Đường",
        "Nhà máy",

        "Care & Share",
        "HUB Tp HCM: Lầu 1, Số 163",
        "Trần Trọng Cung, Phường",
        "Tân Thuận Đông, Quận 7, Tp.",
        "Hồ Chí Minh",
      ],
      textlinkone: [],
    },
    {
      id: "FT8",
      title: "COOLMATE lắng nghe bạn!",
      textLink: [
        "Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.",
      ],
      btn: "Gửi ý kiến",
      imgphone: imgphone,
      textphone: ["Hotline", "1900.272737 (028.7777.2737)"],
      imggmail: imggmail,
      gmailtext: ["Email", "Cool@coolmate.me"],
      imgface: imgfacebook,
      imginstagram: imginstagram,
      imgyoutobe: imgyoutobe,
      textlinkone: [],
    },
  ];
  return (
    <>
      <div className="container-fluid bg">
        <div className="flex-footer">
          {footer.map((footers) => {
            return (
              <div key={footers.id}>
                <div className="footer">
                  <p className="footer-title">{footers.title}</p>

                  {footers.textLink.map((link) => {
                    return (
                      <li key={link} className="text-link-footer">
                        <Link style={{ color: "white" }} to="">
                          {link}
                        </Link>
                      </li>
                    );
                  })}
                  <p className="footer-title1">{footers.title1}</p>
                  {footers.textlinkone.map((linkone) => {
                    return (
                      <li key={linkone} className="text-link-footer">
                        <Link style={{ color: "white" }} to="">
                          {linkone}
                        </Link>
                      </li>
                    );
                  })}
                  <img
                    style={{ color: "white", width: "20px" }}
                    src={footers.imgphone}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
