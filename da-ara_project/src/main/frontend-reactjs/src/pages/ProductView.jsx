import ThreeSixty from "react-360-view";

const ProductView = () => {
  return (
    <div>
      <div
        style={{
          width: "40%",
          border: "2px solid black",
          margin: "30px",
          position: "relative",
        }}
      >
        <ThreeSixty
          amount={36}
          imagePath="https://scaleflex.airstore.io/demo/chair-360-36"
          fileName="chair_{index}.jpg?v1"
        />
      </div>
    </div>
  );
};

export default ProductView;
