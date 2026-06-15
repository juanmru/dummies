import { useState, useEffect } from 'react'
import '../styles/Home.css'

function getTimeLeft(target) {
  const diff = target - new Date()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false
  }
}

function Home({ onNavigate }) {
  const matchDate = new Date(2026, 5, 15, 18, 0, 0)
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(matchDate))

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft(matchDate)
      setTimeLeft(updated)
      if (updated.finished) {
        clearInterval(timer)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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
          {!timeLeft.finished && (
          <div className="countdown">
            <div className="countdown-match">
              <span className="countdown-team">
                <img
                  className="countdown-flag"
                  src="https://flagcdn.com/w160/es.png"
                  srcSet="https://flagcdn.com/w320/es.png 2x"
                  alt="Bandera de España"
                  width="64"
                  height="43"
                />
                <span className="countdown-name">España</span>
              </span>
              <span className="countdown-vs">VS</span>
              <span className="countdown-team">
                <img
                  className="countdown-flag"
                  src="https://flagcdn.com/w160/cv.png"
                  srcSet="https://flagcdn.com/w320/cv.png 2x"
                  alt="Bandera de Cabo Verde"
                  width="64"
                  height="43"
                />
                <span className="countdown-name">Cabo Verde</span>
              </span>
            </div>
            <div className="countdown-timer">
              <div className="countdown-unit">
                <span className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="countdown-label">Días</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-label">Horas</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Min</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Seg</span>
              </div>
            </div>
            <p className="countdown-info">Hoy · 18:00h</p>
          </div>
          )}
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

          <div className="concept-card concept-card--disabled">
            <div className="concept-icon">🗂️</div>
            <h3>Configuración de repositorios</h3>
            <p>Pendiente de añadir la información por parte de Juan Mesa</p>
            <button className="btn-learn" disabled>Coming soon</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Formación de Programación para Dummies. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home
