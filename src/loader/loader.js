import loaderImg from "../assets/images/loader.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-center" >
      <img src={loaderImg} alt="loading....."/>
    </div>
  )
}
export default Loader;