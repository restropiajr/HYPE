import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <>
      <div className="signup-container w-full">
        <div className="signup-row flex">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl">SIGN UP</h2>
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
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                REGISTER
              </button>
            </form>
            <Link to="/login">
              <p className="text-xl">Already have an account? Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
