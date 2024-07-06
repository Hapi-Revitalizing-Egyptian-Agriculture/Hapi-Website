import { useParams, Link } from "react-router-dom";
import CropArray from "../Data/CropArray";
import NavBar from "./NavBar.tsx";
import Search from "./Search";
import pest from "../images/pest 1.png";
import arrow from "../images/Vector.png";
import axios from "axios";
import { useEffect, useState } from "react";

const CropDiseases = () => {
  const { id } = useParams(); // Assuming this is CropID
  const [diseases, setDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchDiseases = async (query = '') => {
    try {
      let url;
      if (query) {
        url = `https://stork-magical-muskox.ngrok-free.app/api/crops/${id}/diseases/search?query=${query}`;
        const response = await axios.get(url, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        if (response.headers["content-type"].includes("application/json")) {
          console.log(response.data);
          setDiseases(response.data);
        } else {
          console.error("Unexpected content type:", response.headers["content-type"]);
          setError("Unexpected response format. Please try again later.");
        }
      } else {
        url = `https://stork-magical-muskox.ngrok-free.app/api/crops/${id}/diseases`;
        const response = await axios.get(url, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        if (response.headers["content-type"].includes("application/json")) {
          console.log(response.data[0]);
          setDiseases(response.data[0]); 
        } else {
          console.error("Unexpected content type:", response.headers["content-type"]);
          setError("Unexpected response format. Please try again later.");
        }
      }
      
    } catch (error) {
      console.error("Error fetching diseases data:", error);
      setError("Failed to fetch diseases data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiseases();
  }, [id]);

  useEffect(() => {
    if (searchQuery) {
      fetchDiseases(searchQuery);
    } else {
      fetchDiseases();
    }
  }, [searchQuery, id]);

  const selectedCrop = CropArray.find((crop) => crop._id === parseInt(id));

  if (!selectedCrop) {
    return <div>No details found for this crop</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main">
      <NavBar />
      <div className="Crop-disease-content">
        <div className="crop-disease-cont-up">
          <div className="switch-content">
            <Link
              style={{ textDecoration: "none" }}
              to={`/Library/${selectedCrop._id}`}
              key={selectedCrop._id}
            >
              <div className="crop-name">
                <img
                  width="25"
                  height="25"
                  src={selectedCrop._icon}
                  alt={selectedCrop._name}
                />
                <h3>{selectedCrop._name}</h3>
              </div>
            </Link>
            <img width="20" height="20" src={arrow} alt="..." />
            <Link
              style={{ textDecoration: "none" }}
              to={`/Library/${selectedCrop._id}/diseases`}
              key={selectedCrop._id}
            >
              <div className="crop-name">
                <img width="25" height="25" src={pest} alt="..." />
                <h3>Diseases</h3>
              </div>
            </Link>
          </div>
          <Search onSearch={setSearchQuery} />
        </div>
        <div className="crop-disease-cont-down">
          <div className="disease-type">
            {searchQuery ? (
              diseases.length > 0 ? (
                diseases.map((disease, i) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Library/${selectedCrop._id}/diseases/${disease.id}`}
                    className="type1"
                    key={disease.id}
                  >
                    <img src={selectedCrop._diseases[i]._img} alt="..." />
                    <h3>{disease.name}</h3>
                  </Link>
                ))
              ) : (
                <div class="choose-crop-header">No diseases found matching '{searchQuery}'</div>
              )
            ) : (
              diseases.map((disease, i) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/Library/${selectedCrop._id}/diseases/${disease.id}`}
                  className="type1"
                  key={disease.id}
                >
                  <img src={selectedCrop._diseases[i]._img} alt="..." />
                  <h3>{disease.name}</h3>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDiseases;
