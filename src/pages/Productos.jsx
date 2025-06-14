import Tarjeta from "../components/Tarjeta";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const resp = await fetch("/public/data/productos.json");
        const data = await resp.json();
        setProductos(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salio mallll!!!!",
        });
        setError("No se pudieron cargar los productos");
      }
    };
    fetchProductos();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />

      {error && <p>{error}</p>}
      {/* llenar grilla de tarjetas y tarjetas de info */}
      <Grid container spacing={10}>
        {productos.map((item, indice) => {
          return (
            <Grid item key={indice} xs={12} sm={6} md={4}>
              {" "}
              <Tarjeta producto={item} />{" "}
            </Grid>
          );
        })}
      </Grid>

      <br />
      <br />
      <br />
    </>
  );
};

export default Productos;
