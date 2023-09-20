import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";

function Navbar() {
	const [open,setOpen] = useState(false);
	const handleOpen = () => setOpen(!open)
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <div className="flex items-center gap-2">
						<MenuIcon className="cursor-pointer lg:hidden" fontSize="medium" onClick={handleOpen}/>
            <AdbIcon />
            <Typography className="font-bold text-lg tracking-wider">
              E-LIBRARY
            </Typography>
          </div>
          <div className="flex justify-between items-center gap-5">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Link to={"/profile"}>
              <Tooltip title="Open profile">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </Toolbar>
      </Container>
			<MobileDrawer open={open} handleOpen={handleOpen}/>
    </AppBar>
  );
}
export default Navbar;
