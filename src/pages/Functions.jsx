import { useState } from 'react'
import '../styles/Functions.css'

function Functions({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('basico')

  return (
    <div className="functions-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">⚙️</div>
        <h1>Funciones</h1>
        <p>Crea código reutilizable y organizado</p>
      </header>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'concept' ? 'active' : ''}`}
          onClick={() => setActiveTab('concept')}
        >
          Concepto
        </button>
        <button 
          className={`tab ${activeTab === 'tipos' ? 'active' : ''}`}
          onClick={() => setActiveTab('tipos')}
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
            <h2>¿Qué es una Función?</h2>
            <div className="card-info">
              <p>
                Una <strong>función</strong> es un bloque de código reutilizable que realiza una tarea específica.
                La escribes una vez y la puedes usar muchas veces.
              </p>
            </div>

            <h2>¿Por qué necesitas funciones?</h2>
            <ul className="info-list">
              <li>♻️ <strong>Reutilizar código</strong>: Escribe una vez, usa muchas veces</li>
              <li>📦 <strong>Organizar código</strong>: Dividir en tareas más pequeñas</li>
              <li>🎯 <strong>Facilitar pruebas</strong>: Probar cada función por separado</li>
              <li>🔧 <strong>Mantenimiento</strong>: Cambiar una función afecta a todos sus usos</li>
            </ul>

            <h2>Analogía: Receta de Cocina</h2>
            <div className="analogy-box">
              <p>
                Una función es como una receta:
              </p>
              <ul style={{ marginLeft: '20px' }}>
                <li><strong>Ingredientes</strong> = Parámetros</li>
                <li><strong>Instrucciones</strong> = Código dentro de la función</li>
                <li><strong>Resultado</strong> = Lo que devuelve (return)</li>
              </ul>
            </div>

            <h2>Partes de una Función</h2>
            <div className="code-example">
              <pre><code>{`function saludar(nombre) {
  //   ↑ nombre es un PARÁMETRO
  return "Hola " + nombre;
  //     ↑ return es lo que devuelve
}

saludar("Juan");
//      ↑ "Juan" es un ARGUMENTO`}</code></pre>
            </div>
          </section>
        )}

        {activeTab === 'tipos' && (
          <section className="tipos-section">
            <h2>Tipos de Funciones</h2>
            
            <div className="function-type">
              <h3>1️⃣ Función Clásica (declaration)</h3>
              <p>La forma tradicional de escribir funciones</p>
              <div className="code-example">
                <pre><code>{`function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // 8`}</code></pre>
              </div>
            </div>

            <div className="function-type">
              <h3>2️⃣ Función Anónima (expression)</h3>
              <p>Se asigna a una variable sin nombre</p>
              <div className="code-example">
                <pre><code>{`const multiplicar = function(a, b) {
  return a * b;
};

console.log(multiplicar(4, 5)); // 20`}</code></pre>
              </div>
            </div>

            <div className="function-type">
              <h3>3️⃣ Arrow Function (=&gt;)</h3>
              <p>Forma moderna y corta de escribir funciones</p>
              <div className="code-example">
                <pre><code>{`// Forma larga
const restar = (a, b) => {
  return a - b;
};

// Forma corta (si solo hay una línea)
const restar = (a, b) => a - b;

console.log(restar(10, 3)); // 7`}</code></pre>
              </div>
            </div>

            <div className="function-type">
              <h3>4️⃣ Función Sin Parámetros</h3>
              <p>No necesita entrada, solo hace su tarea</p>
              <div className="code-example">
                <pre><code>{`function saludar() {
  return "¡Hola a todos!";
}

console.log(saludar()); // ¡Hola a todos!`}</code></pre>
              </div>
            </div>

            <div className="function-type">
              <h3>5️⃣ Función Sin Return</h3>
              <p>Hace algo pero no devuelve nada</p>
              <div className="code-example">
                <pre><code>{`function mostrarMensaje(mensaje) {
  console.log(mensaje); // Hace algo pero no return
}

mostrarMensaje("Esto es un mensaje");`}</code></pre>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplos Prácticos</h2>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${codeExample === 'basico' ? 'active' : ''}`}
                onClick={() => setCodeExample('basico')}
              >
                Básico
              </button>
              <button 
                className={`code-tab ${codeExample === 'arrow' ? 'active' : ''}`}
                onClick={() => setCodeExample('arrow')}
              >
                Arrow Functions
              </button>
              <button 
                className={`code-tab ${codeExample === 'practico' ? 'active' : ''}`}
                onClick={() => setCodeExample('practico')}
              >
                Caso Real
              </button>
            </div>

            {codeExample === 'basico' && (
              <div className="code-example">
                <pre><code>{`// 🎯 Función simple
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludar("Ana"));    // Hola, Ana!
console.log(saludar("Carlos")); // Hola, Carlos!

// 🧮 Función con múltiples parámetros
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

const area = calcularAreaRectangulo(5, 3);
console.log("Área: " + area); // Área: 15

// 🔢 Función que valida
function esPositivo(numero) {
  if (numero > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPositivo(5));  // true
console.log(esPositivo(-3)); // false`}</code></pre>
              </div>
            )}

            {codeExample === 'arrow' && (
              <div className="code-example">
                <pre><code>{`// ➡️ Arrow functions simples
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

console.log(sumar(10, 5));        // 15
console.log(restar(10, 5));       // 5
console.log(multiplicar(10, 5));  // 50

// Con arrays
const numeros = [1, 2, 3, 4, 5];

// Duplicar cada número
const duplicados = numeros.map(n => n * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// Filtrar números mayores a 3
const mayores = numeros.filter(n => n > 3);
console.log(mayores); // [4, 5]

// Con condicional
const estado = (edad) => edad >= 18 ? "Mayor" : "Menor";
console.log(estado(20)); // Mayor`}</code></pre>
              </div>
            )}

            {codeExample === 'practico' && (
              <div className="code-example">
                <pre><code>{`// 💰 Calcular descuento
function aplicarDescuento(precio, porcentaje) {
  const descuento = (precio * porcentaje) / 100;
  return precio - descuento;
}

const precioFinal = aplicarDescuento(100, 20);
console.log("Precio final: €" + precioFinal); // 80

// 📊 Validar contraseña
function validarContrasena(pass) {
  if (pass.length < 8) {
    return "Muy corta";
  } else if (pass.length > 20) {
    return "Muy larga";
  } else {
    return "Válida";
  }
}

console.log(validarContrasena("abc")); // Muy corta
console.log(validarContrasena("miContrasena123")); // Válida

// 🧮 Calcular promedio
const calcularPromedio = (notas) => {
  const suma = notas.reduce((a, b) => a + b, 0);
  return suma / notas.length;
};

const miNotas = [8, 9, 7, 8];
console.log("Promedio: " + calcularPromedio(miNotas)); // 8`}</code></pre>
              </div>
            )}

            <div className="analysis-cards">
              <div className="analysis-card">
                <h4>💡 Nombres Descriptivos</h4>
                <p>
                  Llama a tus funciones con nombres que describan lo que hacen.
                  "calcularTotal" es mejor que "calc".
                </p>
              </div>
              <div className="analysis-card">
                <h4>✅ Una Función = Una Tarea</h4>
                <p>
                  Cada función debe hacer UNA cosa bien.
                  Si hace muchas cosas, divídela.
                </p>
              </div>
              <div className="analysis-card">
                <h4>📍 Arrow vs Clásico</h4>
                <p>
                  Arrow functions son modernas y concisas.
                  Úsalas la mayoría del tiempo.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="lesson-summary">
          <h3>📌 Lo más importante</h3>
          <div className="summary-box">
            <p>
              Las <strong>funciones</strong> son código reutilizable y bien organizado.
            </p>
            <ul>
              <li><strong>Función clásica:</strong> function nombre() {"{ ... }"}  </li>
              <li><strong>Arrow function:</strong> const nombre = () {"=> { ... }"}  </li>
              <li><strong>Parámetros:</strong> Variables que recibe la función</li>
              <li><strong>Return:</strong> Lo que devuelve la función</li>
              <li><strong>Reutilizar:</strong> Llámala muchas veces con diferentes valores</li>
              <li><strong>DRY:</strong> Don't Repeat Yourself - escribe una vez, usa muchas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Functions
