import Navbar from '../components/Navbar';
import '../styles/QueuePage.css'
import * as orderApi from '../api/order-api'
import { useEffect, useState } from 'react';
function MyOrderPage(){
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
        const fetchOrder = async () => {
          const res = await orderApi.fetchAllOrderByUserId();
          const newData = [...res.data.order]
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
          }, []);
          setOrders(groupedOrders);
        };
        fetchOrder();
      } catch (error) {
        console.error(error);
      }
  }, []);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const deleteOrder = async (id) => {
    try {
      await orderApi.deleteOrder(id);
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
      
    return(
        <div className='queue-page'>
            <Navbar />
            <h1>my order</h1>
            <table className="table table-bordered">
                <tbody>
                <tr style={{textAlign:'center'}}>
                    <td>order id</td>
                    <td>date</td>
                    <td>name</td>
                    <td>type</td>
                    <td>service</td>
                    <td>status</td>
                    <td>comment</td>
                    <td>action</td>
                </tr>
                {orders.map((item) => (
                <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString("en-GB", options)}</td>
                    <td>{item.User.username} @ {item.Server.serverName}</td>
                    <td>{item.houseType}</td>
                    <td>{item.services.join(', ')}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.Comment.comment}
                    </td>
                    <td>
                        <button onClick={() => deleteOrder(item.id)}  className={item.status ==='PENDING' ? 'btn btn-danger':'hidden-item' }style={{margin:'10px'}}>cancel</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
           
        </div>
    )
}

export default MyOrderPage;