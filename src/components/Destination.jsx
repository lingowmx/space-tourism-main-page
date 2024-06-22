import { BackgroundImage } from "./BackgroundImage";

//images
import destBackMobile from "../assets/destination/background-destination-mobile.jpg";
import destBackTablet from "../assets/destination/background-destination-tablet.jpg";
import destBackDesktop from "../assets/destination/background-destination-desktop.jpg";
//fetch data dunction
import { fetchData } from "../api.js";
//estados
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Destination = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        console.log("Fetched data:", result);
        const foundDestination = result.destinations.find(
          (destinations) => destinations.name.toLowerCase() === name.toLowerCase()
        );
        if (!foundDestination) {
          throw new Error(`Destination ${name} not found`);
        }
        setData(foundDestination);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    getData();
  }, [name]);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <BackgroundImage
        imgMobile={destBackMobile}
        imgTablet={destBackTablet}
        imgDesktop={destBackDesktop}
      />
      <section className="text-white">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </section>
    </main>
  );
};
