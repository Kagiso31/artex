import { API_KEY } from "../../config";

const Map = () => {
  const MAP_MODE = "place";
  const PARAMETERS = "Brooklyn+Heights+Promenade,New+York+USA";
  return (
    <section className="map">
      <iframe
        src={`https://www.google.com/maps/embed/v1/${MAP_MODE}?key=${API_KEY}&q=${PARAMETERS}`}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Map;
