import '../styles/education.css';
import { ElementMaker, ElementMakerTextField } from './ElementMaker';
import { useState } from 'react';
import { Button } from './Button';

export const School = () => {
  const [visible, setVisible] = useState(true);

  const [description, setDescription] = useState(
    'Description of the education. Classes etc.'
  );
  const [showInputDescription, setShowInputDescription] = useState(false);

  const [startYear, setStartYear] = useState('2020');
  const [showInputStartYear, setShowInputStartYear] = useState(false);

  const [endYear, setEndYear] = useState('2022');
  const [showInputEndYear, setShowInputEndYear] = useState(false);

  const [school, setSchool] = useState('NTNU');
  const [showInputSchool, setShowInputSchool] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible && (
        <div className="school-container">
          <div>
            <ElementMaker
              type="number"
              value={startYear}
              handleChange={(e) => setStartYear(e.target.value)}
              handleDoubleClick={() => setShowInputStartYear(true)}
              handleBlur={() => setShowInputStartYear(false)}
              showInputEle={showInputStartYear}
            />
            -
            <ElementMaker
              type="number"
              value={endYear}
              handleChange={(e) => setEndYear(e.target.value)}
              handleDoubleClick={() => setShowInputEndYear(true)}
              handleBlur={() => setShowInputEndYear(false)}
              showInputEle={showInputEndYear}
            />
            {', '}
            <ElementMaker
              type="text"
              value={school}
              handleChange={(e) => setSchool(e.target.value)}
              handleDoubleClick={() => setShowInputSchool(true)}
              handleBlur={() => setShowInputSchool(false)}
              showInputEle={showInputSchool}
            />
          </div>
          <ul>
            <li>
              <ElementMakerTextField
                value={description}
                cols={105}
                rows={4}
                handleChange={(e) => setDescription(e.target.value)}
                handleDoubleClick={() => setShowInputDescription(true)}
                handleBlur={() => setShowInputDescription(false)}
                showInputEle={showInputDescription}
              />
            </li>
          </ul>
          <Button text="Delete Education" handleClick={handleClick} />
        </div>
      )}
    </>
  );
};
