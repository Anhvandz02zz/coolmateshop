import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Join() {
  return (
    <div className="container join">
      <div className="marquee">
        <div>
          <span>
            CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7%
            cho lần mua sắm tiếp theo
          </span>
          <span>
            CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7%
            cho lần mua sắm tiếp theo
          </span>
        </div>
        <Button>
          <Link to="">Tìm hiểu Thêm</Link>
        </Button>
      </div>
    </div>
  );
}
