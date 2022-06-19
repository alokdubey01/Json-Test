import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product1.css";
import { data, multiData } from "./Data";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Rating,Typography,Button } from "@mui/material";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const Product2 = () => {
  return (
    <div
      className="Multi"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "90%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          slidesToScroll={3}
          dots
        >
          {multiData.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
    className="item"
      style={{
        textAlign: "center",
        margin: 20,
        padding: "0 10px",
        width: 220,
        borderRadius: 5,
      }}
    >
      <span style={{ float: "right", padding: "5px" }}>
        <Typography style={{ color: "red" }}>30% off</Typography>
      </span>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "120px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          color: "gray",
          fontWeight: 400,
        }}
      >
        Top Trending Tvs
      </p>
      <p>
        Lorem ipsum  Lorem ipsum 
      </p>
      <Rating precision={0.5} defaultValue={4.5} readOnly size="small" />
      <p>
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginRight: 7,
            fontWeight: 300,
          }}
        >
          ₹7170
        </span>
        <span style={{ color: "green", fontWeight: 700 }}>₹7071</span>
      </p>
      <Button variant="text">Add to cart</Button>
    </div>
  );
};

export default Product2;