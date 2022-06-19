import React from "react";
import "./Consult.css";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Details from "../../components/Details/Detail";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Consult = () => {
  return (
    <>
      <Thumbnail />

      {/* User Input Field */}

      <Paper
        elevation={0}
        sx={{
          position: "absolute",
          background: "#fff",
          marginTop: "-20px",
          left: "15%",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <FormControl variant="standard">
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ fontSize: "18px", fontWeight: 900 }}
            >
              Your Name
            </InputLabel>
            <BootstrapInput placeholder="eg. Alok Dubey" id="bootstrap-input" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ fontSize: "18px", fontWeight: 900 }}
            >
              Your Date of Birth
            </InputLabel>
            <BootstrapInput placeholder="eg. 09/03/1991" id="bootstrap-input" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ fontSize: "18px", fontWeight: 900 }}
            >
              Your Problem
            </InputLabel>
            <BootstrapInput placeholder="eg. Covid" id="bootstrap-input" />
          </FormControl>
          <button className="consult_btn">Consult Now</button>
        </Box>
      </Paper>

      {/* Tiles page to show facilities */}

      <div className="tiles">
        <ul class="tilesWrap">
          <li>
            <h2>01</h2>
            <h3>Start a session</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              eius eligendi quia, debitis adipisci sapiente? Atque sequi maxime
              fugit, autem placeat neque dolore, voluptas nam ea saepe, deleniti
              sunt. Quibusdam!
            </p>
            <button>Read more</button>
          </li>
          <li>
            <h2>02</h2>
            <h3>Tell Us you Problem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptatum at quasi dolore libero hic beatae non
              laborum rerum reprehenderit?
            </p>
            <button>Read more</button>
          </li>
          <li>
            <h2>03</h2>
            <h3>Connect With Doctor</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reiciendis libero unde reprehenderit. Consectetur,
              quibusdam! Natus, aut mollitia! Repellat, quisquam!
            </p>
            <button>Read more</button>
          </li>
          <li>
            <h2>04</h2>
            <h3>Follow Consultation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              maiores dolore molestias repellendus nam suscipit, excepturi
              aspernatur. Nulla, ullam ut!
            </p>
            <button>Read more</button>
          </li>
        </ul>
      </div>

      {/* Detailed View */}
      <Details/>
    </>
  );
};
