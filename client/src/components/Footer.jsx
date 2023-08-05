import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className="footer-container w-full bg-black">
        <div className="row-one">
          <div className="col-one flex w-full justify-center">
            <div className="flex flex-col items-center">
              <h2 className="m-2 text-center text-xl text-white">FOLLOW US</h2>
              <div className="flex justify-center">
                <Link to="https://github.com/restropiajr/HYPE" target="_blank">
                  <div className="img-wrapper m-2 w-5">
                    <img src="/images/github-logo.png" alt="github-logo" />
                  </div>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/restropiajr/"
                  target="_blank">
                  <div className="img-wrapper m-2 w-5">
                    <img
                      className="w-full"
                      src="/images/linkedin-logo.png"
                      alt="linkedin-logo"
                    />
                  </div>
                </Link>
              </div>
              <div className="img-wrapper m-2 w-24">
                <img
                  className="w-full"
                  src="/images/hype-logo.png"
                  alt="hype-logo"
                />
              </div>
              <p className="text-center text-xs text-white">
                Copyright &copy; 2023 Roland Estropia Jr.
              </p>
              <p className="mb-2 text-center text-xs text-white">
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
