import Navbar from '../components/Navbar';
import '../styles/QueuePage.css'
import * as queueApi from '../api/queue-api'
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import * as orderApi from '../api/order-api'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router'

function QueuePage(){
  const { authenticatedUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [showEditStatus,setShowEditStatus] = useState(false);
  const [status,setStatus] = useState("");
  const navigate = useNavigate();

  const HandleEditButton = () => {
    setShowEditStatus(true)
  }

  const handleChangeSelect = (e) => {
    setStatus(e.target.value)
  } 

  const HandleSubmitForm = async (orderId) => {
    try {
      await orderApi.updateOrder(orderId,status);
      setStatus("");
      await toast.success('edit completed!');
      navigate(0);
    } catch (err) {
      toast.error('edit error!');
    }
  }

  useEffect(() => {
    try {
        const fetchOrder = async () => {
          const res = await queueApi.fetchQueue();
          const newData = Object.values(res.data.order)
          const groupedOrders = newData.reduce((acc, curr) => {
            if (acc[curr.id]) {
              acc[curr.id].services.push(curr.Service.serviceName);
            } else {
              acc[curr.id] = {
                ...curr,
                services: [curr.Service.serviceName]
              };
            }
            return acc;
          }, {});
          setOrders(Object.values(groupedOrders));
        };
        fetchOrder();
      } catch (error) {
        console.error(error);
      }
  }, []);
      
    return(
        <div className='queue-page'>
            <Navbar />
            <h1>Queue</h1>
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <td>order id</td>
                    <td>name</td>
                    <td>type</td>
                    <td>service</td>
                    <td>status</td>
                </tr>
                {orders.map((item) => (
                <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{item.User.username} @ {item.Server.serverName}</td>
                    <td>{item.houseType}</td>
                    <td>{item.services.join(', ')}</td>
                    <td>
                      {item.status} 
                      {authenticatedUser?.role === 'ADMIN' && !showEditStatus? <button className='btn btn-danger btn-sm' onClick={HandleEditButton}>edit</button>: "" }
                      {showEditStatus && 
                      <>
                        <select name='status' onChange={handleChangeSelect}>
                          <option></option>
                          <option value="PENDING">PENDING</option>
                          <option value="WIP">WIP</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="REJECTED">REJECTED</option>
                        </select>
                        <button className='btn btn-sm btn-primary' onClick={()=>HandleSubmitForm(item.id)}>submit</button>
                      </>
                        
                        }
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
           
        </div>
    )
}

export default QueuePage;