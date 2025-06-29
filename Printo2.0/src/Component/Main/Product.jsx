import Card from "./Card";
export default function Product() {
  return (
    <>
      <div className="flex items-center justify-center my-6 mt-12">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="px-4 font-bold text-gray-700">Popular Categories</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="Container">
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />
        <Card
          img={
            "https://printo-s3.dietpixels.net/cloudinary/Images/App_1749109485.jpg?quality=70&format=webp&w=640"
          }
        />

      </div>
    </>
  );
}
