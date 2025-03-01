// src/components/FormularioCita.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormularioCita = ({ citaSeleccionada, confirmarCita }) => {
  const [especialidad, setEspecialidad] = useState('');

  const handleConfirmar = () => {
    confirmarCita({ ...citaSeleccionada, especialidad });
  };

  return (
    <div>
      <h2>Confirmar Cita</h2>
      <Form>
        <Form.Group controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control 
            as="select" 
            value={especialidad} 
            onChange={(e) => setEspecialidad(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="General">General</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" onClick={handleConfirmar}>
          Confirmar Cita
        </Button>
      </Form>
    </div>
  );
};

export default FormularioCita;
