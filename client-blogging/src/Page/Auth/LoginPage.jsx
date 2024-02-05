import Master from "../Layout/Master";
import { toast } from "react-toastify";

toast.success('🦄 Wow so easy!');


const LoginPage = () => {
  return (
    <Master>
      <div className="bg-card p-3 rounded">

        <h5 className="text-white">Login</h5>

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

        <button className="btn btn-primary">Login</button>

      </div>
    </Master>
  );
};

export default LoginPage;
