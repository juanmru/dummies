import { useState } from 'react'
import '../styles/Loops.css'

function Loops({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('for')

  return (
    <div className="loops-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">🔄</div>
        <h1>Bucles</h1>
        <p>Repite código automáticamente sin escribirlo muchas veces</p>
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
            <h2>¿Qué es un Bucle?</h2>
            <div className="card-info">
              <p>
                Un <strong>bucle</strong> es código que se repite automáticamente.
                Te permite ejecutar el mismo código múltiples veces sin repetir el código.
              </p>
            </div>

            <h2>¿Por qué necesitas bucles?</h2>
            <ul className="info-list">
              <li>🔄 <strong>Repetir acciones</strong>: Sin escribir código múltiples veces</li>
              <li>📊 <strong>Procesar listas</strong>: Hacer algo con cada elemento de un array</li>
              <li>⏱️ <strong>Ejecutar mientras</strong>: Hacer algo hasta que se cumpla una condición</li>
              <li>⚡ <strong>Código DRY</strong>: Don't Repeat Yourself - no repitas código</li>
            </ul>

            <h2>Analogía en la vida real</h2>
            <div className="analogy-box">
              <p>
                Imagina que necesitas saludar a 5 amigos. 
                Sin bucles escribirías el saludo 5 veces. 
                Con un bucle, escribes el saludo UNA VEZ y le dices: "repítelo 5 veces".
              </p>
            </div>
          </section>
        )}

        {activeTab === 'types' && (
          <section className="types-section">
            <h2>Tipos de Bucles</h2>
            
            <div className="loop-type">
              <h3>1️⃣ for (para)</h3>
              <p>Repite un número específico de veces</p>
              <div className="code-example">
                <pre><code>{`// Sintaxis: for (inicio; condición; incremento)
for (let i = 0; i < 5; i++) {
  console.log("Vuelta " + (i + 1));
}

// Resultado:
// Vuelta 1
// Vuelta 2
// Vuelta 3
// Vuelta 4
// Vuelta 5`}</code></pre>
              </div>
            </div>

            <div className="loop-type">
              <h3>2️⃣ while (mientras)</h3>
              <p>Repite MIENTRAS una condición sea true</p>
              <div className="code-example">
                <pre><code>{`let contador = 0;

while (contador < 3) {
  console.log("Contador: " + contador);
  contador++; // IMPORTANTE: cambia la condición
}

// Resultado:
// Contador: 0
// Contador: 1
// Contador: 2`}</code></pre>
              </div>
            </div>

            <div className="loop-type">
              <h3>3️⃣ do-while (hacer-mientras)</h3>
              <p>Ejecuta el código una vez, luego repite MIENTRAS sea true</p>
              <div className="code-example">
                <pre><code>{`let numero = 0;

do {
  console.log("Número: " + numero);
  numero++;
} while (numero < 3);

// Se ejecuta al menos una vez`}</code></pre>
              </div>
            </div>

            <div className="loop-type">
              <h3>4️⃣ for...of (para...de)</h3>
              <p>Itera sobre los valores de un array</p>
              <div className="code-example">
                <pre><code>{`const frutas = ["manzana", "plátano", "naranja"];

for (const fruta of frutas) {
  console.log(fruta);
}

// Resultado:
// manzana
// plátano
// naranja`}</code></pre>
              </div>
            </div>

            <div className="loop-type">
              <h3>5️⃣ forEach (para cada)</h3>
              <p>Método de array que ejecuta una función para cada elemento</p>
              <div className="code-example">
                <pre><code>{`const numeros = [1, 2, 3];

numeros.forEach(function(numero) {
  console.log(numero * 2);
});

// O con arrow function:
numeros.forEach(numero => console.log(numero * 2));

// Resultado: 2, 4, 6`}</code></pre>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplos Prácticos</h2>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${codeExample === 'for' ? 'active' : ''}`}
                onClick={() => setCodeExample('for')}
              >
                For
              </button>
              <button 
                className={`code-tab ${codeExample === 'foreach' ? 'active' : ''}`}
                onClick={() => setCodeExample('foreach')}
              >
                ForEach
              </button>
              <button 
                className={`code-tab ${codeExample === 'practico' ? 'active' : ''}`}
                onClick={() => setCodeExample('practico')}
              >
                Caso Real
              </button>
            </div>

            {codeExample === 'for' && (
              <div className="code-example">
                <pre><code>{`// 📊 Tabla de multiplicar del 5
console.log("Tabla del 5:");
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// ⭐ Generar estrellas
let estrellas = "";
for (let i = 0; i < 5; i++) {
  estrellas += "⭐";
}
console.log(estrellas); // ⭐⭐⭐⭐⭐

// 🔢 Contar hacia atrás
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// 5, 4, 3, 2, 1`}</code></pre>
              </div>
            )}

            {codeExample === 'foreach' && (
              <div className="code-example">
                <pre><code>{`// 📚 Lista de estudiantes
const estudiantes = ["Ana", "Carlos", "María"];

estudiantes.forEach((nombre, indice) => {
  console.log((indice + 1) + ". " + nombre);
});

// Resultado:
// 1. Ana
// 2. Carlos
// 3. María

// 🛒 Calcular total de carrito
const precios = [10, 20, 15, 30];
let total = 0;

precios.forEach(precio => {
  total += precio;
});

console.log("Total: €" + total); // Total: €75`}</code></pre>
              </div>
            )}

            {codeExample === 'practico' && (
              <div className="code-example">
                <pre><code>{`// 🎯 Validar calificaciones
const calificaciones = [85, 92, 78, 88, 95];
let aprobados = 0;
let suspendidos = 0;

calificaciones.forEach(nota => {
  if (nota >= 60) {
    aprobados++;
  } else {
    suspendidos++;
  }
});

console.log("Aprobados: " + aprobados);
console.log("Suspendidos: " + suspendidos);

// 🏪 Procesar pedidos
const pedidos = [
  { producto: "Laptop", precio: 800, cantidad: 2 },
  { producto: "Mouse", precio: 25, cantidad: 5 },
  { producto: "Teclado", precio: 75, cantidad: 1 }
];

pedidos.forEach(pedido => {
  const subtotal = pedido.precio * pedido.cantidad;
  console.log(pedido.producto + ": €" + subtotal);
});`}</code></pre>
              </div>
            )}

            <div className="analysis-cards">
              <div className="analysis-card">
                <h4>⚠️ Bucles Infinitos</h4>
                <p>
                  Si olvidas incrementar la variable en while, 
                  el bucle NUNCA terminará.
                </p>
              </div>
              <div className="analysis-card">
                <h4>💡 Elige el bucle correcto</h4>
                <p>
                  for: número fijo de repeticiones.
                  forEach: trabajar con arrays.
                  while: condición desconocida.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="lesson-summary">
          <h3>📌 Lo más importante</h3>
          <div className="summary-box">
            <p>
              Los <strong>bucles</strong> repiten código automáticamente.
            </p>
            <ul>
              <li><strong>for:</strong> Repite N veces (cuando sabes el número)</li>
              <li><strong>while:</strong> Repite mientras condición sea true</li>
              <li><strong>forEach:</strong> Itera sobre cada elemento de un array</li>
              <li><strong>Importante:</strong> Evita bucles infinitos</li>
              <li><strong>break:</strong> Sale del bucle; <strong>continue:</strong> Salta a la siguiente vuelta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loops
