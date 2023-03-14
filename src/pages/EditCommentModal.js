import Modal from "../components/Modal";

function EditCommentModal({open,onClose,initialComment}){
    return(
        <Modal open={open} onClose={onClose} title="Log In">
            <EditCommentModal initialComment={initialComment} onClose={onClose}/>
        </Modal>
    )
}

export default EditCommentModal