import Navbar from "./Navbar";
import '../styles/TablePage.css'
import BookingForm from "./BookingForm";
function TablePage(props){
    return <div className="table-page-container">
        <Navbar />
        <BookingForm />
        <table>
            <tbody>
                <tr>
                    <th>
                    </th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </tbody>
           
        </table>
    </div>
}
export default TablePage