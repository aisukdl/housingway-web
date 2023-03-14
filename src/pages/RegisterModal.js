import Modal from "../components/Modal";
import SignUpForm from "../components/SignUpForm";

function RegisterModal({open,onClose}){
    return(
        <Modal open={open} onClose={onClose} title="Sign Up">
            <SignUpForm onClose={onClose}/>
        </Modal>
    )
}

export default RegisterModal