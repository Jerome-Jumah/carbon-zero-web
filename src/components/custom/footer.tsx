import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row items-center justify-center mt-8 mb-4 font-quicksand">
      <p>
        {" "}
        <span>&copy;</span> Jerome Jumah {year}
      </p>

      <div className="flex flex-row justify-between ml-8">
        <Link to="/contact" className="underline ml-3">
          Contact
        </Link>
        <Link to="/privacy" className="underline ml-3">
          Privacy
        </Link>
      </div>
    </footer>
  );
}

export { Footer };
