import { useState } from 'react'
import '../styles/CSS.css'

function CSS({ onBack }) {
  const [activeTab, setActiveTab] = useState('concept')

  return (
    <div className="css-page">
      <button className="btn-back" onClick={onBack}>← Volver</button>

      <header className="lesson-header">
        <div className="lesson-icon">🎨</div>
        <h1>CSS - Estilos Web</h1>
        <p>Aprende a aplicar estilos y conoce las diferentes formas de escribir CSS</p>
      </header>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'concept' ? 'active' : ''}`}
          onClick={() => setActiveTab('concept')}
        >
          Concepto
        </button>
        <button
          className={`tab ${activeTab === 'preprocesadores' ? 'active' : ''}`}
          onClick={() => setActiveTab('preprocesadores')}
        >
          Preprocesadores
        </button>
        <button
          className={`tab ${activeTab === 'styled' ? 'active' : ''}`}
          onClick={() => setActiveTab('styled')}
        >
          CSS-in-JS
        </button>
      </div>

      <div className="content">
        {activeTab === 'concept' && (
          <section className="concept-section">
            <h2>¿Qué es CSS?</h2>
            <div className="card-info">
              <p>
                <strong>CSS</strong> significa <strong>Cascading Style Sheets</strong>.
                Es el lenguaje que usamos para dar <strong>estilos y colores</strong> a nuestras páginas web.
              </p>
              <p>
                HTML define la estructura (qué elementos hay), pero CSS define cómo se ven esos elementos.
              </p>
            </div>

            <h2>¿Para qué sirve CSS?</h2>
            <div className="card-info">
              <ul>
                <li>🎨 <strong>Colores y fondos:</strong> Dale color a tus elementos</li>
                <li>📏 <strong>Tamaños y posicionamiento:</strong> Controla dónde van los elementos</li>
                <li>✨ <strong>Efectos visuales:</strong> Sombras, bordes redondeados, etc.</li>
                <li>⚡ <strong>Animaciones:</strong> Crea movimientos fluidos</li>
                <li>📱 <strong>Responsive:</strong> Adapta tu página a cualquier pantalla</li>
              </ul>
            </div>

            <h2>CSS Básico</h2>
            <div className="code-example">
              <pre><code>{`/* Selector - Propiedad - Valor */
.btn {
  background-color: #667eea;  /* Color de fondo */
  color: white;              /* Color del texto */
  padding: 12px 24px;        /* Espacio interno */
  border-radius: 8px;        /* Esquinas redondeadas */
  cursor: pointer;           /* Cursor de mano */
}

.btn:hover {
  background-color: #764ba2;  /* Color al pasar el ratón */
}`}</code></pre>
            </div>

            <h2>¿Por qué existen otros tipos de CSS?</h2>
            <div className="card-info">
              <p>
                CSS puro funciona bien, pero cuando los proyectos crecen, el código se vuelve:
              </p>
              <ul>
                <li>❌ Muy largo y repetitivo</li>
                <li>❌ Difícil de mantener</li>
                <li>❌ Difícil de reutilizar código</li>
              </ul>
              <p style={{ marginTop: '15px' }}>
                Por eso surgieron <strong>Preprocesadores</strong> y <strong>CSS-in-JS</strong> 
                para hacerlo más fácil y profesional.
              </p>
            </div>
          </section>
        )}

        {activeTab === 'preprocesadores' && (
          <section className="preprocesadores-section">
            <h2>Preprocesadores CSS</h2>
            <div className="card-info">
              <p>
                Los <strong>preprocesadores</strong> son lenguajes que se traducen a CSS.
                Te permiten escribir código <strong>más limpio y reutilizable</strong>.
              </p>
            </div>

            <div className="preprocessor-comparison">
              <div className="preprocessor-card">
                <h3>SASS (Syntactically Awesome Stylesheets)</h3>
                <div className="badge">⭐ Más popular</div>
                <div className="badge company-badge">⚙️ Componentes + Next.js</div>
                <p className="desc">Es una extensión de CSS que añade variables, funciones y nidación.</p>
                
                <h4>Ventajas:</h4>
                <ul>
                  <li>✅ Variables para reutilizar valores</li>
                  <li>✅ Nidación (organizar mejor el código)</li>
                  <li>✅ Mixins (funciones reutilizables)</li>
                  <li>✅ Imports (dividir en archivos)</li>
                </ul>

                <h4>Ejemplo:</h4>
                <div className="code-example">
                  <pre><code>{`$color-primary: #667eea;
$padding: 12px;

.btn {
  background-color: $color-primary;
  padding: $padding;
  
  &:hover {
    background-color: darken($color-primary, 10%);
  }
}`}</code></pre>
                </div>
              </div>

              <div className="preprocessor-card">
                <h3>LESS (Leaner Style Sheets)</h3>
                <div className="badge company-badge">⚙️ Proyectos Legacy</div>
                <p className="desc">Similar a SASS pero con sintaxis más cercana a CSS.</p>
                
                <h4>Ventajas:</h4>
                <ul>
                  <li>✅ Más fácil de aprender que SASS</li>
                  <li>✅ Operaciones matemáticas</li>
                  <li>✅ Mixins y funciones</li>
                  <li>✅ Sintaxis similar a CSS</li>
                </ul>

                <h4>Ejemplo:</h4>
                <div className="code-example">
                  <pre><code>{`@color-primary: #667eea;
@padding: 12px;

.btn {
  background-color: @color-primary;
  padding: @padding;
  
  &:hover {
    background-color: lighten(@color-primary, 10%);
  }
}`}</code></pre>
                </div>
              </div>
            </div>

            <div className="comparison-table">
              <h3>Comparación: SASS vs LESS</h3>
              <table>
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>SASS</th>
                    <th>LESS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Popularidad</td>
                    <td>⭐⭐⭐⭐⭐</td>
                    <td>⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>Variables</td>
                    <td>Sí ($var)</td>
                    <td>Sí (@var)</td>
                  </tr>
                  <tr>
                    <td>Nidación</td>
                    <td>Sí</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Mixins</td>
                    <td>Sí</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>Curva de aprendizaje</td>
                    <td>Media</td>
                    <td>Baja</td>
                  </tr>
                  <tr>
                    <td>Usado en</td>
                    <td>Proyectos grandes</td>
                    <td>Proyectos medianos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'styled' && (
          <section className="styled-section">
            <h2>CSS-in-JS: Styled Components</h2>
            <div className="card-info">
              <p>
                <strong>Styled Components</strong> es una librería que te permite escribir CSS 
                <strong> directamente en JavaScript</strong>, usando <strong>template literals</strong>.
              </p>
              <p>
                Es especialmente útil en React porque el CSS está acoplado con el componente.
              </p>
            </div>

            <h2>¿Por qué usar Styled Components?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🔗</div>
                <h4>Acoplamiento</h4>
                <p>CSS y componente juntos en un archivo</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h4>Scope automático</h4>
                <p>No hay conflictos de nombres de clases</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4>Props dinámicas</h4>
                <p>Usa variables de React en tus estilos</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎨</div>
                <h4>Temas</h4>
                <p>Maneja temas claros y oscuros fácilmente</p>
              </div>
            </div>

            <h2>Ejemplo de Styled Components</h2>
            <div className="code-example">
              <pre><code>{`import styled from 'styled-components';

const ButtonStyled = styled.button\`
  background-color: #667eea;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  
  /* Props dinámicas */
  background-color: \${props => props.primary ? '#667eea' : '#ccc'};
  
  /* Hover */
  &:hover {
    background-color: #764ba2;
    transform: scale(1.05);
  }
\`;

export default function App() {
  return (
    <>
      <ButtonStyled primary>Click me</ButtonStyled>
      <ButtonStyled>Normal button</ButtonStyled>
    </>
  );
}`}</code></pre>
            </div>

            <h2>Comparación: CSS tradicional vs Styled Components</h2>
            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>CSS Tradicional</h3>
                <ul>
                  <li>✅ Separación de responsabilidades</li>
                  <li>✅ Fácil de cachear</li>
                  <li>❌ Conflictos de nombres de clases</li>
                  <li>❌ CSS muerto (código no usado)</li>
                </ul>
              </div>
              <div className="comparison-card">
                <h3>Styled Components</h3>
                <ul>
                  <li>✅ Sin conflictos de nombres</li>
                  <li>✅ Props dinámicas</li>
                  <li>✅ Todo en un archivo</li>
                  <li>❌ Aumenta el bundle size</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="lesson-summary">
        <h3>📌 Lo más importante</h3>
        <div className="summary-box">
          <p>
            <strong>CSS</strong> es el lenguaje para dar estilos a tus páginas web.
          </p>
          <ul style={{ marginTop: '15px', marginLeft: '20px' }}>
            <li><strong>CSS puro:</strong> Lo básico, siempre funciona</li>
            <li><strong>SASS/LESS:</strong> Preprocesadores para escribir menos código</li>
            <li><strong>Styled Components:</strong> CSS en JavaScript para React</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            Elige la que mejor se adapte a tu proyecto. Para comenzar, <strong>CSS puro es suficiente</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CSS
