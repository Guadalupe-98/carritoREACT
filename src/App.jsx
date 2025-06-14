import { Container } from "@mui/material";
import { Navbar } from "./components/navbar/Navbar";
import Carrito from "./pages/Carrito";
import { Routes, Route } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

import Productos from "./pages/Productos";
import CarritoProvider from "./context/CarritoContext";

const navArrayLinks = [
  {
    title: "Inicio",
    icon: <HomeIcon />,
    path: "/productos",
  },
  {
    title: "Carrito",
    icon: <ShoppingCartIcon />,
    path: "/carrito",
  },
];

function App() {
  return (
    <>
      <CarritoProvider>
        <Navbar navArrayLinks={navArrayLinks} />

        <Container>
          <Routes>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/" element={<Productos />} />
          </Routes>
        </Container>
      </CarritoProvider>
    </>
  );
}

export default App;
