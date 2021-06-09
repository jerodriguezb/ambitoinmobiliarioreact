import React from "react";
import "../css/googlemaps.css";

const SimpleMap = (props) => {
  const lat = props.data;
  const lng = props.data2;
  return (
    <>
      <iframe className="googlemaps"
        // 1d222.51306438688448 Paramtero de ZOOM
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1780.9268276388577!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1623247501622!5m2!1ses-419!2sar`}
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};
export default SimpleMap;


// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1780.9268276388577!2d-65.22846437198974!3d-26.78093447714968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1623280012813!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>