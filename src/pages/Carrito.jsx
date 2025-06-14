import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteForever } from "@mui/icons-material";
import { Button, TextField, Box } from "@mui/material";
import Swal from "sweetalert2";

const Carrito = () => {
  const { carrito, removerDelCarrito } = useCarrito();

  let cuenta = 0;
  const cuentaTotal = () => {
    carrito.forEach((element) => {
      cuenta += element.precio * element.cantidad;
    });
  };
  cuentaTotal();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
  });

  // Manejo cambio inputs
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Confirmar compra: validar y mostrar Swal
  const handleConfirmar = () => {
    const { nombre, apellido, direccion } = formData;
    if (!nombre || !apellido || !direccion) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos",
        text: "Por favor completá todos los campos.",
      });
      return;
    }
    if (carrito.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Carrito vacío",
        text: "Agregá productos al carrito antes de confirmar.",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Compra Confirmada",
      html: `
        <p>Gracias, <b>${nombre} ${apellido}</b>!</p>
        <p>Dirección: ${direccion}</p>
        <p>Total a pagar: <b>$${cuenta.toFixed(2)}</b></p>
      `,
    });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Articulo</TableCell>
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Modelo</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {carrito.map((row, indice) => (
              <TableRow
                key={row.modelo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tipo}
                </TableCell>
                <TableCell align="right">{row.marca}</TableCell>
                <TableCell align="right">{row.modelo}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>
                <TableCell align="right">{row.precio}</TableCell>
                <TableCell align="right">
                  <Button
                    startIcon={<DeleteForever />}
                    onClick={() => removerDelCarrito(indice)}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">
                <b>Total</b>
              </TableCell>
              <TableCell align="right">
                <b>${cuenta.toFixed(2)}</b>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Formulario */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          multiline
          rows={2}
          required
        />
        <Button variant="contained" onClick={handleConfirmar}>
          Confirmar Compra
        </Button>
      </Box>
    </>
  );
};

export default Carrito;
