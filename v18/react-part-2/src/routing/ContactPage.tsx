import { useNavigate } from "react-router";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <h4 className="text-center">Contact Us</h4>
      <form
        className="d-flex justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          // Redirect user to the home page
          navigate("/");
        }}
      >
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
