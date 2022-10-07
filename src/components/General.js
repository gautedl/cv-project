import '../styles/general.css';

export const General = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="info-container">
          <p className="title">Navn Navnesen</p>
          <p className="info">Adresse: 7016 Trondheim Osloveien 12</p>
          <p className="info">TLF: 591240+2304</p>
          <p className="info">Mail: sdfasdf@asdf.com</p>
          <div className="link-div">
            <a href="#https://www.gautelorentsen.no/">Website</a>
            <a href="#https://github.com/gautedl">Github</a>
            <a href="#https://www.linkedin.com/in/gaute-lorentsen-968589152/">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <img className="profile-image" src="" alt="Profile" />
        </div>
      </div>
    </div>
  );
};
