import Crop from './CropClass';
import Disease from './DiseaseClass';
import appleImage from '../images/AppleIcon.png';
import tomatoImage from '../images/TomatoIcon.png';
import wheatImage from '../images/WheatIcon.png';
import cornImage from '../images/CornIcon.png';
import potatoImage from '../images/PotatoIcon.png';
import sugarcaneImage from '../images/SugarcaneIcon.png';
import cottonImage from '../images/CottonIcon.png';
import Apple from '../images/Apple.png';
import Tomato from"../images/Tomato.jpg";
import potato from "../images/Potato.jpeg";
import corn from "../images/Corn.jpeg";
import cotton from "../images/Cotton.jpg";
import sugarcane from "../images/Sugarcane.jpg";
import wheat from "../images/wheat (2).jpg";
import wheatdis1 from "../images/Brown-rust.jpg";
import wheatdis2 from "../images/Yellow-rust.jpg";
import tomatodis5 from "../images/Yellow-Leaf-Curl.jpg";
import tomatodis4 from "../images/Septoria-Leaf-Spot.jpg";
import tomatodis3 from "../images/Late-Blight.jpg";
import tomatodis2 from "../images/Early-Blight.jpg";
import tomatodis1 from "../images/bacterial-spot.jpg";
import appledis3 from "../images/cedar-apple-rust.jpeg";
import appledis2 from "../images/black-rot.jpg";
import appledis1 from "../images/apple-scab.jpg";
import sugardis4 from "../images/Yellow-Leaf-Virus.jpg";
import sugardis3 from "../images/Sugar_Rust.png";
import sugardis2 from "../images/RedRot.jpg";
import sugardis1 from "../images/Mosaic.jpg";
import potatodis1 from "../images/Early-blight.jpeg";
import potatodis2 from "../images/Late-blight (2).jpg";
import cottondis3 from "../images/fussarium_wilt.jpg";
import cottondis2 from "../images/Curl_Virus.jpg";
import cottondis1 from "../images/bacterial_blight.jpg";
import corndis1 from"../images/Cercospora-Leaf-Spot.jpeg";
import corndis2 from"../images/Common-rust.jpg";
import corndis3 from"../images/Northern_Leaf_Blight.JPG";


// Define diseases for each crop
const appleDiseases = [
  new Disease(11, appledis1, "Cedar Apple Rust", "Fungal infection with two hosts: juniper and apple trees", "Wind carries spores from juniper trees","Remove cedar trees near apple orchards if feasible, fungicide sprays on apple trees","Fungicide sprays (preventative only)"),
  new Disease(12, appledis2, "Black Rot", "Fungal infection by Botryosphaeria obtusa", "Spores spread by wind and rain", "Prune for good air circulation, avoid injuring fruit, harvest apples at maturity", "Fungicide sprays, remove infected fruits"),
  new Disease(13, appledis3, "Apple Scab", "Fungal infection by Venturia inaequalis", "Rain splashing spores from fallen leaves", "Dormant fungicide sprays, sanitation (remove fallen leaves)", "Fungicide sprays")
];

const tomatoDiseases = [
  new Disease(1, tomatodis1, "Bacterial Spot", "Bacterial infection by Xanthomonas perforans or Xanthomonas vesicatoria", "Splashing water, wind, rain, insects, contaminated tools","Disease-resistant varieties, crop rotation, clean garden","Remove infected parts, copper fungicide (limited effectiveness)"),
  new Disease(2, tomatodis2, "Early Blight","Fungal infection by Alternaria solani","Wind, rain, splashing water","Water at base, improve air circulation by pruning, crop rotation, disease-resistant varieties","Copper fungicide, remove infected leaves"),
  new Disease(3, tomatodis3, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(4, tomatodis4, "Septoria Leaf Spot","Fungal infection by Septoria lycopersici","Wind, rain, splashing water","Crop rotation, sanitation (remove plant debris), watering at base","Copper fungicide, remove infected leaves"),
  new Disease(5, tomatodis5, " Leaf Curl Virus","Tomato yellow leaf curl virus (TYLCV) transmitted by whiteflies","Whiteflies","Control whiteflies (insect traps, insecticidal soap), use insect netting","No effective treatment, remove infected plants")
];

const wheatDiseases = [
  new Disease(21, wheatdis1, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(2, wheatdis2, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
];

const cornDiseases = [
  new Disease(8, corndis1, "Bacterial Spot", "Bacterial infection by Xanthomonas perforans or Xanthomonas vesicatoria", "Splashing water, wind, rain, insects, contaminated tools","Disease-resistant varieties, crop rotation, clean garden","Remove infected parts, copper fungicide (limited effectiveness)"),
  new Disease(9, corndis2, "Bacterial Spot", "Bacterial infection by Xanthomonas perforans or Xanthomonas vesicatoria", "Splashing water, wind, rain, insects, contaminated tools","Disease-resistant varieties, crop rotation, clean garden","Remove infected parts, copper fungicide (limited effectiveness)"),
  new Disease(10, corndis3, "Bacterial Spot", "Bacterial infection by Xanthomonas perforans or Xanthomonas vesicatoria", "Splashing water, wind, rain, insects, contaminated tools","Disease-resistant varieties, crop rotation, clean garden","Remove infected parts, copper fungicide (limited effectiveness)"),
];

const potatoDiseases = [
  new Disease(6, potatodis1, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(7, potatodis2, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
];

const sugarcaneDiseases = [
  new Disease(17, sugardis1, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(18, sugardis2, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(19, sugardis3, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(20, sugardis4, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
];

const cottonDiseases = [
  new Disease(14, cottondis1, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(15, cottondis2, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),
  new Disease(16, cottondis3, "Late Blight","Fungal infection by Phytophthora infestans","Cool, moist weather, wind, rain","Fungicide sprays, crop rotation, resistant varieties","Fungicide sprays, remove infected plant parts"),

];

const cropArray = [
  new Crop(1, wheatImage, "Wheat", wheat, wheatDiseases),
  new Crop(2, appleImage, "Apple", Apple, appleDiseases),
  new Crop(3, cornImage, "Corn", corn, cornDiseases),
  new Crop(4, potatoImage, "Potato", potato, potatoDiseases),
  new Crop(5, tomatoImage, "Tomato", Tomato, tomatoDiseases),
  new Crop(6, sugarcaneImage, "Sugarcane", sugarcane ,sugarcaneDiseases),
  new Crop(7, cottonImage, "Cotton", cotton, cottonDiseases)
];

export default cropArray;
