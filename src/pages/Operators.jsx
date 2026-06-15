import { useState } from 'react'
import '../styles/Operators.css'

function Operators({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('aritmeticos')

  return (
    <div className="operators-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">➕</div>
        <h1>Operadores</h1>
        <p>Aprende a hacer operaciones y comparaciones con datos</p>
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
          Tipos de Operadores
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
            <h2>¿Qué son los Operadores?</h2>
            <div className="card-info">
              <p>
                Los <strong>operadores</strong> son símbolos que realizan acciones sobre variables y valores.
                Son las herramientas para hacer cálculos, comparaciones y operaciones lógicas.
              </p>
            </div>

            <h2>Categorías Principales</h2>
            <ul className="info-list">
              <li>➕ <strong>Aritméticos</strong>: Hacer cálculos matemáticos</li>
              <li>🔀 <strong>Comparación</strong>: Comparar valores</li>
              <li>🧠 <strong>Lógicos</strong>: Combinar condiciones</li>
              <li>📝 <strong>Asignación</strong>: Guardar valores en variables</li>
              <li>🔗 <strong>Concatenación</strong>: Unir textos</li>
            </ul>

            <h2>Operadores más comunes</h2>
            <div className="operators-grid">
              <div className="operator-card">
                <h4>+</h4>
                <p>Suma o concatenación</p>
              </div>
              <div className="operator-card">
                <h4>-</h4>
                <p>Resta</p>
              </div>
              <div className="operator-card">
                <h4>*</h4>
                <p>Multiplicación</p>
              </div>
              <div className="operator-card">
                <h4>/</h4>
                <p>División</p>
              </div>
              <div className="operator-card">
                <h4>%</h4>
                <p>Módulo (resto)</p>
              </div>
              <div className="operator-card">
                <h4>==</h4>
                <p>Igualdad</p>
              </div>
              <div className="operator-card">
                <h4>===</h4>
                <p>Igualdad estricta</p>
              </div>
              <div className="operator-card">
                <h4>!=</h4>
                <p>Desigualdad</p>
              </div>
              <div className="operator-card">
                <h4>&lt;</h4>
                <p>Menor que</p>
              </div>
              <div className="operator-card">
                <h4>&gt;</h4>
                <p>Mayor que</p>
              </div>
              <div className="operator-card">
                <h4>&amp;&amp;</h4>
                <p>AND (y)</p>
              </div>
              <div className="operator-card">
                <h4>||</h4>
                <p>OR (o)</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'types' && (
          <section className="types-section">
            <h2>Tipos de Operadores Detallados</h2>
            
            <div className="operator-type">
              <h3>1️⃣ Operadores Aritméticos</h3>
              <p>Realizan cálculos matemáticos con números</p>
              <div className="code-example">
                <pre><code>{`let a = 10;
let b = 3;

console.log(a + b);    // 13 (suma)
console.log(a - b);    // 7 (resta)
console.log(a * b);    // 30 (multiplicación)
console.log(a / b);    // 3.33... (división)
console.log(a % b);    // 1 (módulo/resto)
console.log(a ** b);   // 1000 (potencia)`}</code></pre>
              </div>
            </div>

            <div className="operator-type">
              <h3>2️⃣ Operadores de Comparación</h3>
              <p>Comparan valores y devuelven true o false</p>
              <div className="code-example">
                <pre><code>{`let x = 5;
let y = 10;

console.log(x == y);   // false
console.log(x < y);    // true
console.log(x > y);    // false
console.log(x <= y);   // true
console.log(x >= y);   // false
console.log(x !== y);  // true`}</code></pre>
              </div>
            </div>

            <div className="operator-type">
              <h3>3️⃣ Operadores Lógicos</h3>
              <p>Combinan condiciones para resultados más complejos</p>
              <div className="code-example">
                <pre><code>{`let esMayor = true;
let tieneLicencia = false;

// AND (&&) - ambas deben ser true
console.log(esMayor && tieneLicencia);  // false

// OR (||) - al menos una debe ser true
console.log(esMayor || tieneLicencia);  // true

// NOT (!) - invierte el valor
console.log(!esMayor);                  // false`}</code></pre>
              </div>
            </div>

            <div className="operator-type">
              <h3>4️⃣ Operador Ternario</h3>
              <p>Forma compacta de un if-else</p>
              <div className="code-example">
                <pre><code>{`let edad = 20;

// Sintaxis: condición ? si es true : si es false
let acceso = edad >= 18 ? "Acceso permitido" : "Acceso denegado";
console.log(acceso);  // "Acceso permitido"`}</code></pre>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplos Prácticos</h2>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${codeExample === 'aritmeticos' ? 'active' : ''}`}
                onClick={() => setCodeExample('aritmeticos')}
              >
                Aritméticos
              </button>
              <button 
                className={`code-tab ${codeExample === 'logicos' ? 'active' : ''}`}
                onClick={() => setCodeExample('logicos')}
              >
                Lógicos
              </button>
              <button 
                className={`code-tab ${codeExample === 'practico' ? 'active' : ''}`}
                onClick={() => setCodeExample('practico')}
              >
                Caso Real
              </button>
            </div>

            {codeExample === 'aritmeticos' && (
              <div className="code-example">
                <pre><code>{`// 🛒 Calcular precio con descuento
const precioOriginal = 100;
const descuento = 20;  // 20%

const cantidadDescuento = (precioOriginal * descuento) / 100;
const precioFinal = precioOriginal - cantidadDescuento;

console.log('Precio original: €' + precioOriginal);
console.log('Descuento: €' + cantidadDescuento);
console.log('Precio final: €' + precioFinal);

// 📊 Calcular promedio de notas
const nota1 = 8;
const nota2 = 9;
const nota3 = 7;
const promedio = (nota1 + nota2 + nota3) / 3;

console.log('Promedio: ' + promedio.toFixed(2));`}</code></pre>
              </div>
            )}

            {codeExample === 'logicos' && (
              <div className="code-example">
                <pre><code>{`// 🎮 Sistema de acceso a video juego
const edad = 16;
const padreConsiente = true;
const tienePase = true;

// Puede jugar si es mayor de 18 O tiene permiso del padre
const puedeJugar = (edad >= 18) || (padreConsiente && edad >= 13);
console.log('¿Puede jugar? ' + puedeJugar);  // true

// 🎫 Validar entrada a evento
const tieneBoleto = true;
const esPuntual = true;
const noEstaProhibido = true;

const puedeEntrar = tieneBoleto && esPuntual && noEstaProhibido;
console.log('¿Puede entrar? ' + puedeEntrar);  // true

// ❌ Negar una condición
const esVegano = false;
const puedeConerCarne = !esVegano;
console.log('¿Puede comer carne? ' + puedeConerCarne);  // true`}</code></pre>
              </div>
            )}

            {codeExample === 'practico' && (
              <div className="code-example">
                <pre><code>{`// 💰 Simulador de tienda
const precioProducto = 50;
const descuentoCliente = 10;  // %
const impuestos = 21;         // %

// Calcular precio con descuento
const precioConDescuento = precioProducto - (precioProducto * descuentoCliente / 100);

// Calcular precio final con impuestos
const precioFinal = precioConDescuento + (precioConDescuento * impuestos / 100);

console.log('Precio original: €' + precioProducto);
console.log('Con descuento: €' + precioConDescuento.toFixed(2));
console.log('Precio final: €' + precioFinal.toFixed(2));

// Validar compra
const dineroDisponible = 60;
const puedeComprar = dineroDisponible >= precioFinal;
console.log('¿Puede comprar? ' + puedeComprar);

// Usar ternario para mensaje
const mensaje = puedeComprar ? 'Compra realizada ✓' : 'Dinero insuficiente ✗';
console.log(mensaje);`}</code></pre>
              </div>
            )}

            <div className="analysis-cards">
              <div className="analysis-card">
                <h4>⚠️ Igualdad vs Igualdad Estricta</h4>
                <p>
                  Usa <strong>===</strong> en lugar de <strong>==</strong>. 
                  Es más seguro y evita sorpresas.
                </p>
              </div>
              <div className="analysis-card">
                <h4>💡 Orden de Operadores</h4>
                <p>
                  Los operadores tienen precedencia: multiplicación antes que suma.
                  Usa paréntesis si dudas.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="lesson-summary">
          <h3>📌 Lo más importante</h3>
          <div className="summary-box">
            <p>
              Los <strong>operadores</strong> son herramientas para hacer acciones con datos.
            </p>
            <ul>
              <li><strong>Aritméticos (+, -, *, /):</strong> Para cálculos matemáticos</li>
              <li><strong>Comparación (&lt;, &gt;, ==, ===):</strong> Comparan y devuelven true/false</li>
              <li><strong>Lógicos (&amp;&amp;, ||, !):</strong> Combinan condiciones</li>
              <li><strong>Ternario (? :):</strong> Forma corta de if-else</li>
              <li><strong>Usa === :</strong> Mejor que == para evitar errores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Operators
