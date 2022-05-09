import React, { useRef, useEffect } from "react"; 

const Modal = ({children, open, onRequestClose, className, ...props}) => {
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
    
    return (
        <dialog ref={dialog} className={`model ${className}`}>
            {children}
            <button>close</button>
        </dialog>
    )
}

export default Modal