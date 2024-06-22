import { BackgroundImage } from "./BackgroundImage.jsx";

//images
import homeBackMobile from "../assets/home/background-home-mobile.jpg";
import homeBackTablet from "../assets/home/background-home-tablet.jpg";
import homeBackDesktop from "../assets/home/background-home-desktop.jpg";

export const Home = () => {
  return (
    <main>
      <BackgroundImage 
        imgMobile={homeBackMobile}
        imgTablet={homeBackTablet}
        imgDesktop={homeBackDesktop}
      />
      <section className="text-white text-center pt-24">
        <div>
          <h3 className="uppercase text-lg tracking-wider">
            So you wanto to travel to
          </h3>
          <h1 className="uppercase pt-0 pb-2 font-medium text-[5rem]">Space</h1>
          <p className="px-2 text-base tracking-wide ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="w-32 h-32 rounded-full bg-white mt-20 text-3xl text-black"
          >
            Explore
          </button>
        </div>
      </section>
    </main>
  );
};
