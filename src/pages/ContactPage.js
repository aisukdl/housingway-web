import Navbar from "../components/Navbar";
import '../styles/ContactPage.css'

function ContactPage(){
    return (
    <div className="contact-page">
        <Navbar />
        <img alt="" src="https://pbs.twimg.com/media/FoVRlOtacAAZCC6?format=jpg&name=medium"/>
        <h3>Alwyn Housingway</h3>
        <p>twitter: <a href="https://twitter.com/Alwyn_FFXIV">@Alwyn_FFXIV</a></p>
        <p><a href = "https://twitter.com/search?q=%23AlwynHousing">#AlwynHousing</a></p>
    </div>
    )
}

export default ContactPage;