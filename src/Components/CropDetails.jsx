import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import back from "../images/Back.png";
import disease from '../images/pest 1.png';
import forward from '../images/forward.png';
import axios from "axios";
import { useEffect, useState } from "react";
import cropArray from "../Data/CropArray";

const CropDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState(null);

  useEffect(() => {
    const fetchCropDetails = async () => {
      try {
        const response = await axios.get(`https://stork-magical-muskox.ngrok-free.app/api/crops/${id}`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (response.headers["content-type"].includes("application/json")) {
          console.log(response.data)
          setDetails(response.data);
        } else {
          setError("Unexpected response format. Please try again later.");
        }
      } catch (error) {
        setError("Failed to fetch crop details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCropDetails();
  }, [id]);

  useEffect(() => {
    const foundCrop = cropArray.find(crop => crop._id === parseInt(id));
    setSelectedCrop(foundCrop); 
    console.log(details.image);
    
  }, [id]);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedCrop) {
    return <div>No details found for this crop</div>;
  }

  return (
    <div className='main'>
      <NavBar />
      <div className="crop-details-content">
        <div className="switch-content-one">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="crop-name">
              <img width="32" height="32" src={selectedCrop._icon} alt={selectedCrop._name} />
              <h3>{selectedCrop._name}</h3>
            </div>
          </Link>
        </div>
        <div className="crop-details">
          <div className="crop-details-right">
           <Link to ="/Library"><img className="back" style={{width:"44px" , height:"48px"}}src={back} alt="Back" /></Link> 
            {details.image && (
              <img className="crop-img" src={selectedCrop._img} width="500px" height="300px" alt={details.name} />
            )}
            <Link style={{ textDecoration: "none" }} to={`/Library/${selectedCrop._id}/diseases`} >
              <button className="diseases-but"> 
              <img src={disease} style={{width:"22px" , height:"22px"}} alt="Disease" />
              Diseases
              <img src={forward} style={{width:"15px" , height:"18px"}}  alt="Forward" />
              </button>
            </Link>
          </div>
          <div className="crop-details-left">
            <h3>Planting</h3>
            <p>{details.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropDetails;