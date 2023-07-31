import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../lib/AppContext';
import { LoginFetcher } from '../lib';
import { Circles } from 'react-loader-spinner';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, handleLogin } = useContext(AppContext);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const auth = await LoginFetcher(event);
      handleLogin(auth);
    } catch (error) {
      alert(`Error logging in: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="login-container w-full relative">
        <div className="row-one">
          <div className="col-one w-full flex flex-col items-center mt-24 mb-8 ">
            <h2 className="text-3xl">LOG IN</h2>
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
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              <button
                disabled={isLoading}
                type="submit"
                className="border-black border-2 p-2 m-4 block rounded text-xl w-80 transition duration-200 ease-in-out md:hover:bg-red-600">
                LOG IN
              </button>
            </form>
            <p className="text-xl">
              Don't have an account?{' '}
              <Link to="/signup" className="underline">
                Sign up
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
