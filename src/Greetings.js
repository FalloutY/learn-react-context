import React, { Component } from 'react';
import LanguageContext from './LanguageContext';

class Greetings extends Component {
  render () {
    return (
      <LanguageContext.Consumer>
        {
          ({currentLang, languages}) => (
            <div className="greetings" style={{backgroundColor: languages[currentLang].BACKGROUND}}>
              <h1>{languages[currentLang].HELLO}</h1>
            </div>
          )
        }
      </LanguageContext.Consumer>

    )
  }
}
export default Greetings;
