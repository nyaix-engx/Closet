import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ModalContent from './ModalContent';

const Modal = (props) => {
  const [show,setShow]=useState(false)
  const [timeToClose,setTimeToClose]=useState(false)
  useEffect(()=>{
    if(props.showModal && !show){
      setShow(true)
    }else if(!props.showModal && show){
      setTimeToClose(true)
      setTimeout(() => {
        setShow(false)
      }, props.animationTime);
    }
  },[props.showModal])
  if (show) {
    return (
      <ModalContent
        {...props}
        showContent={show}
        setShow={setShow}
        timeToClose={timeToClose}
      />
    );
  } else {
    return <></>;
  }
};

export default Modal;
