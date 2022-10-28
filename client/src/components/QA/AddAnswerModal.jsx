import React from 'react'
import styled from 'styled-components'
import {PropTypes} from 'prop-types'
import {ModalBackground, ModalStyle, ModalWrapper, ModalContent, CloseModalButton, ModalForm} from './assets/styles.js'
import axios from 'axios'


const {useState, useRef} = React;

const AddAnswerModal = ({openAModal, questionId, shouldFetchA, setShouldFetchA}) => {




  //state & refs
  const answerRef = useRef(null)
  const nicknameRef = useRef(null)
  const emailRef = useRef(null)

  //handler & helpers
  const newPostObj = (answer, nickname, email, photos) => {
    const dataObj = {
      body: answer,
      name: nickname,
      email: email,
      photos: []
    }
    return dataObj;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataObj = newPostObj(answerRef.current.value, nicknameRef.current.value, emailRef.current.value)

    const config = {params: {question_id: questionId}}

    axios.post('/qa/questions/:question_id/answers', dataObj, config)
    .then((res)=>{
      setShouldFetchA(!shouldFetchA)
      openAModal()
    })
    .catch((err)=>{

    })
  }

  //component
  return (
    <>
        <ModalBackground>
          <ModalWrapper>
            <ModalContent className = 'modalForm'>
              <h2 className='modalheader'>Have a Question?</h2>
              <ModalForm onSubmit={(e) => {handleSubmit(e)}}  >
                <span className='formSpan'>Your Answer *</span>
                <textarea type='text' className='formTextArea' maxLength='1000' ref={answerRef}required='required'></textarea>
                <span className='formSpan'>Your Nickname *</span>
                <input type='text' className='formInput'  maxLength='60' placeholder='Example: WickedCool1337' ref={nicknameRef} required='required'></input>
                <span className='formSpan'placeholder>Your Email *</span>
                <input type='text' className='formInput'  maxLength='60' placeholder='Why did you like the product?' ref={emailRef} required='required'></input>
                <span className='finalSpan'>For authentication reasons, you will not be emailed</span>
                <button className='submit'>Submit</button>
              </ModalForm>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={openAModal}/>
          </ModalWrapper>
        </ModalBackground>
    </>
  )
}

//proptypes
AddAnswerModal.propTypes = {
  openModal: PropTypes.func,
  productId: PropTypes.string,
  setProductId: PropTypes.func,
  setShowModal: PropTypes.func,
  shouldFetchQ: PropTypes.bool,
  setShouldFetchQ: PropTypes.func,
}

export default AddAnswerModal;



