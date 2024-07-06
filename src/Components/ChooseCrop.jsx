import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import CropArray from "../Data/CropArray";
import axios from "axios";

const ChooseCrop = () => {
  const [crops, setCrops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get("https://stork-magical-muskox.ngrok-free.app/api/crops", {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });

        if (response.headers["content-type"].includes("application/json")) {
          setCrops(response.data);
        } else {
          console.error("Unexpected content type:", response.headers["content-type"]);
          setError("Unexpected response format. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching crops data:", error);
        setError("Failed to fetch crops data. Please try again later");
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) {
    return (
      <div className="main">
        <NavBar />
        <div className="choose-crop-content">
          <h1 className="choose-crop-header" style={{alignSelf:"center"}}>Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main">
        <NavBar />
        <div className="choose-crop-content">
          <p className="choose-crop-header" style={{alignSelf:"center"}}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <NavBar />
      <div className="choose-crop-content">
        <h1 className="choose-crop-header">Choose a crop</h1>
        <div className="crops">
          {crops.map((crop,i) => (
            <Link style={{ textDecoration: "none" }} to={`/Library/${crop.id}`} key={crop.id}>
              <div className="crop">
                <img src={CropArray[i]._icon} alt="..."/>
                <h3>{crop.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCrop;
