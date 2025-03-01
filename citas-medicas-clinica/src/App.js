import React, { useState } from 'react';
import './index.css';

function App() {
  // Definir los horarios disponibles
  const [horariosDisponibles, setHorariosDisponibles] = useState([
    { hora: '08:00 AM', disponible: true },
    { hora: '09:00 AM', disponible: true },
    { hora: '10:00 AM', disponible: true },
    { hora: '11:00 AM', disponible: true },
    { hora: '12:00 PM', disponible: true },
    { hora: '01:00 PM', disponible: true },
    { hora: '02:00 PM', disponible: true },
    { hora: '03:00 PM', disponible: true },
    { hora: '04:00 PM', disponible: true },
    { hora: '05:00 PM', disponible: true },
  ]);

  const [citaConfirmada, setCitaConfirmada] = useState(null);
  const [especialidad, setEspecialidad] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeCancelacion, setMensajeCancelacion] = useState('');

  // Función para manejar la reserva de la cita
  const reservarCita = (horaSeleccionada) => {
    if (!especialidad) {
      setMensajeError('Por favor selecciona una especialidad antes de reservar.');
      return;
    }

    const horario = horariosDisponibles.find((h) => h.hora === horaSeleccionada);

    if (horario && horario.disponible) {
      // Si el horario está disponible, lo marcamos como ocupado
      setHorariosDisponibles(
        horariosDisponibles.map((h) =>
          h.hora === horaSeleccionada ? { ...h, disponible: false } : h
        )
      );
      setCitaConfirmada({ hora: horaSeleccionada, especialidad });
      setMensajeError('');
    } else {
      setMensajeError('Este horario ya está ocupado, por favor selecciona otro.');
    }
  };

  // Función para cancelar la cita
  const cancelarCita = () => {
    if (citaConfirmada) {
      // Restauramos la disponibilidad del horario
      setHorariosDisponibles(
        horariosDisponibles.map((h) =>
          h.hora === citaConfirmada.hora ? { ...h, disponible: true } : h
        )
      );
      setCitaConfirmada(null);
      setMensajeCancelacion('La cita ha sido cancelada con éxito.');
    }
  };

  return (
    <div className="container">
      <h2>Reservar Cita Médica</h2>

      {mensajeError && <div className="alert warning">{mensajeError}</div>}
      {mensajeCancelacion && <div className="alert success">{mensajeCancelacion}</div>}

      <div className="card">
        <div className="card-header">Selecciona tu especialidad médica</div>
        <div className="card-body">
          <select
            className="form-control"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
          >
            <option value="">Selecciona una especialidad</option>
            <option value="Consulta General">Consulta General</option>
            <option value="Odontología">Odontología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Ginecología">Ginecología</option>
            <option value="Oftalmología">Oftalmología</option>
          </select>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Selecciona tu hora</div>
        <div className="card-body">
          <ul className="list-group">
            {horariosDisponibles.map((horario) => (
              <li
                key={horario.hora}
                className={`list-group-item ${!horario.disponible ? 'disabled' : ''}`}
                onClick={() => reservarCita(horario.hora)}
              >
                {horario.hora} {horario.disponible ? '' : '(Ocupado)'}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {citaConfirmada && (
        <div className="cita-confirmada">
          <div className="card">
            <div className="card-header">Cita Confirmada</div>
            <div className="card-body">
              <h5><strong>Especialidad:</strong> {citaConfirmada.especialidad}</h5>
              <p><strong>Hora:</strong> {citaConfirmada.hora}</p>
              <button className="btn-cancelar" onClick={cancelarCita}>
                Cancelar Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
