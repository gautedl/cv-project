import { General } from './General';
import { Work } from './Work';
import { Education } from './Education';
import '../styles/style.css';
import { Skills } from './Skills';
import { Button } from './Button';
import { useState } from 'react';

function Document() {
  const [showEditPage, setShowEditPage] = useState(true);
  const [editPageText, setEditPageText] = useState('Preview CV');

  const editPage = () => {
    setShowEditPage((prev) => !prev);
    if (editPageText === 'Preview CV') {
      setEditPageText('Edit CV');
    } else setEditPageText('Preview CV');
  };
  return (
    <div className="body">
      <General showEditPage={showEditPage} />
      <Work showEditPage={showEditPage} />
      <Education showEditPage={showEditPage} />
      <Skills showEditPage={showEditPage} />
      <Button handleClick={editPage} text={editPageText} />
    </div>
  );
}

export default Document;
