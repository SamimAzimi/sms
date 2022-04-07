import React,{useContext, useState} from 'react'
import { Modal } from 'react-bootstrap'
import {DataContext} from './Context'
function Spinner() {
    const {spinner} =useContext(DataContext)

  return (
            <Modal fullscreen={true} show={spinner} >
            <Modal.Body>
            <div className='position-absolute top-50 start-50 translate-middle'><div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>  
              
            </Modal.Body>   

            </Modal>
  
  )
}

export default Spinner