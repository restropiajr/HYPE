import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className="footer-container w-full bg-black">
        <div className="row-one">
          <div className="col-one w-full flex justify-center">
            <div className="flex flex-col items-center">
              <h2 className="text-white text-center text-xl m-2">FOLLOW US</h2>
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
              <div className="img-wrapper w-24 m-2">
                <img
                  className="w-full"
                  src="/images/hype-logo.png"
                  alt="hype-logo"
                />
              </div>
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
