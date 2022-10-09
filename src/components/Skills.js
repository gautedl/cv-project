import '../styles/skills.css';
import { Skill } from './Skill';
import { useState } from 'react';
import { Button } from './Button';

export const Skills = () => {
  const [componentList, setComponentList] = useState([<Skill key={0} />]);

  const clickHandler = (e) => {
    setComponentList(
      componentList.concat(<Skill key={componentList.length} />)
    );
  };
  return (
    <div className="skill-container">
      <h1>Skills</h1>
      <div className="horisontal-line"></div>
      {componentList}
      <Button text="Add new Skill" handleClick={clickHandler} />
    </div>
  );
};
