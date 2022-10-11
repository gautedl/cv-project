import { General } from './General';
import { Work } from './Work';
import { Education } from './Education';
import '../styles/style.css';
import { Skills } from './Skills';
import { Button } from './Button';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function Document() {
  const [showEditPage, setShowEditPage] = useState(true);
  const [editPageText, setEditPageText] = useState('Preview CV');
  const printRef = useRef();

  const editPage = () => {
    setShowEditPage((prev) => !prev);
    if (editPageText === 'Preview CV') {
      setEditPageText('Edit CV');
    } else setEditPageText('Preview CV');
  };

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth() * 1.67;
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', -70, 0, pdfWidth, pdfHeight);
    pdf.save('cv.pdf');
  };
  return (
    <div className="body">
      <div ref={printRef} className="body-container">
        <General showEditPage={showEditPage} />
        <Work showEditPage={showEditPage} />
        <Education showEditPage={showEditPage} />
        <Skills showEditPage={showEditPage} />
      </div>
      <div className="buttons-container">
        <Button handleClick={editPage} text={editPageText} />
        {!showEditPage && (
          <Button handleClick={handleDownload} text="Download to PDF" />
        )}
      </div>
    </div>
  );
}

export default Document;
