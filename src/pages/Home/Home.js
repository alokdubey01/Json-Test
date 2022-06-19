import React from "react";
import "./Home.css";
import Corousel from "../../components/Corousel/Corousel";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import doctor from "../../static/img/diagnosis.png";
import prescription from "../../static/img/prescription.png";
import flask from "../../static/img/flask.png";
import discount from "../../static/img/discount.png";
import Product1 from "../../components/product/Product1";
import Product2 from "../../components/product/Product2";
import axios from 'axios';

export const Home = () => {
  const [data, setData] = React.useState(null);

// React.useEffect(()=>{
//     axios
//   .get('http://localhost:4000/product')
//   .then((res) => {
//     console.log(res);
//     console.log(res.data);
//     setData(res.data)
//     // localStorage.setItem("userDetail", JSON.stringify(userDetail));
//     // const retrieveUser = JSON.parse(localStorage.getItem("userDetail"));
//     // console.log(retrieveUser.img);
//     // localStorage.setItem('user', user.name);
//     // console.log("Hello " + user.name);
//     // dispatch(actions.authSuccess(token, user));
//     // navigate("/home");
//   })
//   .catch((err) => {
//     console.log(err.msg);
//     // console.log(err.response.data.msg);
//   });
// })

  return (
    <div className="product">
      <Corousel />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "2rem",
          letterSpacing: "2px",
          pt: 2,
        }}
      >
        Ser<span className="highlight">vi</span>ces
      </Typography>
      <div className="product-container">
        <div className="p-box">
          <img alt="1" src={doctor} />
          <h5>Doctor Consultation</h5>
          <a className="ex-btn" href="/">
            Get in Touch
          </a>
        </div>
        <div className="p-box">
          <img alt="2" src={prescription} />
          <h5>Home Medicine Delivery</h5>
          <a className="ex-btn" href="order.html">
            Order Medicine
          </a>
        </div>
        <div className="p-box">
          <img alt="3" src={flask} />
          <h5>Diagnostic Tests</h5>
          <a className="ex-btn" href="tests.html">
            Apply For Tests
          </a>
        </div>
        <div className="p-box">
          <img alt="4" src={discount} />
          <h5>Grab Offer & Discounts</h5>
          <a className="ex-btn" href="/">
            Use Services
          </a>
        </div>
      </div>
      <Box>
        <Typography sx={{ ml: 4, fontSize: "16px", fontWeight: 700 }}>
          Top Offers
        </Typography>
        {/* {data.name} */}
        <Product1 />
      </Box>
      <Box sx={{ mt: 12 }}>
        <Typography sx={{ ml: 4, fontSize: "16px", fontWeight: 700 }}>
          On Your Demand
        </Typography>
        <Product2 />
      </Box>

      <section className="doctors">
        <Typography sx={{ ml: 4, fontSize: "16px", fontWeight: 700 }}>
          Our Specilists Doctors
        </Typography>
        <div className="doc-row" sx={{ ml: 4 }}>
          <div className="profile-card">
            <header>
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                  alt="doc"
                />
              </a>
              <h1>Lorem ipsum</h1>
              <h2> dolor sit amet.</h2>
            </header>
            <div className="profile-bio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis suscipit necessitatibus facilis eaque consequuntur ea
                eos unde facere nobis nulla!
              </p>
            </div>
            <Button sx={{ width: "100%" }} variant="contained">
              Connect
            </Button>
          </div>
          <div className="profile-card">
            <header>
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                  alt="doc"
                />
              </a>
              <h1>Lorem ipsum</h1>
              <h2> dolor sit amet.</h2>
            </header>
            <div className="profile-bio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis suscipit necessitatibus facilis eaque consequuntur ea
                eos unde facere nobis nulla!
              </p>
            </div>
            <Button sx={{ width: "100%" }} variant="contained">
              Connect
            </Button>
          </div>
          <div className="profile-card">
            <header>
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                  alt="doc"
                />
              </a>
              <h1>Lorem ipsum</h1>
              <h2> dolor sit amet.</h2>
            </header>
            <div className="profile-bio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis suscipit necessitatibus facilis eaque consequuntur ea
                eos unde facere nobis nulla!
              </p>
            </div>
            <Button sx={{ width: "100%" }} variant="contained">
              Connect
            </Button>
          </div>
          <div className="profile-card">
            <header>
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                  alt="doc"
                />
              </a>
              <h1>Lorem ipsum</h1>
              <h2> dolor sit amet.</h2>
            </header>
            <div className="profile-bio">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis suscipit necessitatibus facilis eaque consequuntur ea
                eos unde facere nobis nulla!
              </p>
            </div>
            <Button sx={{ width: "100%" }} variant="contained">
              Connect
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};