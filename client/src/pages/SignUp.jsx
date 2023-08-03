import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpFetcher, AppContext } from '../lib';
import { LoadingSpinner } from '../components';

export function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

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
      await signUpFetcher(event);
      navigate('/login');
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="signup-container relative w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center">
            <h2 className="text-3xl">SIGN UP</h2>
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
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                required
                className="m-4 block w-80 rounded border-2 border-black p-2 text-lg"
                type="password"
                name="password"
                placeholder="Password"
              />
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
      </div>
    </>
  );
}
