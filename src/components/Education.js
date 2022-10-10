import { useState } from 'react';
import '../styles/education.css';
import { Button } from './Button';
import { School } from './School';

export const Education = ({ showEditPage }) => {
  const [componentList, setComponentList] = useState([
    <School key={0} showEditPage={showEditPage} />,
  ]);
  const [counter, setCounter] = useState(0);

  const clickHandler = (e) => {
    setComponentList(
      componentList.concat(
        <School key={componentList.length} showEditPage={showEditPage} />
      )
    );
  };

  if (!showEditPage && counter === 0) {
    setComponentList(
      componentList.map((school, index) => {
        return <School key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(1);
  }

  if (showEditPage && counter === 1) {
    setComponentList(
      componentList.map((school, index) => {
        return <School key={index} showEditPage={showEditPage} />;
      })
    );
    setCounter(0);
  }
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="horisontal-line"></div>
      {componentList}
      {showEditPage && (
        <Button text="Add new Education" handleClick={clickHandler} />
      )}
    </div>
  );
};
