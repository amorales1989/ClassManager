import React from "react";
import "./home.css";

function HomeClient() {
  const icons = [
    "💲", // Estado de cuenta
    "📅", // Eventos
    "📄", // Documentos
    "💬", // Comunicaciones
    "📝", // Calificaciones
    "📊", // Asistencias
    "👤", // Mi cuenta
    "💰"  // Pagos
  ];

  const names = [
    "Estado de cuenta",
    "Eventos",
    "Documentos",
    "Mensajes",
    "Calificaciones",
    "Asistencias",
    "Mi cuenta",
    "Pagos"
  ];

  return (
    <div>
      {/* <h1>Class-Manager</h1> */}
      <div className="container">
        {icons.map((icon, index) => (
          <div className="card" key={index}>
            <div className="icon">{icon}</div>
            <p className="card-name">{names[index]}</p>
          </div>
        ))}
        <div className="card balance-card">
          <div className="balance-content">
            <p className="balance-title">A pagar:</p>
            <p className="balance-date">Vto: 10/08</p>           
          </div>
          <div className="balance-content">          
            <p className="balance-amount">$130.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClient;
