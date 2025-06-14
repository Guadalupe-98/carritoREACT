import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";


const NavListDrawer = ({navArrayLinks}) => {
 
  
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {/* recorre lista de links */}
          {navArrayLinks.map((item) => (
            <ListItem
              key={item.title}
              disablePadding //sacar padding del boton
              sx={{
                transition: "0,2s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <ListItemButton component={NavLink} to={item.path}>
                <ListItemIcon sx={{ color: "#e8d7a9" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title}  sx={{ color: "#e8d7a9" }} />
              </ListItemButton>
            </ListItem>
          ))}

        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
