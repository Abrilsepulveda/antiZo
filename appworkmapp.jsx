import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    nombrePuesto: '',
    horarios: '',
    requisitos: '',
    salarioMinimo: '',
    rangoEtario: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, maybe send data to a server
    console.log(form);
  };

  return (
    <div className="App">
      <div className="form-container">
        <img src="logo.png" alt="WorkMap Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre del puesto</label>
            <input type="text" name="nombrePuesto" value={form.nombrePuesto} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Horarios</label>
            <input type="text" name="horarios" value={form.horarios} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Requisitos</label>
            <input type="text" name="requisitos" value={form.requisitos} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Salario mínimo</label>
            <input type="number" name="salarioMinimo" value={form.salarioMinimo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Rango Etario</label>
            <input type="text" name="rangoEtario" value={form.rangoEtario} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
