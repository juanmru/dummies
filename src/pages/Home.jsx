import '../styles/Home.css'

function Home({ onNavigate }) {
  const concepts = [
    {
      id: 1,
      title: 'DOM vs Virtual DOM',
      description: 'Entiende cómo React maneja el DOM y por qué es más eficiente',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'CSS - Estilos Web',
      description: 'Aprende a aplicar estilos con CSS, SASS, LESS y Styled Components',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'JavaScript puro vs React vs TypeScript - Elige tu camino',
      icon: '⚙️'
    },
    {
      id: 4,
      title: 'Variables y Tipos de Datos',
      description: 'Aprende qué son las variables y los diferentes tipos de datos en programación',
      icon: '📦'
    },
    {
      id: 5,
      title: 'Operadores',
      description: 'Domina los operadores aritméticos, lógicos y de comparación',
      icon: '➕'
    },
    {
      id: 6,
      title: 'Estructuras de Control',
      description: 'Controla el flujo de tu código con if, else, switch y más',
      icon: '🔀'
    },
    {
      id: 7,
      title: 'Bucles',
      description: 'Repite acciones con for, while y otros tipos de bucles',
      icon: '🔄'
    },
    {
      id: 8,
      title: 'Funciones',
      description: 'Crea código reutilizable con funciones y parámetros',
      icon: '⚙️'
    }
  ]

  const handleConceptClick = (id) => {
    switch(id) {
      case 1:
        onNavigate('dom-virtual-dom')
        break
      case 2:
        onNavigate('css')
        break
      case 3:
        onNavigate('javascript')
        break
      case 4:
        onNavigate('variables')
        break
      case 5:
        onNavigate('operators')
        break
      case 6:
        onNavigate('control-structures')
        break
      case 7:
        onNavigate('loops')
        break
      case 8:
        onNavigate('functions')
        break
      default:
        break
    }
  }

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Formación de Programación para Dummies</h1>
          <p>Aprende programación desde cero de forma práctica y divertida</p>
        </div>
      </header>

      <main className="concepts-section">
        <h2>Conceptos Principales</h2>
        <div className="concepts-grid">
          {concepts.map((concept) => (
            <div 
              key={concept.id} 
              className="concept-card"
              onClick={() => handleConceptClick(concept.id)}
            >
              <div className="concept-icon">{concept.icon}</div>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
              <button className="btn-learn">Aprende más →</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Formación de Programación para Dummies. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home
