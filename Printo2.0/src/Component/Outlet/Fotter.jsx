
export default function Footer() {
  return (
    <footer className="bg-white border-y mt-20 lowFooter">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a  href="/" className="flex items-center">
              <img
                src="https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320"
                className="mr-3 h-16"
                alt="Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Find Stores
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Delhi
                  </a>
                </li>
                <li>
                  <a a="/about" className="hover:underline">
                    Mumbai
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Bangalore
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Kolkata
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Pune
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Importtent Links{" "}
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Delivery & Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center"> ©2025 Printo Document Services Pvt. Ltd.. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
