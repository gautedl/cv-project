import '../styles/general.css';
import { ElementMaker } from './ElementMaker';
import React, { useState } from 'react';
import profpic from '../img/profpic.jpg';

export const General = () => {
  const [fullName, setFullName] = useState('Navn Navnesen');
  const [showInputEle, setShowInputEle] = useState(false);

  const [streetAdress, setStreetAdress] = useState('Osloveien 12');
  const [showInputAdr, setShowInputAdr] = useState(false);

  const [zip, setZip] = useState('7016');
  const [showInputZip, setShowInputZip] = useState(false);

  const [city, setCity] = useState('Trondheim');
  const [showInputCity, setShowInputCity] = useState(false);

  const [TLF, setTLF] = useState('+4739393939');
  const [showInputTLF, setShowInputTLF] = useState(false);

  const [mail, setMail] = useState('test@mail.no');
  const [showInputMail, setShowInputMail] = useState(false);

  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="info-container">
          <ElementMaker
            className="title"
            type="text"
            value={fullName}
            handleChange={(e) => setFullName(e.target.value)}
            handleDoubleClick={() => setShowInputEle(true)}
            handleBlur={() => setShowInputEle(false)}
            showInputEle={showInputEle}
          />

          <p className="info">
            Adresse:{' '}
            <ElementMaker
              className=""
              type="text"
              value={streetAdress}
              handleChange={(e) => setStreetAdress(e.target.value)}
              handleDoubleClick={() => setShowInputAdr(true)}
              handleBlur={() => setShowInputAdr(false)}
              showInputEle={showInputAdr}
            />{' '}
            <ElementMaker
              className=""
              type="text"
              value={zip}
              handleChange={(e) => setZip(e.target.value)}
              handleDoubleClick={() => setShowInputZip(true)}
              handleBlur={() => setShowInputZip(false)}
              showInputEle={showInputZip}
            />{' '}
            <ElementMaker
              className=""
              type="text"
              value={city}
              handleChange={(e) => setCity(e.target.value)}
              handleDoubleClick={() => setShowInputCity(true)}
              handleBlur={() => setShowInputCity(false)}
              showInputEle={showInputCity}
            />
          </p>

          <p className="info">
            TLF:{' '}
            <ElementMaker
              className=""
              type="number"
              value={TLF}
              handleChange={(e) => setTLF(e.target.value)}
              handleDoubleClick={() => setShowInputTLF(true)}
              handleBlur={() => setShowInputTLF(false)}
              showInputEle={showInputTLF}
            />
          </p>
          <p className="info">
            Mail:{' '}
            <ElementMaker
              className=""
              type="text"
              value={mail}
              handleChange={(e) => setMail(e.target.value)}
              handleDoubleClick={() => setShowInputMail(true)}
              handleBlur={() => setShowInputMail(false)}
              showInputEle={showInputMail}
            />
          </p>
          <div className="link-div">
            <a href="#https://www.gautelorentsen.no/">Website</a>
            <a href="#https://github.com/gautedl">Github</a>
            <a href="#https://www.linkedin.com/in/gaute-lorentsen-968589152/">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="pic-container">
          <label htmlFor="upload-button">
            {image.preview ? (
              <img src={image.preview} alt="dummy" className="profile-image" />
            ) : (
              <>
                <img className="profile-image" src={profpic} alt="pic" />
              </>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
