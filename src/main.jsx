import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";


// 1. Tema base
let theme = createTheme({
  palette: {
    mode: "dark", // podés cambiar a "light" si preferís
    primary: {
      main: "#7B2CBF", // Violeta fuerte
    },
    secondary: {
      main: "#4361EE", // Azul eléctrico
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1e1e2f",   // Fondo de tarjetas
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// 2. Extensión del tema
theme = createTheme(theme, {
  palette: {
    info: {
      main: "#4CC9F0", // celeste vibrante
    },
    warning: {
      main: "#F72585", // rosa eléctrico
    },
    success: {
      main: "#80ed99", // verde lima
    },
    error: {
      main: "#ef476f", // rojo cereza
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
