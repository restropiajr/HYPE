import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../lib/AppContext';
import { signInFetcher } from '../lib';
import { Vortex } from 'react-loader-spinner';

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
      await signInFetcher(event);
      navigate('/login');
    } catch (error) {
      alert(`Error registering user: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bottom-[30%] flex items-center justify-center">
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'black', 'red', 'black', 'red', 'black']}
        />
      </div>
    );
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
      </div>
    </>
  );
}
