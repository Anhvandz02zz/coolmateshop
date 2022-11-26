import supportsize from "../Style/supportsize.css";
export default function SuportSize() {
  const closebtnsize = () => {
    setSupPortSize(false);
  };

  return (
    <div className="supportsize">
      <div className="box-size">
        ok
        <div>
          <i className="fas fa-times" onClick={closebtnsize}></i>
        </div>
      </div>
    </div>
  );
}
