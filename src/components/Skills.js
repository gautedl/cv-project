import '../styles/skills.css';
import { Skill } from './Skill';
import { useState } from 'react';
import { Button } from './Button';

export const Skills = ({ showEditPage }) => {
  const [counter, setCounter] = useState(0);

  const showEdit = showEditPage;
  const [componentList, setComponentList] = useState([
    <Skill key={0} showEditPage={showEdit} />,
  ]);

  const clickHandler = (e) => {
    setComponentList(
      componentList.concat(
        <Skill key={componentList.length} showEditPage={showEdit} />
      )
    );
  };

  if (!showEditPage && counter === 0) {
    setComponentList(
      componentList.map((skill, index) => {
        return <Skill key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(1);
  }

  if (showEditPage && counter === 1) {
    setComponentList(
      componentList.map((skill, index) => {
        return <Skill key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(0);
  }
  return (
    <div className="skill-container">
      <h1>Skills</h1>
      <div className="horisontal-line"></div>
      {componentList}
      {showEditPage && (
        <Button text="Add new Skill" handleClick={clickHandler} />
      )}
    </div>
  );
};
