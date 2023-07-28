import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className="footer-container w-full">
        <div className="footer-row flex">
          <div className="w-full flex justify-center bg-black">
            <div className="flex flex-col">
              <h2 className="text-white text-center m-2">FOLLOW US</h2>
              <div className="flex justify-center">
                <Link to="https://github.com/restropiajr/HYPE">
                  <div className="img-wrapper w-5 m-2">
                    <img src="/images/github-logo.png" alt="github-logo" />
                  </div>
                </Link>
                <Link to="https://www.linkedin.com/in/restropiajr/">
                  <div className="img-wrapper w-5 m-2">
                    <img
                      className="w-full"
                      src="/images/linkedin-logo.png"
                      alt="linkedin-logo"
                    />
                  </div>
                </Link>
              </div>
              <br />
              <p className="text-white text-xs text-center">
                Copyright &copy; 2023 Roland Estropia Jr.
              </p>
              <p className="text-white text-xs text-center mb-2">
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
