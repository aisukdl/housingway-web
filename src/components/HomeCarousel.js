import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import '../styles/HomeCarousel.css'
function HomeCarousel(){
    return(
        //https://www.npmjs.com/package/react-responsive-carousel
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={3000} dynamicHeight={true}>
        <div>  
            <img alt="" src="https://pbs.twimg.com/media/FoDsRTbaYAEJq1o?format=jpg"/>   
        </div>  
        <div>  
            <img alt="" src="https://pbs.twimg.com/media/Fnp48CSagAARMPJ?format=jpg" />  
        </div>  
        <div>  
            <img alt="" src="https://pbs.twimg.com/media/FXYlhpKUUAEfah0?format=jpg" />   
        </div>  
        <div>
            <img alt="" src="https://pbs.twimg.com/media/FoDs8mtacAA2V0h?format=jpg" />
        </div>
      </Carousel>
    )
}
export default HomeCarousel;