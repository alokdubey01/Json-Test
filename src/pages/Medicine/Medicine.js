import React from "react";
import './Medicine.css'
import { data, multiData } from "../../components/product/Data";
import { Button, Typography, Rating,Divider } from "@mui/material";

export const Medicine = () => {
  return (
    <div
      className="Multi"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "90%",display:"flex",flexWrap:"wrap",margin:"auto" }}>
        {multiData.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
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
      <p>Lorem ipsum Lorem ipsum</p>
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
