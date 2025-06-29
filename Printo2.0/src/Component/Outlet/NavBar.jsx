import "./Outlet.css";
import SearchIcon from "@mui/icons-material/Search";
export default function NavBar() {
  return (
    <div className="mainContainer sticky top-0 z-50 bg-white">

      <div className="container2">
        <div className="firstContain">
          <img
            src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320"
            alt="picture"
            className="banner"
            
          />
            <input type="text" placeholder="Search"  className="search-bar"></input>
          </div>

        <div className="secondContain">
            <p className="element" > <i class="fa-solid fa-comments"></i> Help Center</p>
            <p className="element" ><i class="fa-solid fa-user"></i>     Login/Signup </p>
            <p className="element" ><i class="fa-solid fa-cart-shopping"></i></p>
        </div>
      </div>
    </div>
  );
}
