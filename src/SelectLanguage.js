import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

const getLanguages = (languages) => Object.keys(languages)
  .map(languageKey => ({
    key: languageKey, 
    text: languages[languageKey].LANGUAGE_STRING
  }))



class SelectLanguage extends Component {
  handleClick = () => {
    const value = this.select.value;
    this.props.onChangeLang(value);
  }
  render() {
    const { currentLang, languages } = this.props;
    const langs = getLanguages(languages);
    return (
      <div className="select-lang">
        <select ref={select => this.select = select}>
          {
            langs.map(lang => (
              <option key={lang.key} value={lang.key}>{lang.text}</option>
            ))
          }
        </select>
        <button onClick={this.handleClick}>
          {languages[currentLang].SELECT_LANGUAGE}
        </button>
      </div>
    );
  }
}

class SelectLanguageWrapper extends Component {
  render () {
    return (
      <LanguageContext.Consumer>
        {
          ({currentLang, languages, onChangeLang}) => (
            <SelectLanguage
              currentLang={currentLang}
              languages={languages}
              onChangeLang={onChangeLang}
            />
          )
        }
      </LanguageContext.Consumer>
        
    )
  }
}

export default SelectLanguageWrapper