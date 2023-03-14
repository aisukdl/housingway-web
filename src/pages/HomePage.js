import BookingButton from "../components/BookingButton";
import HomeCarousel from "../components/HomeCarousel";
import YourRequestButton from "../components/MyOrder";
import Navbar from "../components/Navbar"
import useAuth from "../hooks/useAuth";
import '../styles/HomePage.css'
function HomePage(){
    const { authenticatedUser } = useAuth();
    return (
        <div className="home-container">
            <Navbar />
            
            <div style={{display:"flex",flexDirection:"row"}}>
                <div className="carousel-container">
                    <HomeCarousel />
                </div>
                <div className="text-container">
                    <img alt="" src="https://pbs.twimg.com/media/FoVRlOtacAAZCC6?format=jpg&name=medium"/>
                    <h1>Alwyn Housingway</h1>
                    <p>STATUS : CLOSE</p>
                    <p>Any datacenter</p>
                    <p>-payment on Elemental DC only-</p>
                    <p>twitter: @Alwyn_FFXIV</p>
                    <p>#AlwynHousing</p>
                    <div style={{visibility:authenticatedUser?.role ==='ADMIN'?"hidden":""}}>
                        <BookingButton />
                        <YourRequestButton />
                    </div>
            </div>
            </div>
        </div>
    )
}
export default HomePage;