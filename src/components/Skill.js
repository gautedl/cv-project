import '../styles/skills.css';
import { ElementMaker, ElementMakerTextField } from './ElementMaker';
import { useState } from 'react';
import { Button } from './Button';

export const Skill = ({ showEditPage }) => {
  const [visible, setVisible] = useState(true);

  const [skill, setSkill] = useState('Javascript');
  const [showInputSkill, setShowInputSkill] = useState(false);

  const [description, setDescription] = useState('Description of the skill. ');
  const [showInputDescription, setShowInputDescription] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      {visible && (
        <div className="skill">
          <p>
            <ElementMaker
              showEditPage={showEditPage}
              className="skill-title"
              type="text"
              value={skill}
              handleChange={(e) => setSkill(e.target.value)}
              handleDoubleClick={() => setShowInputSkill(true)}
              handleBlur={() => setShowInputSkill(false)}
              showInputEle={showInputSkill}
            />{' '}
          </p>
          <p>
            <ElementMakerTextField
              showEditPage={showEditPage}
              className="description"
              value={description}
              cols={105}
              rows={1}
              handleChange={(e) => setDescription(e.target.value)}
              handleDoubleClick={() => setShowInputDescription(true)}
              handleBlur={() => setShowInputDescription(false)}
              showInputEle={showInputDescription}
            />
          </p>
          {showEditPage && (
            <Button
              className="delete-button"
              text="Delete Skill"
              handleClick={handleClick}
            />
          )}
        </div>
      )}
    </>
  );
};
