export function Contact() {
  return (
    <>
      <div className="contact-container w-full">
        <div className="contact-row flex">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl">CONTACT US</h2>
            <br />
            <h3 className="text-xl mb-2">CUSTOMER SERVICE PHONE NUMBER:</h3>
            <p className="text-xl">(123) 456-7890</p>
            <br />
            <h3 className="text-xl mb-2">CUSTOMER SERVICE HOURS:</h3>
            <p className="text-xl">MONDAY-FRIDAY 8AM-5PM</p>
            <br />
            <h3 className="text-xl mb-2">CUSTOMER SERVICE EMAIL:</h3>
            <p className="text-xl">store@hype.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
