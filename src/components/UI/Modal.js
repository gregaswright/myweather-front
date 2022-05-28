import React, { useRef, useEffect } from "react";
import Button from './Button' 

const Modal = ({children, open, onRequestClose, closeOnOutsideClick, className, ...props}) => {
    const dialog = useRef(null)


    useEffect(() => {
        const dialogNode = dialog.current
        if (open) {
            dialogNode.showModal()
        } else {
            dialogNode.close()
        }
    }, [open])

    useEffect(() => {
        const dialogNode = dialog.current
        const handleCancel = (event) => {
            event.preventDefault()
            onRequestClose()
        }
        dialogNode.addEventListener('cancel', handleCancel)
      return () => {
        dialogNode.removeEventListener('cancel', handleCancel)
      }
    }, [onRequestClose])

    const handleOutsideClick = (event) => {
        const dialogNode = dialog.current;
        if (closeOnOutsideClick && event.target === dialogNode) {
          onRequestClose();
        }
      }
    
    return (
        <dialog 
            ref={dialog} 
            className={`modal ${className}`} 
            onClick={handleOutsideClick}
        >
                <Button onClick={onRequestClose}>
                    X
                </Button>
            <header>
                {children[0]}
            </header>
            {children[1]}
        </dialog>
    )
}

export default Modal