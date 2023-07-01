import React, { useState } from "react";



const Footer = () => {
  const [data, setData] = useState({ username: '', email: '' });
  const [submit, setSubmit] = useState(false);

  const handleForm = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional validation or data processing if needed
    setSubmit(true);
  };

  return (
    <div>
      <div className="card text-center  text-white" style={{ backgroundColor: "#2a6592" }}>
        <div className="card-header">CONTACT US</div>
        <form onSubmit={handleSubmit}>
          <div className="container text-center">
            <div className="row align-items-center">
              <div className=" col-md-3 offset-md-1">
                <input
                  type="text"
                  onChange={handleForm}
                  className="form-control"
                  name="username"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-md-3 offset-md-1">
                <input
                  type="email"
                  onChange={handleForm}
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <button className="btn btn-sm btn-success col-md-1 offset-md-1" type="submit">Submit</button>
            </div>
          </div>
        </form>
        {submit && <div>Hi {data.username}, Our team will contact you soon!</div>}
        <div className="card-body">
          <h5 className="card-title">NOVA CHAD</h5>
          <p className="card-text">Provides you with the most recent news here.</p>
        </div>
        <div className="card-footer text-muted">
          Developed By:
          <a
            href={"https://github.com/Dev4821"}
            className="link-light text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            Priyansh Sharma
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;


