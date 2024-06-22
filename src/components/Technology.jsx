import { BackgroundImage } from "./BackgroundImage.jsx"

//images
import techBackMobile from '../assets/technology/background-technology-mobile.jpg';
import techBackTablet from '../assets/technology/background-technology-tablet.jpg';
import techBackDesktop from '../assets/technology/background-technology-desktop.jpg';


export const Technology = () => {
  return (
    <main>
        <BackgroundImage 
            imgMobile={techBackMobile}
            imgTablet={techBackTablet}
            imgDesktop={techBackDesktop}
        />
    </main>
  )
}
