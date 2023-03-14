import LogInForm from "../components/LogInForm";
import Modal from "../components/Modal";

function LogInModal({open,onClose}){
    return(
        <Modal open={open} onClose={onClose} title="Log In">
            <LogInForm onClose={onClose}/>
        </Modal>
    )
}

export default LogInModal