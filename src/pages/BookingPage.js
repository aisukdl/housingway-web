import BookingForm from "../components/BookingForm";
import Navbar from "../components/Navbar";
import '../styles/BookingPage.css'

function BookingPage(){
    return(
        <div className="booking-page">
            <Navbar />
            <BookingForm />
        </div>
    )
}

export default BookingPage