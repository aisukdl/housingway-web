import { useEffect, useState } from "react";
import "../styles/Form.css"
import * as userApi from '../api/auth-api'
import * as utilApi from '../api/util-api'
import * as orderApi from '../api/order-api'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router'


function BookingForm(){
    const navigate = useNavigate();
    const initialInput = {
        houseType: '',
        interiorId:'',
        exteriorId: '',
        serverId: '',
        comment: ''
    };
    const [size, setSize] = useState("");
    const [me,setMe] = useState([])
    const [servers,setServers] = useState([])
    const [totalValue, setTotalValue] = useState(0);
    const [input,setInput] = useState(initialInput)
    useEffect(() => {
        const fetchUser = async () => {
          const res = await userApi.getMe();
          setMe(res.data.user);
        };
        const fetchServer = async () => {
            const res = await utilApi.fetchServer();
            setServers(res.data.server)
        }
        fetchUser();
        fetchServer();
      }, []);
      const handleChange = (event) => {
        setSize(event.target.value);
        setTotalValue(0);
        };
    const handleChangeInput = e => {
        setInput({...input,[e.target.name]:e.target.value})
    }
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setTotalValue(totalValue + parseInt(e.target.getAttribute('price')));
            setInput({...input,[e.target.name]:e.target.value})
        } else {
            setTotalValue(totalValue - parseInt(e.target.getAttribute('price')));
            setInput({...input,[e.target.name]:''})
        }
        };
    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            await orderApi.createOrder(input);
            setInput(initialInput)
            await toast.success('order completed!')
            navigate('/myorder');
            } catch (err) {
            console.log(err);
            toast.error('order error');
            }
    }
    return(
        <div>
            <form onSubmit={handleSubmitForm}>
            <p>username : {me.username}</p>
            <label htmlFor="server">server name</label>
            <select name="serverId" id="serverId" onChange={handleChangeInput}>
                <option></option>
                {servers.map((item) => (
                    <option key={item.id} value = {item.id}>{item.serverName.toLowerCase()}</option>
                ))}
            </select>
            <label htmlFor="houseType">house type</label>
            <select name="houseType" id="houseType" onChange={handleChangeInput}>
                <option></option>
                <option value="PRIVATE">private</option>
                <option value="FREE COMPANY">free company</option>
            </select>
            <label htmlFor="size">house size</label>
            <select name="size" id="size" onChange={handleChange}>
                <option></option>
                <option value='s'>s</option>
                <option value='m'>m</option>
                <option value='l'>l</option>
            </select>
            {size === 's'? <div>
            <input type="checkbox" id="exterior" name="exteriorId" price={300000} value={4} onChange={handleCheckboxChange}/>
            <label htmlFor="exterior" style={{margin:'10px'}}>exterior 300k gil</label>
            <input type="checkbox" id="interior" name="interiorId" price={6000000} value={1} onChange={handleCheckboxChange}/>
            <label htmlFor="interior" style={{margin:'10px'}}>interior 6m gil</label>
            </div>:''}
            {size === 'm'? <div>
            <input type="checkbox" id="exterior" name="exteriorId" price={500000} value={5} onChange={handleCheckboxChange}/>
            <label htmlFor="exterior" style={{margin:'10px'}}>exterior 500k gil</label>
            <input type="checkbox" id="interior" name="interiorId" price={8000000} value={2} onChange={handleCheckboxChange}/>
            <label htmlFor="interior" style={{margin:'10px'}}>interior 8m gil</label>
            </div>:''}
            {size === 'l'? <div>
            <input type="checkbox" id="exterior" name="exteriorId" price={800000} value={6} onChange={handleCheckboxChange}/>
            <label htmlFor="exterior" style={{margin:'10px'}}>exterior 800k gil</label>
            <input type="checkbox" id="interior" name="interiorId" price={12000000} value={3} onChange={handleCheckboxChange}/>
            <label htmlFor="interior" style={{margin:'10px'}}>interior 12m gil</label>
            </div>:''}
            <label htmlFor="comment"> extra request</label>
            <input type={"textarea"} name="comment" id="comment" onChange={handleChangeInput}/>
            <p>total {totalValue} gil</p>
            <button type="submit" className="primary-button" style={{margin:0}}>book now</button>
            </form>
        </div>
    )
}
export default BookingForm;


