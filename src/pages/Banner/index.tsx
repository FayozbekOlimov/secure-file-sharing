import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GlobalContainer from "../../components/GlobalContainer";

const Banner = () => {
  return (
    // <Box
    //   display={"flex"}
    //   justifyContent={"center"}
    //   alignItems={"center"}
    //   minHeight={"100vh"}
    //   gap={2}
    // >
    <GlobalContainer maxWidth="lg">
      <img
        src="/bg.png"
        alt="banner"
        style={{
          width: "100%",
        }}
      />
      <Button size="small" component={Link} to="/login">
        Login
      </Button>{" "}
      <Button size="small" component={Link} to="/signup">
        Sign up
      </Button>
    </GlobalContainer>
  );
};

export default Banner;
