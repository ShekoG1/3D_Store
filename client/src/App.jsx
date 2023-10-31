import Home from "./views/Home"
import Customizer from "./views/Customizer";
import Canvas from "./canvas";

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
