import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { MAPBOX_ACCESS_TOKEN } from "../../data/key";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;

export default Map;
