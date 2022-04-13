
import './App.css';
import React, { createRef, useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Table} from 'react-bootstrap'


const defaultValue = "# Presentacion basica de Markdown <br>\n Este proyecto fue gracias a la herramienta de [Marked] \n"
      defaultValue += "y tambien en conjunto de **bibliotecas** integradas en este proyecto como:\n"
      defaultValue += "- React-Bootstrap\n- React\n\n"
      defaultValue += "[Marked]: https://github.com/markedjs/marked/"


const showExample = [
  'Texto<br>\n======',
  'Texto<br>\n---------',
  '**Texto** ',
  '- Texto<br>\n- Texto',
  '[Link] <br><br>\n\n [Link]: https://github.com/Alejandro9509/Alejandro9509'
]
function ModalTutorial(){
  const [show, setShow] = useState(false)
  return (
    <React.Fragment>
      <Button onClick={() => setShow(true)}>Mostrar tutorial</Button>
      <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Tutorial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ejemplo</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
               {
                 showExample.map((i) =>
                   <tr key={i}>
                      <td className='col-sm' dangerouslySetInnerHTML={{ __html: i }}></td>
                      <td className='col-sm' dangerouslySetInnerHTML={{ __html: marked.parse(i) }}></td>
                   </tr>
                  )
               }
             </tbody>
           </Table>
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
          <textarea defaultValue={defaultValue} ref={this.myRef} id="editor" className='md-textarea form-control col-sm' rows="10" onChange={this.txt}></textarea>

          <div className='col-sm' id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.html) }}></div>
        </div>

      </div>
    )
  }
}

export default App;
