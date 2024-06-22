import { BackgroundImage } from "./BackgroundImage.jsx"

//images
import crewBackMobile from '../assets/crew/background-crew-mobile.jpg';
import crewBackTablet from '../assets/crew/background-crew-tablet.jpg';
import crewBackDesktop from '../assets/crew/background-crew-desktop.jpg';

export const Crew = () => {
  return (
    <section>
        <BackgroundImage
            imgMobile={crewBackMobile}
            imgTablet={crewBackTablet}
            imgDesktop={crewBackDesktop}
        />
        <div></div>

    </section>
  )
}
