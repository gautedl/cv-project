import { General } from './components/General';
import { Work } from './components/Work';
import { Education } from './components/Education';
import './styles/style.css';
import { Skill } from './components/Skill';

function App() {
  return (
    <div className="body">
      <General />
      <Work />
      <Education />
      <Skill />
    </div>
  );
}

export default App;
