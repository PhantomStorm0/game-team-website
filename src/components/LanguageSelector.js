function LanguageSelector({ setLanguage }) {
    return (
      <div className="language-selector">
        <button onClick={() => setLanguage('tr')}>Türkçe</button>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('zh')}>中文</button>
      </div>
    );
  }
  
  export default LanguageSelector;
  