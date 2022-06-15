import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CalculateIcon from '@mui/icons-material/Calculate';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SummarizeIcon from '@mui/icons-material/Summarize';
import GroupIcon from '@mui/icons-material/Group';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Metrix
          </Typography>
        </Toolbar>
        <Toolbar />
        <Divider />
        <List>          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoAwesomeMosaicIcon />
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItemButton>
            </ListItem>
        </List>
        <List>          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary={'PEF Calculator'} />
              </ListItemButton>
            </ListItem>
        </List>
        <List>          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary={'ESG Assessment'} />
              </ListItemButton>
            </ListItem>
        </List>
        <List>          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary={'Reports'} />
              </ListItemButton>
            </ListItem>
        </List>
        <List>          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary={'Accounts'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Button>Upgrade Plan</Button>
        <Button>
            <LogoutIcon/>
            Logout
        </Button>
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}