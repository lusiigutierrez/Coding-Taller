
export enum EstadoCita {
  Pendiente = "Pendiente",
  Aceptada = "Aceptada",
  Rechazada = "Rechazada",
  Reprogramada="Reprogramada",
}


export type Citas = {
  id: string;
  nombre: string;
  apellidos: string;
  fecha: string;
  hora: string;
  tlf: number;
  correo: string;
  modelCar: string;
  motivo: string;
  estado: EstadoCita; 
};

// Tipo para Cliente
export type Cliente = {
  id: string;
  user: string;
  nombre: string;
  apellidos: string;
  tlf: number;
  correo: string;
  password: string;
};


export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
};