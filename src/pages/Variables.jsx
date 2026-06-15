import { useState } from 'react'
import '../styles/Variables.css'

function Variables({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('javascript')

  return (
    <div className="variables-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">📦</div>
        <h1>Variables y Tipos de Datos</h1>
        <p>Aprende a guardar y clasificar información en tu código</p>
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
          Tipos de Datos
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
            <h2>¿Qué es una Variable?</h2>
            <div className="card-info">
              <p>
                Una <strong>variable</strong> es un contenedor que guarda un valor en la memoria de tu ordenador.
                Piensa en ella como una <strong>caja etiquetada</strong> donde puedes guardar información.
              </p>
            </div>

            <h2>¿Para qué sirven?</h2>
            <ul className="info-list">
              <li>💾 <strong>Guardar datos</strong> que necesitas usar más adelante</li>
              <li>🔄 <strong>Reutilizar información</strong> sin escribirla muchas veces</li>
              <li>📝 <strong>Hacer código legible</strong> usando nombres descriptivos</li>
              <li>⚡ <strong>Cambiar valores</strong> dinámicamente durante la ejecución</li>
            </ul>

            <h2>Cómo crear una variable</h2>
            <div className="code-example">
              <pre><code>{`// Declarar e inicializar una variable
let nombre = 'Juan';
let edad = 25;
let esProgramador = true;

// Cambiar el valor después
edad = 26;
console.log(edad); // 26`}</code></pre>
            </div>

            <h2>const vs let vs var</h2>
            <div className="comparison-cards">
              <div className="comparison-card">
                <h3>const</h3>
                <p className="badge-new">Recomendado</p>
                <p>No se puede cambiar después de crearla. Mejor para datos que no cambian.</p>
                <p className="code-text">const PI = 3.14;</p>
              </div>
              <div className="comparison-card">
                <h3>let</h3>
                <p className="badge-modern">Moderno</p>
                <p>Se puede cambiar cuando quieras. Usa esto en la mayoría de casos.</p>
                <p className="code-text">let contador = 0;</p>
              </div>
              <div className="comparison-card">
                <h3>var</h3>
                <p className="badge-old">Antiguo</p>
                <p>Antigua forma. Evítalo en código nuevo.</p>
                <p className="code-text">var resultado = 10;</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'types' && (
          <section className="types-section">
            <h2>Tipos de Datos en JavaScript</h2>
            <div className="card-info">
              <p>
                JavaScript tiene diferentes tipos de datos. Cada uno sirve para guardar información diferente.
              </p>
            </div>

            <div className="types-grid">
              <div className="type-card">
                <h3>📊 Number</h3>
                <p className="description">Números enteros y decimales</p>
                <div className="code-example">
                  <pre><code>{`let edad = 25;
let precio = 19.99;
let negativo = -5;`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>📝 String</h3>
                <p className="description">Texto (entre comillas)</p>
                <div className="code-example">
                  <pre><code>{`let nombre = 'Juan';
let ciudad = "Madrid";
let mensaje = \`Hola \${nombre}\`;`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>✅ Boolean</h3>
                <p className="description">Verdadero (true) o Falso (false)</p>
                <div className="code-example">
                  <pre><code>{`let esMayor = true;
let esVacio = false;
let activo = true;`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>❌ null</h3>
                <p className="description">Valor "vacío" elegido deliberadamente</p>
                <div className="code-example">
                  <pre><code>{`let resultado = null;
let datos = null;`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>❓ undefined</h3>
                <p className="description">Variable declarada pero sin valor aún</p>
                <div className="code-example">
                  <pre><code>{`let variable;
console.log(variable);
// undefined`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>📋 Array</h3>
                <p className="description">Lista de valores (colección ordenada)</p>
                <div className="code-example">
                  <pre><code>{`let numeros = [1, 2, 3];
let frutas = ['manzana', 'plátano'];
let mixto = [1, 'texto', true];`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>🎁 Object</h3>
                <p className="description">Colección de pares clave-valor</p>
                <div className="code-example">
                  <pre><code>{`let persona = {
  nombre: 'Juan',
  edad: 25,
  activo: true
};`}</code></pre>
                </div>
              </div>

              <div className="type-card">
                <h3>⚙️ Function</h3>
                <p className="description">Código reutilizable (lo veremos más adelante)</p>
                <div className="code-example">
                  <pre><code>{`function saludar(nombre) {
  return 'Hola ' + nombre;
}`}</code></pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplos Prácticos</h2>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${codeExample === 'javascript' ? 'active' : ''}`}
                onClick={() => setCodeExample('javascript')}
              >
                JavaScript
              </button>
              <button 
                className={`code-tab ${codeExample === 'tiposdiferentes' ? 'active' : ''}`}
                onClick={() => setCodeExample('tiposdiferentes')}
              >
                Mezclar Tipos
              </button>
            </div>

            {codeExample === 'javascript' && (
              <div className="code-example">
                <pre><code>{`// 🎯 Declarar variables de diferentes tipos
const nombre = 'Ana';
const edad = 28;
const esDesarrolladora = true;

// 📊 Usar las variables
console.log('Nombre: ' + nombre);
console.log('Edad: ' + edad);
console.log('¿Es desarrolladora? ' + esDesarrolladora);

// 🔄 Cambiar valores (solo con let)
let contador = 0;
contador = contador + 1;
contador = contador + 1;
console.log('Contador: ' + contador); // 2

// 📋 Arrays de datos
const colores = ['rojo', 'azul', 'verde'];
const numeros = [10, 20, 30, 40];
console.log(colores[0]); // 'rojo'
console.log(numeros.length); // 4`}</code></pre>
              </div>
            )}

            {codeExample === 'tiposdiferentes' && (
              <div className="code-example">
                <pre><code>{`// 🎁 Objeto con múltiples tipos de datos
const usuario = {
  nombre: 'Carlos',        // String
  edad: 32,               // Number
  esActivo: true,         // Boolean
  correo: null,           // null
  telefonoPrincipal: undefined, // undefined
  habilidades: [          // Array
    'JavaScript',
    'React',
    'CSS'
  ],
  direccion: {            // Object anidado
    calle: 'Calle Principal 123',
    ciudad: 'Madrid',
    codigoPostal: 28001
  }
};

// 📊 Acceder a los datos
console.log(usuario.nombre);           // 'Carlos'
console.log(usuario.edad);             // 32
console.log(usuario.habilidades[0]);   // 'JavaScript'
console.log(usuario.direccion.ciudad); // 'Madrid'`}</code></pre>
              </div>
            )}

            <div className="analysis-cards">
              <div className="analysis-card">
                <h4>💡 Consejo Importante</h4>
                <p>
                  Usa <strong>nombres descriptivos</strong> para tus variables. 
                  "nombre" es mejor que "n" o "x".
                </p>
              </div>
              <div className="analysis-card">
                <h4>🔍 Tipos Dinámicos</h4>
                <p>
                  JavaScript puede cambiar el tipo de una variable. 
                  Usa nombres claros para evitar confusión.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="lesson-summary">
          <h3>📌 Lo más importante</h3>
          <div className="summary-box">
            <p>
              <strong>Variables</strong> son contenedores para guardar información. 
              Cada variable tiene un tipo de dato que define qué clase de información guarda.
            </p>
            <ul>
              <li><strong>const:</strong> Para valores que no cambian (usar siempre que puedas)</li>
              <li><strong>let:</strong> Para valores que sí cambian</li>
              <li><strong>Tipos básicos:</strong> number, string, boolean, null, undefined</li>
              <li><strong>Tipos complejos:</strong> arrays y objects (colecciones de datos)</li>
              <li><strong>Nombres descriptivos:</strong> Haz tu código legible para ti y otros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Variables
