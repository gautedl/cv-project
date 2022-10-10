import { ElementMakerTextField, ElementMaker } from './ElementMaker';
import { useState } from 'react';
import '../styles/work.css';
import { Button } from './Button';

export const Job = ({ showEditPage }) => {
  const [visible, setVisible] = useState(true);

  const [startYear, setStartYear] = useState('2020');
  const [showInputStartYear, setShowInputStartYear] = useState(false);

  const [endYear, setEndYear] = useState('2022');
  const [showInputEndYear, setShowInputEndYear] = useState(false);

  const [firm, setFirm] = useState('Facebook');
  const [showInputFirm, setShowInputFirm] = useState(false);

  const [jobTitle, setJobTitle] = useState('Job Title');
  const [showInputJobTitle, setShowInputJobTitle] = useState(false);

  const [description, setDescription] = useState('Description of the job. ');
  const [showInputDescription, setShowInputDescription] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible && (
        <div className="job-container">
          <div>
            <ElementMaker
              showEditPage={showEditPage}
              type="number"
              value={startYear}
              handleChange={(e) => setStartYear(e.target.value)}
              handleDoubleClick={() => setShowInputStartYear(true)}
              handleBlur={() => setShowInputStartYear(false)}
              showInputEle={showInputStartYear}
            />
            -
            <ElementMaker
              showEditPage={showEditPage}
              type="number"
              value={endYear}
              handleChange={(e) => setEndYear(e.target.value)}
              handleDoubleClick={() => setShowInputEndYear(true)}
              handleBlur={() => setShowInputEndYear(false)}
              showInputEle={showInputEndYear}
            />
            {', '}
            <ElementMaker
              showEditPage={showEditPage}
              type="text"
              value={firm}
              handleChange={(e) => setFirm(e.target.value)}
              handleDoubleClick={() => setShowInputFirm(true)}
              handleBlur={() => setShowInputFirm(false)}
              showInputEle={showInputFirm}
            />
          </div>
          <div>
            <ElementMaker
              showEditPage={showEditPage}
              type="text"
              value={jobTitle}
              handleChange={(e) => setJobTitle(e.target.value)}
              handleDoubleClick={() => setShowInputJobTitle(true)}
              handleBlur={() => setShowInputJobTitle(false)}
              showInputEle={showInputJobTitle}
            />
          </div>
          <ul>
            <li>
              <ElementMakerTextField
                showEditPage={showEditPage}
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
          {showEditPage && (
            <Button
              className="delete-button"
              text="Delete Job"
              handleClick={handleClick}
            />
          )}
        </div>
      )}
    </>
  );
};
