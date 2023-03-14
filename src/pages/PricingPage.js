import Navbar from '../components/Navbar';
import '../styles/PricingPage.css'
function PricingPage(){
    return (<div className='pricing-page'>
        <Navbar />
        <h1>Pricing</h1>
        <table className="table table-bordered">
        <tbody>
            <tr>
                <th>Size</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Small</td>
                <td>6m gil</td>
            </tr>
            <tr>
                <td>Medium</td>
                <td>8m gil</td>
            </tr>
            <tr>
                <td>Large</td>
                <td>12m gil</td>
            </tr>
        </tbody>
        </table>
    </div>)
}
export default PricingPage;