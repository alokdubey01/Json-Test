import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product1.css";
import multicar1 from "./assets/multicar1.jpeg";
import { data, multiData } from "./Data";
// import { images } from "./Data";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Rating, Typography, Button,Box } from "@mui/material";
import { Images } from "./Images";

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

const Product1 = () => {
  const [product, setProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:4000/product");
      setProduct(res.data);
      setProductImg(res.data[0].image);
      // setLoading(true)
    } catch (err) {
      alert(err.msg);
    }
  }; 
  
  // const getProduct = async () => {
  //   axios
  //   .get('http://localhost:4000/product')
  //   .then((res) => {
  //     // console.log(res);
  //     // console.log(res.data);
  //     // console.log(res.data[0].image);
  //     // setProduct(res.data)
  //     // setProductImg(res.data[0].image)
  //     // const abc = res.json()
  //     const abc = JSON.stringify(res)
  //     const dba = JSON.parse(abc)
  //     console.log(abc)
  //     console.log(abc[0].image)
  //     setProduct(dba)
  //     // setProduct(res.data)
  //     // setProduct(data)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };

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
          {/* {multiData.map((item) => (
            <Card item={item} />
          ))} */}
           {product.map((item,index) => (
            console.log(index),
            console.log(item.image),
            <Box
            key={index}
            sx={{
              textAlign: "center",
              margin: 20,
              padding: "0 10px",
              width: 220,
              m:4,
              borderRadius: 5,
            }}
          >
            <span style={{ float: "right", padding: "5px" }}>
              <Typography style={{ color: "red" }}>30% off</Typography>
            </span>
            <img
              className="multi__image"
              src={require(`${item.image}`)}
              // src={`./${productImg}`}
              // src={productImg}
              // src={item.image}
              alt=""
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <p className="title"
              style={{
                fontSize: "18px",
                color: "gray",
                fontWeight: 400,
              }}
            >
              {item.name}
            </p>
            <p className="desc">{item.description}</p>
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
                ₹{item.price_desable}
              </span>
              <span style={{ color: "green", fontWeight: 700 }}>₹{item.price}</span>
            </p>
            <Button variant="text">Add to cart</Button>
          </Box>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// const Card = ({ item }) => {
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         margin: 20,
//         padding: "0 10px",
//         width: 220,
//         borderRadius: 5,
//       }}
//     >
//       <span style={{ float: "right", padding: "5px" }}>
//         <Typography style={{ color: "red" }}>30% off</Typography>
//       </span>
//       <img
//         className="multi__image"
//         src={item}
//         alt=""
//         style={{
//           width: "100%",
//           height: "120px",
//           objectFit: "contain",
//           marginBottom: "10px",
//         }}
//       />
//       <p
//         style={{
//           fontSize: "18px",
//           color: "gray",
//           fontWeight: 400,
//         }}
//       >
//         Top Trending Tvs
//       </p>
//       <p>Lorem ipsum Lorem ipsum</p>
//       <Rating precision={0.5} defaultValue={4.5} readOnly size="small" />
//       <p>
//         <span
//           style={{
//             textDecoration: "line-through",
//             color: "gray",
//             marginRight: 7,
//             fontWeight: 300,
//           }}
//         >
//           ₹7170
//         </span>
//         <span style={{ color: "green", fontWeight: 700 }}>₹7071</span>
//       </p>
//       <Button variant="text">Add to cart</Button>
//     </div>
//   );
// };

export default Product1;
