import { useState } from 'react'
import '../styles/DOMVirtualDOM.css'

function DOMVirtualDOM({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')

  return (
    <div className="dom-virtual-dom">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">🖥️</div>
        <h1>DOM vs Virtual DOM</h1>
        <p>Entiende la diferencia entre el DOM real y el Virtual DOM de React</p>
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
          className={`tab ${activeTab === 'example' ? 'active' : ''}`}
          onClick={() => setActiveTab('example')}
        >
          Ejemplo Práctico
        </button>
      </div>

      <div className="content">
        {activeTab === 'concept' && (
          <section className="concept-section">
            <h2>¿Qué es el DOM?</h2>
            <div className="card-info">
              <p>
                <strong>DOM</strong> significa <strong>Document Object Model</strong>. 
                Es la representación en árbol de los elementos HTML de tu página web.
              </p>
              <p>
                Cuando escribes HTML en tu navegador, el navegador crea el DOM automáticamente. 
                Es como un mapa interactivo de todos los elementos de tu página.
              </p>
            </div>

            <h2>¿Qué es el Virtual DOM?</h2>
            <div className="card-info">
              <p>
                El <strong>Virtual DOM</strong> es una copia <strong>virtual</strong> del DOM real 
                que mantiene React en la memoria de tu computadora.
              </p>
              <p>
                Es como tener un "borrador" del DOM antes de hacer cambios reales. 
                React usa esto para ser más rápido y eficiente.
              </p>
            </div>

            <h2>¿Por qué es importante?</h2>
            <div className="card-info">
              <ul>
                <li>✅ <strong>Rendimiento:</strong> Cambiar el Virtual DOM es mucho más rápido que cambiar el DOM real</li>
                <li>✅ <strong>Eficiencia:</strong> React solo actualiza lo que realmente cambió</li>
                <li>✅ <strong>Menos trabajo:</strong> No tienes que actualizar manualmente cada elemento</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'comparison' && (
          <section className="comparison-section">
            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>🖥️ DOM Real</h3>
                <ul>
                  <li>Directamente en el navegador</li>
                  <li>Manipularlo es lento</li>
                  <li>Cada cambio re-renderiza todo</li>
                  <li>Código manual y complicado</li>
                  <li>Riesgo de errores</li>
                </ul>
              </div>

              <div className="vs-icon">VS</div>

              <div className="comparison-card">
                <h3>⚡ Virtual DOM</h3>
                <ul>
                  <li>En la memoria de tu PC</li>
                  <li>Manipularlo es muy rápido</li>
                  <li>Solo actualiza lo necesario</li>
                  <li>React lo maneja automáticamente</li>
                  <li>Menos errores</li>
                </ul>
              </div>
            </div>

            <div className="flow-diagram">
              <h3>¿Cómo funciona el proceso?</h3>
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="step-number">1</div>
                  <p>Haces un cambio en tu código</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-number">2</div>
                  <p>React actualiza el Virtual DOM</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-number">3</div>
                  <p>React compara con el anterior</p>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <div className="step-number">4</div>
                  <p>Actualiza solo lo diferente en el DOM</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'example' && (
          <section className="example-section">
            <ExampleDemo />
          </section>
        )}
      </div>

      <div className="lesson-summary">
        <h3>📌 Lo más importante</h3>
        <div className="summary-box">
          <p>
            El <strong>Virtual DOM</strong> es una estrategia inteligente de React para hacer 
            que tu aplicación web sea más rápida. Mantiene una copia virtual de los elementos, 
            la compara con la anterior, y solo actualiza lo que cambió en el navegador.
          </p>
          <p>
            <strong>Resultado:</strong> Tu página web es ⚡ más rápida, 🎯 más eficiente 
            y 😊 más fácil de mantener.
          </p>
        </div>
      </div>
    </div>
  )
}

function ExampleDemo() {
  const [count, setCount] = useState(0)
  const [showDOM, setShowDOM] = useState(false)

  return (
    <div className="example-demo">
      <h3>Ejemplo interactivo: Contador</h3>
      
      <div className="demo-container">
        <div className="counter-box">
          <h4>Haz click en el botón:</h4>
          <div className="counter-display">{count}</div>
          <button 
            className="btn-increment"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <p className="counter-hint">Abre la consola del navegador para ver los cambios</p>
        </div>

        <div className="explanation-box">
          <h4>¿Qué está pasando?</h4>
          <p>Cuando haces click:</p>
          <ol>
            <li>React detecta el cambio</li>
            <li>Actualiza el Virtual DOM con el nuevo valor</li>
            <li>Compara con la versión anterior</li>
            <li>Identifica que solo el número cambió</li>
            <li>Actualiza SOLO el número en el DOM real</li>
          </ol>
          <p className="highlight">
            Sin Virtual DOM, todo el componente se tendría que re-renderizar.
          </p>
        </div>
      </div>

      <div className="code-example">
        <h4>Código:</h4>
        <pre><code>{`const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>
  +1
</button>

<div>{count}</div>`}</code></pre>
      </div>

      <div className="visual-explanation">
        <h4>Visualización del proceso:</h4>
        <div className="vdom-visualization">
          <div className="vdom-box original">
            <h5>Virtual DOM Anterior</h5>
            <code>{'{ count: 0 }'}</code>
          </div>
          <div className="vdom-box new">
            <h5>Virtual DOM Nuevo</h5>
            <code>{'{ count: 1 }'}</code>
          </div>
        </div>
        <div className="diff-indicator">React detecta: count cambió de 0 a 1</div>
        <div className="vdom-box dom-real">
          <h5>DOM Real Actualizado</h5>
          <code>&lt;div&gt;{count}&lt;/div&gt;</code>
        </div>
      </div>
    </div>
  )
}

export default DOMVirtualDOM
