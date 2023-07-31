import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../lib/AppContext';
import { SignInFetcher } from '../lib';
import { Circles } from 'react-loader-spinner';

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      await SignInFetcher(event);
      navigate('/login');
    } catch (error) {
      alert(`Error registering user: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="signup-container w-full relative">
        <div className="row-one">
          <div className="col-one w-full flex flex-col items-center mt-24 mb-8">
            <h2 className="text-3xl">SIGN UP</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  required
                  className="border-black border-2 p-2 m-4 block rounded text-lg w-80"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </label>
              <label>
                <input
                  required
                  className="border-black border-2 p-2 m-4 block rounded text-lg w-80"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </label>
              <label>
                <input
                  required
                  className="border-black border-2 p-2 m-4 block rounded text-lg w-80"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              <button
                disabled={isLoading}
                type="submit"
                className="border-black border-2 p-2 m-4 block rounded text-xl w-80 transition duration-200 ease-in-out md:hover:bg-red-600">
                REGISTER
              </button>
            </form>
            <p className="text-xl">
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
        {isLoading && (
          <div className="absolute top-[50%] right-[42%] md:right-[48%] z-10">
            <Circles
              height="80"
              width="80"
              color="red"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
}
