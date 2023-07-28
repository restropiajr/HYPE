import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <div className="login-container w-full">
        <div className="login-row flex">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl">LOG IN</h2>
            <br />
            <form>
              <label>
                <input
                  required
                  className="border-black border-2 p-2 m-4 block rounded text-xl w-96"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </label>
              <label>
                <input
                  required
                  className="border-black border-2 p-2 m-4 block rounded text-xl w-96"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              <button
                type="submit"
                className="border-black border-2 p-2 m-4 block rounded text-xl w-96 transition duration-200 ease-in-out md:hover:bg-red-600">
                LOG IN
              </button>
            </form>
            <Link to="/signup">
              <p className="text-xl">Don't have an account? Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
