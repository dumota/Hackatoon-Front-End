import { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Modal({ show, onClose, children }) {
    const
        [isBrowser, setIsBrowser] = useState<boolean>(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e)=>{
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div>
            <div>Modal</div>
            <a href="#" onClick={handleClose}>
                <button>Close</button>
            </a>
            <div>{children}</div>
        </div>
    ): null;

    if(isBrowser){
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    }else{
        return null;
    }


}