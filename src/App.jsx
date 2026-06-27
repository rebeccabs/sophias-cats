import { useEffect, useRef, useState } from 'react'
import './App.css'

import frame1 from '/characters/mimi/idle/idle_frame_01.png'
import frame2 from '/characters/mimi/idle/idle_frame_02.png'
import frame3 from '/characters/mimi/idle/idle_frame_03.png'
import frame4 from '/characters/mimi/idle/idle_frame_04.png'

function App() {
  const mimiFrames = [frame1, frame2, frame3, frame4, frame3, frame2]
  const [currentFrame, setCurrentFrame] = useState(0)

  const buttonClickSound = useRef(new Audio('/audio/button-click.ogg'))
  const menuTheme = useRef(new Audio('/audio/music/menu-theme.mp3'))

  useEffect(() => {
    menuTheme.current.loop = true
    menuTheme.current.volume = 0.25
  }, [])

  function playButtonClick() {
    buttonClickSound.current.currentTime = 0
    buttonClickSound.current.play()

    if (menuTheme.current.paused) {
      menuTheme.current.play()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((currentFrame) => (currentFrame + 1) % mimiFrames.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

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
            src={mimiFrames[currentFrame]}
            alt="Mimi"
            className="mimi-image"
          />
        </div>

        <p className="message">Olá, Sophia!</p>

        <p className="subtitle">Vamos viver uma nova aventura?</p>

        <button
          type="button"
          className="play-button"
          onClick={playButtonClick}
        >
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