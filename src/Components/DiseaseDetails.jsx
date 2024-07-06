import NavBar from "./NavBar.tsx";
import arrow from "../images/Vector.png";
import disease from "../images/pest 1.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CropArray from "../Data/CropArray";
import axios from "axios";
import { useEffect, useState } from "react";

function DiseaseDetails() {
  console.log(useParams()); 
  const { CropID, DiseaseID } = useParams();
  const [disDetails, setDisDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiseaseDetails = async () => {
      try {
        const response = await axios.get(`https://stork-magical-muskox.ngrok-free.app/api/crops/${CropID}/diseases/${DiseaseID}`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (response.headers["content-type"].includes("application/json")) {
          console.log(response.data)
          setDisDetails(response.data);
        } else {
          setError("Unexpected response format. Please try again later.");
        }
      } catch (error) {
        setError("Failed to fetch disease details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiseaseDetails();
  }, [CropID, DiseaseID]); 

  const selectedCrop = CropArray.find(crop => crop._id === parseInt(CropID));
  const selectedDisease = selectedCrop ? selectedCrop._diseases.find(disease => disease._id === parseInt(DiseaseID)) : null;

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
      <NavBar Ref="library" />
      <div className="switch-content-two">
        <Link style={{ textDecoration: "none" }} to={`/gLibrary/${selectedCrop._id}`}>
          <div className="crop-name">
            <img width="25" height="25" src={selectedCrop._icon} alt="Apple" />
            <h3>{selectedCrop._name}</h3>
          </div>
        </Link>
        <img width="20" height="20" src={arrow} alt="Arrow" />
        <Link style={{ textDecoration: "none" }} to={`/Library/${selectedCrop._id}/diseases`}>
          <div className="crop-name">
            <img width="25" height="25" src={disease} alt="Disease" />
            <h3>Diseases</h3>
          </div>
        </Link>
        <img width="20" height="20" src={arrow} alt="Arrow" />
        <Link style={{ textDecoration: "none" }} to={``}>
          <div className="crop-name">
            <h3>{disDetails.name}</h3>
          </div>
        </Link>
      </div>
      <div className="disease-details">
        {disDetails.image && <img src={selectedDisease._img} alt="Disease" />}
        <div className="field">
          <h3>Causes</h3>
          <p className="causes-details">{disDetails.causes}</p>
          <hr />
        </div>
        <div className="field">
          <h3>Spread</h3>
          <p className="management-details">{disDetails.spread}</p>
          <hr />
        </div>
        <div className="field">
          <h3>Prevention</h3>
          <p className="symptoms-details">{disDetails.prevention}</p>
          <hr />
        </div>
        <div className="field">
          <h3>Treatment</h3>  
          <p className="comments-details">{disDetails.treatment}</p>
          <hr/>
        </div>
        <div className="field">
          <h3>symptoms</h3>  
          <p className="comments-details">{disDetails.symptoms}</p> 
        </div>
      </div>
    </div>
    );
}

export default DiseaseDetails;