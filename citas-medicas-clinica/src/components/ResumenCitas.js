// src/components/ResumenCitas.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ResumenCitas = ({ citas, cancelarCita }) => {
  return (
    <div>
      <h2>Citas Agendadas</h2>
      <ListGroup>
        {citas.map((cita, index) => (
          <ListGroup.Item key={index}>
            <div>
              <strong>{cita.fecha} - {cita.hora}</strong>
              <div>Especialidad: {cita.especialidad}</div>
              <Button variant="danger" onClick={() => cancelarCita(cita)}>
                Cancelar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ResumenCitas;
