import React from "react";
import "./Cart.css";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const Cart = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Box sx={{ m: 4 }}>
        <div class="row flex">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                    alt="product"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                  $ 44.00
                  <span class="close">
                    <Chip
                      sx={{ mb: 1, ml: 1 }}
                      label="remove"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      deleteIcon={<DeleteIcon />}
                      variant="outlined"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/ba3tvGm.jpg"
                    alt="product"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                  $ 44.00
                  <span class="close">
                    <Chip
                      sx={{ mb: 1, ml: 1 }}
                      label="remove"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      deleteIcon={<DeleteIcon />}
                      variant="outlined"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/pHQ3xT3.jpg"
                    alt="product"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                  $ 44.00
                  <span class="close">
                    <Chip
                      sx={{ mb: 1, ml: 1 }}
                      label="remove"
                      onClick={handleClick}
                      onDelete={handleDelete}
                      deleteIcon={<DeleteIcon />}
                      variant="outlined"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5>
                <Typography varient="h6" sx={{fontWeight:700}}>
                  Summary
                </Typography>
              </h5>
            </div>
           <Divider sx={{mb:2,mt:-2}}/>
            <div class="row">
              <div class="col" style={{ paddingLeft: 0 }}>
                ITEMS 3
              </div>
              <div class="col text-right">$ 132.00</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <TextField
                id="outlined-select-currency"
                select
                fullWidth
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <p>GIVE CODE</p>
              <TextField
                id="outlined-basic"
                label="Enter Your Code Here"
                variant="outlined"
                fullWidth
              />
            </form>
            <div
              class="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div class="col" style={{fontWeight:700}}>TOTAL PRICE</div>
              <div class="col text-right">$ 137.00</div>
            </div>
            <Button variant="outlined" fullWidth sx={{mt:2}}>Done</Button>
          </div>
        </div>
      </Box>
    </>
  );
};
