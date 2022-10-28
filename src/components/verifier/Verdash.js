import React from 'react';
import './verdash.css';
import {GrDocumentPdf} from 'react-icons/gr';
import Vernav from './Vernav';

function Verdash() {
  return (
    <div className='verDash-main'>
        <Vernav/>
        <div className='top-row'>
            <h5>Document Name</h5>
            <h5>Created On</h5>
            <h5>status</h5>
            <h5>from</h5>
        </div>
        <div className='doc-sent'>
            <GrDocumentPdf/>
            <span>Matric certificate</span>
            <span>22 september 2022</span>
            <span className='status-span'>complete</span>
            <span>steve<br></br>steven@gmail.com</span>
            <button>verify</button>
        </div>
    </div>
  )
}

export default Verdash