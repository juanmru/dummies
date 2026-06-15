import { useState } from 'react'
import '../styles/JavaScript.css'

function JavaScript({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')
  const [codeExample, setCodeExample] = useState('vanilla')

  return (
    <div className="js-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">⚙️</div>
        <h1>JavaScript - Lenguajes y Herramientas</h1>
        <p>Explora JavaScript puro, React y TypeScript</p>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'concept' ? 'active' : ''}`}
          onClick={() => setActiveTab('concept')}
        >
          Concepto
        </button>
        <button
          className={`tab ${activeTab === 'comparison' ? 'active' : ''}`}
          onClick={() => setActiveTab('comparison')}
        >
          Comparación
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
            <h2>¿Qué es JavaScript?</h2>
            <div className="card-info">
              <p>
                <strong>JavaScript (JS)</strong> es un lenguaje de programación que hace 
                <strong> interactivas las páginas web</strong>.
              </p>
              <p>
                Sin JavaScript, la web sería solo texto estático. Con él, puedes hacer que 
                los botones funcionen, validar formularios, cambiar contenido dinámicamente, etc.
              </p>
            </div>

            <h2>JavaScript Vanilla (Puro)</h2>
            <div className="card-info">
              <p>
                <strong>JavaScript Vanilla</strong> es JavaScript puro, sin librerías ni frameworks.
              </p>
              <h4>Ventajas:</h4>
              <ul>
                <li>✅ No necesitas aprender nada extra</li>
                <li>✅ Funciona en todos los navegadores</li>
                <li>✅ Ideal para proyectos pequeños</li>
                <li>✅ Total control del código</li>
              </ul>
              <h4>Desventajas:</h4>
              <ul>
                <li>❌ Mucho código repetitivo</li>
                <li>❌ Difícil de mantener en proyectos grandes</li>
                <li>❌ Fácil cometer errores</li>
              </ul>
            </div>

            <h2>React</h2>
            <div className="card-info">
              <p>
                <strong>React</strong> es una librería de JavaScript que hace más fácil 
                crear <strong>interfaces de usuario interactivas</strong>.
              </p>
              <h4>Ventajas:</h4>
              <ul>
                <li>✅ Código más limpio y organizado</li>
                <li>✅ Reutilización de componentes</li>
                <li>✅ Actualización automática del DOM (Virtual DOM)</li>
                <li>✅ Gran comunidad y recursos</li>
              </ul>
              <h4>Desventajas:</h4>
              <ul>
                <li>❌ Necesitas aprender React</li>
                <li>❌ Aumenta el tamaño del proyecto</li>
                <li>❌ Puede ser excesivo para proyectos muy pequeños</li>
              </ul>
            </div>

            <h2>TypeScript</h2>
            <div className="card-info">
              <p>
                <strong>TypeScript</strong> es una versión mejorada de JavaScript que añade 
                <strong> tipos de datos</strong>.
              </p>
              <p>
                Te ayuda a detectar errores <strong>antes de ejecutar el código</strong>.
              </p>
              <h4>Ventajas:</h4>
              <ul>
                <li>✅ Detecta errores antes de tiempo</li>
                <li>✅ Código más documentado</li>
                <li>✅ Mejor para equipos grandes</li>
                <li>✅ Menos bugs en producción</li>
              </ul>
              <h4>Desventajas:</h4>
              <ul>
                <li>❌ Curva de aprendizaje más alta</li>
                <li>❌ Necesita compilación</li>
                <li>❌ Más código que JavaScript vanilla</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'comparison' && (
          <section className="comparison-section">
            <h2>Comparación lado a lado</h2>
            
            <div className="comparison-cards">
              <div className="comp-card vanilla">
                <h3>📝 JavaScript Vanilla</h3>
                <div className="feature-row">
                  <span className="feature-label">Curva aprendizaje</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Documentación</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Comunidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Escalabilidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Velocidad desarrollo</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>

              <div className="comp-card react">
                <h3>⚛️ React</h3>
                <div className="feature-row">
                  <span className="feature-label">Curva aprendizaje</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Documentación</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Comunidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Escalabilidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Velocidad desarrollo</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="comp-card typescript">
                <h3>🔷 TypeScript</h3>
                <div className="feature-row">
                  <span className="feature-label">Curva aprendizaje</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Documentación</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Comunidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Escalabilidad</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="feature-row">
                  <span className="feature-label">Velocidad desarrollo</span>
                  <div className="feature-bar">
                    <div className="feature-fill" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="use-cases">
              <h3>¿Cuándo usar cada uno?</h3>
              <div className="use-case-grid">
                <div className="use-case-card">
                  <h4>📝 JavaScript Vanilla</h4>
                  <ul>
                    <li>Proyectos muy pequeños</li>
                    <li>Páginas estáticas</li>
                    <li>Aprender lo básico</li>
                    <li>Poco presupuesto</li>
                  </ul>
                </div>
                <div className="use-case-card">
                  <h4>⚛️ React</h4>
                  <ul>
                    <li>Aplicaciones web complejas</li>
                    <li>Proyectos de mediano/grande</li>
                    <li>Interfaz muy interactiva</li>
                    <li>Equipo de desarrollo</li>
                  </ul>
                </div>
                <div className="use-case-card">
                  <h4>🔷 TypeScript</h4>
                  <ul>
                    <li>Proyectos empresariales</li>
                    <li>Equipos grandes</li>
                    <li>Código crítico</li>
                    <li>Largo plazo</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'examples' && (
          <section className="examples-section">
            <h2>Ejemplo: Un contador simple</h2>
            
            <div className="code-tabs">
              <button
                className={`code-tab ${codeExample === 'vanilla' ? 'active' : ''}`}
                onClick={() => setCodeExample('vanilla')}
              >
                📝 Vanilla JS
              </button>
              <button
                className={`code-tab ${codeExample === 'react' ? 'active' : ''}`}
                onClick={() => setCodeExample('react')}
              >
                ⚛️ React
              </button>
              <button
                className={`code-tab ${codeExample === 'typescript' ? 'active' : ''}`}
                onClick={() => setCodeExample('typescript')}
              >
                🔷 TypeScript
              </button>
            </div>

            {codeExample === 'vanilla' && (
              <div className="code-example">
                <h4>HTML + CSS + JavaScript</h4>
                <pre><code>{`<!-- HTML -->
<div id="app">
  <p>Contador: <span id="count">0</span></p>
  <button id="btn">Incrementar</button>
</div>

<!-- CSS -->
<style>
  #count { color: #667eea; font-weight: bold; }
  #btn { padding: 10px 20px; background: #667eea; }
</style>

<!-- JavaScript -->
<script>
  let count = 0;
  const btn = document.getElementById('btn');
  const span = document.getElementById('count');
  
  btn.addEventListener('click', () => {
    count++;
    span.textContent = count;
  });
</script>`}</code></pre>
              </div>
            )}

            {codeExample === 'react' && (
              <div className="code-example">
                <h4>React Component</h4>
                <pre><code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Counter;

/* CSS */
/* styles.css */
span { color: #667eea; font-weight: bold; }
button { padding: 10px 20px; background: #667eea; }`}</code></pre>
              </div>
            )}

            {codeExample === 'typescript' && (
              <div className="code-example">
                <h4>React + TypeScript</h4>
                <pre><code>{`import { useState, FC } from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter: FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);
  
  const handleIncrement = (): void => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <div>
      <p>Contador: <span>{count}</span></p>
      <button onClick={handleIncrement}>
        Incrementar
      </button>
    </div>
  );
};

export default Counter;`}</code></pre>
              </div>
            )}

            <div className="example-analysis">
              <h3>Análisis del código</h3>
              <div className="analysis-grid">
                <div className="analysis-card">
                  <h4>📝 Vanilla JS</h4>
                  <p><strong>Líneas:</strong> ~20 líneas</p>
                  <p><strong>Complejidad:</strong> Media (hay que manipular el DOM manualmente)</p>
                  <p><strong>Mantenibilidad:</strong> Baja (cambios afectan múltiples lugares)</p>
                </div>
                <div className="analysis-card">
                  <h4>⚛️ React</h4>
                  <p><strong>Líneas:</strong> ~15 líneas</p>
                  <p><strong>Complejidad:</strong> Baja (uso de hooks)</p>
                  <p><strong>Mantenibilidad:</strong> Alta (todo junto y organizado)</p>
                </div>
                <div className="analysis-card">
                  <h4>🔷 TypeScript</h4>
                  <p><strong>Líneas:</strong> ~20 líneas</p>
                  <p><strong>Complejidad:</strong> Media (tipos de datos)</p>
                  <p><strong>Mantenibilidad:</strong> Muy alta (tipos ayudan a prevenir errores)</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="lesson-summary">
        <h3>📌 Lo más importante</h3>
        <div className="summary-box">
          <p>
            Los tres son JavaScript, pero con diferentes niveles de abstracción:
          </p>
          <ul style={{ marginTop: '15px', marginLeft: '20px' }}>
            <li><strong>Vanilla:</strong> Lo más básico, necesario aprender primero</li>
            <li><strong>React:</strong> Más productivo para proyectos medianos/grandes</li>
            <li><strong>TypeScript:</strong> Lo más seguro, ideal para empresas</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            <strong>Recomendación para dummies:</strong> Aprende Vanilla JS primero, 
            luego React, y después TypeScript cuando te sientas cómodo. 🚀
          </p>
        </div>
      </div>
    </div>
  )
}

export default JavaScript
