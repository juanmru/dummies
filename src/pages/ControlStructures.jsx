import { useState } from 'react'
import '../styles/ControlStructures.css'

function ControlStructures({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('if')

  return (
    <div className="control-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">🔀</div>
        <h1>Estructuras de Control</h1>
        <p>Controla qué código se ejecuta según las condiciones</p>
      </header>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'concept' ? 'active' : ''}`}
          onClick={() => setActiveTab('concept')}
        >
          Concepto
        </button>
        <button 
          className={`tab ${activeTab === 'types' ? 'active' : ''}`}
          onClick={() => setActiveTab('types')}
        >
          Tipos
        </button>
        <button 
          className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
          onClick={() => setActiveTab('examples')}
        >
          Ejemplos
        </button>
      </div>

      <div className="content">
        {activeTab === 'concept' && (
          <section className="concept-section">
            <h2>¿Qué son las Estructuras de Control?</h2>
            <div className="card-info">
              <p>
                Las <strong>estructuras de control</strong> permiten que tu código tome decisiones.
                Ejecutan diferentes código según si una condición es verdadera o falsa.
              </p>
            </div>

            <h2>¿Por qué las necesitas?</h2>
            <ul className="info-list">
              <li>🎯 <strong>Tomar decisiones</strong>: Si la edad es mayor a 18, mostrar un contenido</li>
              <li>✔️ <strong>Validar datos</strong>: Comprobar si un usuario completó un formulario</li>
              <li>🔄 <strong>Elegir caminos</strong>: Diferentes acciones según qué opción elige el usuario</li>
              <li>⚡ <strong>Hacer código inteligente</strong>: Reaccionar a diferentes situaciones</li>
            </ul>

            <h2>Flujo de Ejecución</h2>
            <div className="flow-diagram">
              <div className="flow-box">
                <div className="flow-item">Pregunta:</div>
                <div className="flow-question">¿Condición es true?</div>
              </div>
              <div className="flow-arrow">↙ Sí ↘</div>
              <div className="flow-options">
                <div className="flow-true">Ejecuta código A</div>
                <div className="flow-false">Ejecuta código B</div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'types' && (
          <section className="types-section">
            <h2>Tipos de Estructuras de Control</h2>
            
            <div className="structure-type">
              <h3>1️⃣ if (si)</h3>
              <p>Ejecuta código solo si la condición es verdadera</p>
              <div className="code-example">
                <pre><code>{`const edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}`}</code></pre>
              </div>
            </div>

            <div className="structure-type">
              <h3>2️⃣ if-else (si-sino)</h3>
              <p>Ejecuta un código si es true, otro si es false</p>
              <div className="code-example">
                <pre><code>{`const puntuacion = 50;

if (puntuacion >= 60) {
  console.log("Aprobado ✓");
} else {
  console.log("Suspendido ✗");
}`}</code></pre>
              </div>
            </div>

            <div className="structure-type">
              <h3>3️⃣ else if (si no, si)</h3>
              <p>Múltiples condiciones en cadena</p>
              <div className="code-example">
                <pre><code>{`const nota = 75;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Muy bien");
} else if (nota >= 60) {
  console.log("Bien");
} else {
  console.log("Suspendido");
}`}</code></pre>
              </div>
            </div>

            <div className="structure-type">
              <h3>4️⃣ switch (seleccionar)</h3>
              <p>Elige una opción de múltiples valores</p>
              <div className="code-example">
                <pre><code>{`const dia = 3;

switch(dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}`}</code></pre>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplos Prácticos</h2>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${codeExample === 'if' ? 'active' : ''}`}
                onClick={() => setCodeExample('if')}
              >
                If-Else
              </button>
              <button 
                className={`code-tab ${codeExample === 'switch' ? 'active' : ''}`}
                onClick={() => setCodeExample('switch')}
              >
                Switch
              </button>
              <button 
                className={`code-tab ${codeExample === 'practico' ? 'active' : ''}`}
                onClick={() => setCodeExample('practico')}
              >
                Caso Real
              </button>
            </div>

            {codeExample === 'if' && (
              <div className="code-example">
                <pre><code>{`// 🎮 Sistema de niveles
const puntos = 250;

if (puntos >= 500) {
  console.log("Nivel: Experto");
} else if (puntos >= 300) {
  console.log("Nivel: Avanzado");
} else if (puntos >= 100) {
  console.log("Nivel: Intermedio");
} else {
  console.log("Nivel: Principiante");
}

// 📱 Validar contraseña
const contrasena = "abc123xyz";

if (contrasena.length < 8) {
  console.log("❌ Contraseña muy corta");
} else if (contrasena.length > 20) {
  console.log("⚠️ Contraseña muy larga");
} else {
  console.log("✓ Contraseña válida");
}`}</code></pre>
              </div>
            )}

            {codeExample === 'switch' && (
              <div className="code-example">
                <pre><code>{`// 🌤️ Recomendación según clima
const clima = "lluvia";

switch(clima) {
  case "soleado":
    console.log("🌞 Lleva gafas de sol");
    break;
  case "nublado":
    console.log("☁️ Buen día para salir");
    break;
  case "lluvia":
    console.log("🌧️ Lleva paraguas");
    break;
  case "nieve":
    console.log("❄️ Abrigo y botas");
    break;
  default:
    console.log("Clima desconocido");
}

// 🎯 Categorizar producto
const tipo = "electronica";

switch(tipo) {
  case "ropa":
    console.log("Descuento: 15%");
    break;
  case "electronica":
    console.log("Descuento: 10%");
    break;
  case "libros":
    console.log("Descuento: 5%");
    break;
}`}</code></pre>
              </div>
            )}

            {codeExample === 'practico' && (
              <div className="code-example">
                <pre><code>{`// 💳 Sistema de aprobación de crédito
const sueldo = 2000;
const deudas = 500;
const aniosEmpleado = 3;

const capacidadPago = sueldo - deudas;
const esEstable = aniosEmpleado >= 2;

if (capacidadPago < 400) {
  console.log("❌ Crédito denegado: capacidad de pago insuficiente");
} else if (!esEstable) {
  console.log("❌ Crédito denegado: antigüedad insuficiente");
} else if (capacidadPago >= 1000) {
  console.log("✓✓ Crédito aprobado: PREMIUM (€5000)");
} else if (capacidadPago >= 500) {
  console.log("✓ Crédito aprobado: ESTÁNDAR (€2000)");
} else {
  console.log("⚠️ Crédito aprobado: BÁSICO (€1000)");
}`}</code></pre>
              </div>
            )}

            <div className="analysis-cards">
              <div className="analysis-card">
                <h4>⚠️ break en switch</h4>
                <p>
                  No olvides <strong>break</strong> en cada case, 
                  sino ejecutará todos los siguientes.
                </p>
              </div>
              <div className="analysis-card">
                <h4>💡 if vs switch</h4>
                <p>
                  Usa <strong>if</strong> para rangos/comparaciones.
                  Usa <strong>switch</strong> para valores específicos.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="lesson-summary">
          <h3>📌 Lo más importante</h3>
          <div className="summary-box">
            <p>
              Las <strong>estructuras de control</strong> hacen que tu código tome decisiones.
            </p>
            <ul>
              <li><strong>if:</strong> Ejecuta código si algo es verdadero</li>
              <li><strong>if-else:</strong> Una opción u otra</li>
              <li><strong>else if:</strong> Múltiples opciones encadenadas</li>
              <li><strong>switch:</strong> Elegir entre valores específicos</li>
              <li><strong>Siempre recuerda break en switch</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlStructures
