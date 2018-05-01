import React, { Component } from 'react';
import './App.css';
import languages from './languages';
import LanguageContext from './LanguageContext';
import Greetings from './Greetings';
import SelectLanguage from './SelectLanguage';

class App extends Component {
  onChangeLang = (lang) => {
    this.setState(() => ({
      currentLang: lang
    }));
  }
  state = {
    currentLang: 'en',
    languages: languages,
    onChangeLang: this.onChangeLang
  }
  render() {
    return (
      <div className="App">
        <LanguageContext.Provider value={this.state}>
          <Greetings />
          <SelectLanguage/>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
