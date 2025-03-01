// src/components/ListaHorarios.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ListaHorarios = ({ horariosDisponibles, reservarCita }) => {
  return (
    <div>
      <h2>Disponibilidad de Horarios</h2>
      {horariosDisponibles.map((horario, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{horario.consultorio}</Card.Title>
            <Card.Text>{horario.fecha} - {horario.hora}</Card.Text>
            <Button variant="primary" onClick={() => reservarCita(horario)}>
              Reservar Cita
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaHorarios;
