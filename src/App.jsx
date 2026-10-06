import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import SubtopicNotes from './pages/SubtopicNotes'
import ExperimentsPage from './pages/ExperimentsPage'
import ExperimentDetail from './pages/ExperimentDetail'
import Tools from './pages/Tools'
import ToolDetail from './pages/ToolDetail'
import Resources from './pages/Resources'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:id" element={<ModuleDetail />} />
          <Route path="/modules/:moduleId/:subtopicSlug" element={<SubtopicNotes />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/experiments/:id" element={<ExperimentDetail />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
