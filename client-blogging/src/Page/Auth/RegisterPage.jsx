import Master from "../Layout/Master";

const RegisterPage = () => {
  return (
    <Master>
      <div className="bg-card p-3 rounded">

        <h5 className="text-white">Register</h5>

        {/* name */}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder=""
          />
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder=""
          />
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
          />
        </div>

        <button className="btn btn-primary">Register</button>

      </div>
    </Master>
  );
};

export default RegisterPage;
