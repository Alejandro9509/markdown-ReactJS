import logo from './logo.svg';
import './App.css';
import React, { createRef } from 'react';
import { marked } from 'marked'; 



//React 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      html :  ''
    }
    this.txt = this.getTextAreaValue.bind(this);
    this.myRef = createRef() 
    
  }
  getMarkdownText() {
    var rawMarkup = marked.parse(this.state.html);
    return { __html: rawMarkup };
  }
  getTextAreaValue(event) {
    this.setState({
      html: event.target.value, 
    })
  }
  render() {
    return (
      <div>
      <textarea ref={this.myRef} id="editor" value={"dick"} onChange={this.txt}>
        # h1
      </textarea>
      <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
      </div>
    )
  }
}

export default App;
