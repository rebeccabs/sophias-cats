import './App.css'

function App() {
  return (
    <main className="app">
      <section className="home-card">
        <div className="learning-banner">
          <img
            src="/ui/learning-banner.png"
            alt="Aprender brincando"
            className="learning-banner-image"
          />
        </div>

        <div className="logo">
          <img
            src="/logo/sophias-cats-logo.png"
            alt="Sophia's Cats"
            className="logo-image"
          />
        </div>

        <div className="mimi">
          <img
            src="/characters/mimi/mimi.png"
            alt="Mimi"
            className="mimi-image"
          />
        </div>

        <p className="message">
          Olá, Sophia!
        </p>

        <p className="subtitle">
          Vamos viver uma nova aventura?
        </p>

        <button type="button" className="play-button">
          <img
            src="/ui/button-vamos.png"
            alt="Vamos!"
            className="button-image"
          />
        </button>
      </section>
    </main>
  )
}

export default App