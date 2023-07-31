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
      <div className="signup-container relative w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center">
            <h2 className="text-3xl">SIGN UP</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  required
                  className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </label>
              <label>
                <input
                  required
                  className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </label>
              <label>
                <input
                  required
                  className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              <button
                disabled={isLoading}
                type="submit"
                className="m-4 block w-80 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
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
          <div className="absolute right-[42%] top-[50%] z-10 md:right-[48%]">
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
