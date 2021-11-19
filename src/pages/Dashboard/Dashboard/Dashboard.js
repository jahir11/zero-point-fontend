import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import useAuth from '../../../hooks/useAuth';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-center">
      <Toolbar />
      <Link to={`/`}><Button color="inherit">Home</Button></Link>
      <br />
      <Link to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
      <Link to={`${url}/addReview`}><Button color="inherit">Create Review</Button></Link>
      <Link to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
      <br />
      {
        admin && <Box>
          <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
      <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
        </Box>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/myOrders`}>
          <MyOrders/>
        </Route>
        <Route path={`${path}/addReview`}>
          <AddReview/>
        </Route>
        <Route path={`${path}/payment`}>
          <Pay/>
        </Route>
        <Route path={`${path}/manageAllOrders`}>
          <ManageAllOrder/>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </Route>
        <Route path={`${path}/addProduct`}>
          <AddProduct/>
        </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
