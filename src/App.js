
import './App.css';
import React, { createRef } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  getTextAreaValue(event) {
    this.setState({
      html: event.target.value,
    })
  }
  componentDidMount(){
    this.setState({
      html: this.myRef.current.value
    })
  }
  render() {
    return (
      <div className="container-md p-2">
        <h1>Markdown basico en ReactJS</h1>
        <div className="md-form">
          <textarea ref={this.myRef} id="editor" className='md-textarea form-control' cols='50' onChange={this.txt}>
            # h1
          </textarea>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.html) }}></div>
      </div>
    )
  }
}

export default App;
