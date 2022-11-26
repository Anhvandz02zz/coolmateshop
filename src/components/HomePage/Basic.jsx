import bs1 from "../img/bs1.png";
import bs2 from "../img/bs2.png";
import bs3 from "../img/bs3.png";
import bs4 from "../img/bs4.png";
import bs5 from "../img/bs5.png";

export default function Basic(props) {
  const basic = [
    {
      id: 1,
      name: "Aó thun nam Cotton 100%",
      linkimg: bs1,
      price: "119.000đ",
    },
    {
      id: 2,
      name: "Aó ba lỗ 100% Cotton V2",
      linkimg: bs2,
      price: "89.000đ",
    },
    {
      id: 3,
      name: "Aó thể thao Rycycle",
      linkimg: bs3,
      price: "99.000đ",
    },
    {
      id: 4,
      name: "Quần mặc nhà",
      linkimg: bs4,
      price: "69.000đ",
    },
    {
      id: 5,
      name: "Quần lót Cotton 100%",
      linkimg: bs5,
      price: "49.000đ",
    },
  ];

  return (
    <>
      <h1 className="basic-text">Coolmate Basics</h1>

      <div className="container-fluid">
        <div className="basic">
          {basic.map((lists) => {
            return (
              <div key={lists.id} className="basic-img">
                <img src={lists.linkimg} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
