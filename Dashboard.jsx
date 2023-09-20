import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const drawerWidth = 240;

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const size = {
  width: 400,
  height: 200,
};

const rows = [
  { name: "lorem lorem lorem", points: 100 },
  { name: "lorem lorem lorem", points: 150 },
  { name: "lorem lorem lorem", points: 200 },
  { name: "lorem lorem lorem", points: 75 },
  { name: "lorem lorem lorem", points: 220 },
];

const cardData = [
  {
    title: "Total Points",
    description: "Points scored overall",
    value: "95",
  },
  {
    title: "Points scored by subscriptions",
    description: "Points earned from subscriptions",
    value: "85",
  },
  {
    title: "Progress",
    description: "Your progress towards goals",
    value: "75",
  },
];

export default function ClippedDrawer() {
  const items = [
    { text: "Dashboard", icon: <InboxIcon /> },
    { text: "Surf e-Books", icon: <BookIcon /> },
    { text: "Take Quiz", icon: <QuizIcon /> },
  ];

  return (
    <Box className="bg-gray-200" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="bg-slate-900"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            e-Library
          </Typography>

          <div className="space-x-5">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="notifications"
              onClick={() => {
                // Handle notification click here
              }}
            >
              <NotificationsIcon />
            </IconButton>

            <IconButton
              edge="end"
              color="inherit"
              aria-label="profile"
              onClick={() => {
                // Handle profile click here
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          className="bg-slate-900 text-white h-screen"
          sx={{ overflow: "auto" }}
        >
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon className="text-white">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div className="w-full p-4 ">
        <Box className=" grid grid-cols-3 gap-4 pt-16 mb-5" component="main">
          {cardData.map((data, index) => (
            <Card key={index}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {data.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {data.value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data.description}
                </Typography>

                <CircularProgress
                  variant="determinate"
                  value={parseFloat(data.value)}
                  size={80}
                  thickness={5}
                />
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <div className="flex w-full bg-gray-200 justify-center items-center">
          <Box className=" m-4 w-1/3 flex items-center justify-center flex-col bg-white">
            <Typography className="font-semibold text-xl">
              Top Subscribers by Points{" "}
            </Typography>
            {/* Table Component */}
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="flex flex-col w-2/3 space-y-5 p-8 bg-white justify-center items-center">
            <Typography className="font-semibold text-xl">
              Trend Chart
            </Typography>
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.label} (${item.value})`,
                  arcLabelMinAngle: 45,
                  data,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
              {...size}
            />
          </Box>
        </div>
      </div>
    </Box>
  );
}
