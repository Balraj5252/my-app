import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import {addOperator} from '../redux/action';
import {useState} from 'react'
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')



const MessageForm = (props) => {
    const dispatch = useDispatch();

    const [modalIsOpen,setIsOpen] = React.useState(props.isOPen);

    function closeModal(){
        setIsOpen(false);
        props.close()
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior (page reload)
        console.log('Message submitted:', form.name);
        // In a real application, you would send this message to a server or process it
    }

    const [form, setForm] = useState({
        name:'',
        objective:'',
        inprogress:''
    });

    const handleChange =(e) => setForm({...form, [e.target.name]: e.target.value});

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}>

                <form onSubmit={(e)=>{
                    e.preventDefault();
                    let newOperator = {
                        ...form,
                        id:Math.random(),
                    };
                    dispatch(addOperator(newOperator));
                    closeModal();
                }}>

                    <label>Operator name</label>
                    <input type="text" value={form.name} name='name' onChange={handleChange} required/>

                    <label>Objective</label>
                    <input type="text" value={form.objective} name='objective' onChange={handleChange} required/>

                    <div>
                        <button className="btn btn-primary" type="submit">Add</button>
                        <button className="btn btn-danger" onClick={closeModal}>Cancel</button>
                    </div>

                </form>

            </Modal>
        </div>
    )
}

export default MessageForm
