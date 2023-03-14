import { useState } from "react";
import "../styles/Form.css"

function EditCommentForm({initialComment,onClose}){
    const [comment,setComment] = useState('');
    return(
        <form>
            <input type={'textarea'} defaultValue={initialComment} onChange={e=> setComment(e.target.value)}/>
            <button type="submit">edit</button>
        </form>
    )
}
export default EditCommentForm;