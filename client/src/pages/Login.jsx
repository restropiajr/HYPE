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
      <div className="login-container relative w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center ">
            <h2 className="text-3xl">LOG IN</h2>
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
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              <button
                disabled={isLoading}
                type="submit"
                className="m-4 block w-80 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
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
