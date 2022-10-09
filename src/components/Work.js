import { useState } from 'react';
import '../styles/work.css';
import { Button } from './Button';
import { Job } from './Job';

export const Work = () => {
  const [componentList, setComponentList] = useState([<Job key={0} />]);

  const clickHandler = (e) => {
    setComponentList(componentList.concat(<Job key={componentList.length} />));
  };

  return (
    <div className="work-container">
      <h1>Work experience</h1>
      <div className="horisontal-line"></div>
      {componentList}
      <Button text="Add new Work Experience" handleClick={clickHandler} />
    </div>
  );
};
