import Navbar from '../components/Navbar';
import '../styles/InfoPage.css'
function InfoPage(){
    return(
        <div className="info-page">
            <Navbar />
            <h1>Info</h1>
            <p>- I accept payment as <b>gil</b> only</p>
            <p>- Commission outside Japanese DC, customer needs to prepare furnitures for me or can provide gil as well</p>
            <p>- once final payment is done, I will do only minor adjustments (at my discretion)</p>
            <p>- contact via text message in <b>twitter DM</b> or <b>discord DM</b></p>
            <p>- I always post work progression on Twitter, please inform in advance if you don't want me to post until it is done</p>
            <p>- working duration usually between 1-3 weeks</p>
        </div>
    )
}
export default InfoPage;


