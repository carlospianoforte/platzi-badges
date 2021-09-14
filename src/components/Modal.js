import React from "react"
import ReactDOM from "react-dom"
import "./styles/Modal.css"

const Modal = (props) =>{
    if (!props.isOpen){
        return null
    }
    return ReactDOM.createPortal(/* que,donde */
        <div className="Modal">
            <div className="Modal_container">
                <button onClick={props.onClose} className="Modal_close-button">
                    x
                </button>

                {props.children}
            </div>
        </div>,
        document.getElementById("modal")
        )
}


export default Modal