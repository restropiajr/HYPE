import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFetcher, AppContext } from '../lib';
import { LoadingSpinner } from '../components';

export function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { user, handleLogin } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const auth = await loginFetcher(event);
      handleLogin(auth);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="login-container relative w-full">
        <div className="row-one">
          <div
            className={`col-one ${
              error ? 'mb-0' : 'mb-8'
            } mt-24 flex w-full flex-col items-center justify-center`}>
            <h2 className="text-3xl">LOG IN</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                required
                className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                required
                className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="m-4 block w-80 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                LOG IN
              </button>
            </form>
            <p className="m-4 text-xl">
              Don't have an account?{' '}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </p>
            {error && (
              <div className="flex w-full items-center justify-center md:w-1/5">
                <p className="m-4 text-justify text-xl text-red-600">
                  ERROR: {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
