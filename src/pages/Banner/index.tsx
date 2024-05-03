import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
      gap={2}
    >
      <Button size="small" component={Link} to="/login">
        Login
      </Button>{" "}
      <Button size="small" component={Link} to="/signup">
        Sign up
      </Button>
    </Box>
  );
};

export default Banner;
