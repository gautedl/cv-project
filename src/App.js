import { General } from './components/General';
import { Work } from './components/Work';
import { Education } from './components/Education';
import './styles/style.css';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="body">
      <General />
      <Work />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
