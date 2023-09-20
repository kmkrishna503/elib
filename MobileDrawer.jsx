/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
const options = [{
    icon : <DashboardIcon/>,
    name : "DashBoard"
},{
    icon : <SearchIcon/>,
    name : "Surf e-books"
},{
    icon : <HourglassTopIcon/>,
    name : "Take Quiz"
}]
export default function MobileDrawer({ open, handleOpen }) {
  const list = () => (
    <Box className="w-1/2">
      <List>
        {options.map((option, index) => (
          <ListItem key={option.name}  onClick={handleOpen}>
            <ListItemButton>
              {option.icon}
              <ListItemText primary={option.name} className="ml-5"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div className="bg-red-500">
        {console.log("Drawer")}
      <Drawer anchor={"left"} open={open} onClose={handleOpen}>
        {list()}
      </Drawer>
    </div>
  );
}
