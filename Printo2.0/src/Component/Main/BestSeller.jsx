import Card2 from "./Card2";
import "./Main.css";

export default function BestSeller() {
  return (
    <>
      <div className="flex items-center justify-center my-6 mt-12">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="px-4 font-bold text-gray-700">Best Seller</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="Container">
        <Card2
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/Untitled-1_1747500204.jpg?quality=70&format=webp&w=384"
          }
          para={"For Startups"}
        />
        <Card2
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/Untitled-1_1747500204.jpg?quality=70&format=webp&w=384"
          }
          para={"For Startups"}
        />
        <Card2
          img={
            "https://printo-s3.dietpixels.net/site/2025/Marketing%20page/labels_1745405021.jpg?quality=70&format=webp&w=384"
          }
          para={"For Startups"}
        />
        <Card2
          img={
            "https://printo-s3.dietpixels.net/site/2025/Marketing%20page/labels_1745405021.jpg?quality=70&format=webp&w=384"
          }
          para={"For Startups"}
        />
       
      </div>
    </>
  );
}
