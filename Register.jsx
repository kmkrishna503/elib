import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen border border-black">
      <div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md rounded-lg shadow-md bg-primary ">
        <form className="flex flex-col gap-6 ">
          <Typography as="h1" className="font-bold text-2xl text-center">
            Sign Up
          </Typography>
          <TextField label="email" type="email" variant="outlined" />
          <TextField label="password" type="password" variant="outlined" />
          <TextField
            label="confirm Password"
            type="password"
            variant="outlined"
          />
          <Button type="submit" variant="contained" className="p-2">
            Register
          </Button>
          <Typography>Already have a account ? <span className="text-orange-500 font-bold text-lg"><Link to={"/login"}>Login</Link></span></Typography>
        </form>
      </div>
    </div>
  );
};

export default Register;
