import { useState } from 'react';
import '../styles/work.css';
import { Button } from './Button';
import { Job } from './Job';

export const Work = ({ showEditPage }) => {
  const [componentList, setComponentList] = useState([
    <Job key={0} showEditPage={showEditPage} />,
  ]);

  const [counter, setCounter] = useState(0);

  const clickHandler = (e) => {
    setComponentList(
      componentList.concat(
        <Job key={componentList.length} showEditPage={showEditPage} />
      )
    );
  };

  if (!showEditPage && counter === 0) {
    setComponentList(
      componentList.map((job, index) => {
        return <Job key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(1);
  }

  if (showEditPage && counter === 1) {
    setComponentList(
      componentList.map((job, index) => {
        return <Job key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(0);
  }

  return (
    <div className="work-container">
      <h1>Work experience</h1>
      <div className="horisontal-line"></div>
      {componentList}

      {showEditPage && (
        <Button text="Add new Work Experience" handleClick={clickHandler} />
      )}
    </div>
  );
};
