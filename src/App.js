
import './App.css';
import React, { createRef, useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap'

const showExample = [
  ['Ejemplo 1 <br>======', marked.parse('Ejemplo 1 \n======')],
  ['Ejemplo 2 <br>------', marked.parse('Ejemplo 2 \n------')]
]


function ModalTutorial(){
  const [show, setShow] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setShow(true)}>Mostrar tutorial</Button>
      <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Cobrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {
             showExample.map((i) =>
               <div className='row'>
                <div className='col-sm' dangerouslySetInnerHTML={{ __html: i[0] }}></div>
                <div className='col-sm' dangerouslySetInnerHTML={{ __html: i[1] }}></div>
               </div>
              )
           }
          </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

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
        <ModalTutorial />
        <div className="md-form row" style={{marginTop: 20}}>
          <textarea defaultValue="# h1" ref={this.myRef} id="editor" className='md-textarea form-control col-sm' cols='50' onChange={this.txt}></textarea>
          <div className='col-sm' id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.html) }}></div>
        </div>

      </div>
    )
  }
}

export default App;
