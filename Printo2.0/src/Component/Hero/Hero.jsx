export default function Hero() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide mt-4">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://printo-s3.dietpixels.net/cloudinary/Images/3_1749588733.jpg?quality=70&format=webp&w=1920" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://printo-s3.dietpixels.net/cloudinary/Images/1_1749588733.jpg?quality=70&format=webp&w=1920" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://printo-s3.dietpixels.net/cloudinary/Images/2_1749588733.jpg?quality=70&format=webp&w=1920" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
 
    </>
  );
}
