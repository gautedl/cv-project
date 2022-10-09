import { useState } from 'react';
import '../styles/education.css';
import { Button } from './Button';
import { School } from './School';

export const Education = () => {
  const [componentList, setComponentList] = useState([<School key={0} />]);

  const clickHandler = (e) => {
    setComponentList(
      componentList.concat(<School key={componentList.length} />)
    );
  };
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="horisontal-line"></div>
      {componentList}
      <Button text="Add new Education" handleClick={clickHandler} />
    </div>
  );
};
