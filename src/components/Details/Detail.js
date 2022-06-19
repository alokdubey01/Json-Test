import * as React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import doctor from "../../static/img/doctor.svg";
import User from "../../static/img/User.svg";

export default function Details() {
  return (
    <>
      {/* First Detail page  */}

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          ml: 4,
          mr: 4,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            minWidth: { md: 350 },
          }}
        >
          <Box component="h1" sx={{ fontSize: 36, mt: 1 }}>
            Choose A Perfect
          </Box>
          <Box
            component="h1"
            sx={{
              color: "primary.main",
              fontSize: 38,
              fontWeight: 900,
              mt: -3,
            }}
          >
            Consultrator
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "30px",
              width: "80%",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
              borderRadius: "5px",
              color: "primary.main",
              fontWeight: "medium",
              display: "flex",
              fontSize: 12,
              alignItems: "center",
              "& svg": {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            <ErrorOutlineIcon />
            CONFIDENCE SCORE 85%
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            height: 403,
            width: 400,
          }}
          alt="The house from the offer."
          src={doctor}
        />
      </Box>

      {/* Second Detail page */}

      <Box
        sx={{
          display: "flex",
          ml: 4,
          mr: 4,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
              <Box
        component="img"
        sx={{
          height: 403,
          width: 400,
        }}
        alt="The house from the offer."
        src={User}
      />
        <Box
          sx={{
            display: "flex",
            ml:8,
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            minWidth: { md: 350 },
          }}
        >
          <Box component="h1" sx={{ fontSize: 36, mt: 1 }}>
            Choose A Perfect
          </Box>
          <Box
            component="h1"
            sx={{
              color: "primary.main",
              fontSize: 38,
              fontWeight: 900,
              mt: -3,
            }}
          >
            Consultrator
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "30px",
              width: "100%",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
              borderRadius: "5px",
              color: "primary.main",
              fontWeight: "medium",
              display: "flex",
              fontSize: 12,
              alignItems: "center",
              "& svg": {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            <ErrorOutlineIcon />
            CONFIDENCE SCORE 85%
          </Box>
        </Box>
      </Box>
    </>
  );
}
