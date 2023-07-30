import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <div className="login-container w-full">
        <div className="row-one">
          <div className="col-one w-full flex flex-col items-center mt-24 mb-8 ">
            <h2 className="text-3xl">LOG IN</h2>
            <br />
            <form>
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
      </div>
    </>
  );
}
