import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <Typography as="h1" className="font-bold text-2xl">
        Welcome to E-Library
      </Typography>
      <div className="flex gap-4">
        <Link to={"/register"}>
          <Button variant="contained" className="rounded-md">
            Register
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="contained" className="rounded-md">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
