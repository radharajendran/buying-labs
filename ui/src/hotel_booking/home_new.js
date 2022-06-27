import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../images/homeBg.jpg";
import mobileLogo from "../images/mobileWhiteLogo.png";
import logo from "../images/airbnb.png";
import SearchIcon from "@mui/icons-material/Search";
import { ConnectButton } from "web3uikit";
import SearchBar from "./SearchBar";


import {
  Box,
  InputBase,
  TextField,
  Typography,
  useMediaQuery,
  IconButton,
  Button
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Home = ({ onLoad, onPlaceChanged }) => {
  let isMedium = useMediaQuery("(max-width:900px)");
  let isMobile = useMediaQuery("(max-width:750px)");

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [checkOut, setCheckOut] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [guests, setGuests] = useState(2);


  const navigate = useNavigate();

  const navigateList = () => {
     navigate(`/hotels/list`, {replace: true});
  };


  const styles = {
    searchFields: {
      backgroundColor: "white",
      height: "65px",
      borderRadius: "100rem",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingLeft: "30px",
      width: "45rem",

      ...(isMedium && {
        position: "absolute",
        top: "15rem",

        width: "80vw",
      }),
      ...(isMobile && {
        position: "absolute",
        top: "10rem",
        p: 1,
        width: "70vw",
        flexDirection: "column",
        height: "45vh",
        borderRadius: "1rem",
      }),
    },
    inputs: {
      fontSize: "12px",
      fontWeight: "bold",
      mt: "10px",
      width: "10rem",
      ...(isMobile && {
        width: "80%",
      }),
    },

    vl: {
      position: "relative",
      top: "15",
      height: "20%",
      backgroundColor: "rgb(228, 228, 228)",
      width: "1.5px",
      marginRight: "20px",
      paddingBottom: "15px",
    },
    hl: {
      position: "relative",
      top: "20px",

      backgroundColor: "rgb(228, 228, 228)",
      width: "100%",
      mt: "-2rem",
      mb: "1rem",
      paddingBottom: "1px",
    },
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "2rem",
          ...(isMedium && {
            p: "1rem",
          }),
        }}
      >
        <Box>
          <img
            style={{ width: "8vw", marginRight: "3rem" }}
            src={isMedium ? mobileLogo : logo}
            alt="logo"
          />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box sx={styles.searchFields}>
          <Box
            style={{
              marginTop: "-5px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              ...(isMobile && {
                width: "80%",
              }),
            }}
          >
            <Box sx={styles.inputs}>
             <div>
               <SearchBar />
             </div>
            </Box>
          </Box>
          <Box sx={isMobile ? styles.hl : styles.vl} />

          <Box sx={styles.inputs}>
            Check In
            <TextField
              variant="standard"
              type="date"
              fullWidth
              InputProps={{ disableUnderline: true }}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
              value={checkIn}
            />
          </Box>
          <Box sx={isMobile ? styles.hl : styles.vl} />
          <Box sx={styles.inputs}>
            Check Out
            <TextField
              id="outlined-basic"
              type="date"
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true }}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              value={checkOut}
            />
          </Box>

          <Box sx={isMobile ? styles.hl : styles.vl} />
          <Box sx={styles.inputs}>
            Guests
            {isMobile && <br />}
            <InputBase
              defaultValue={2}
              type="number"
              fullWidth
              inputProps={{ min: 1 }}
              onChange={(e) => setGuests(e.target.value)}
            />
          </Box>
          <Box>
            <Button onClick={(e) => navigateList(e.target.value)}  variant="contained">Search</Button>
          </Box>         
        </Box>
      </Box>    
    </Box>
  );
};

export default Home;