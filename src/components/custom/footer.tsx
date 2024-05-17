import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-center mt-8 mb-4 lg:mb-0 font-quicksand">
      <p className="">
        <span>&copy;</span> Jerome Jumah {year}
      </p>

      <div className="flex flex-row justify-between ml-8">
        <Link to="/contact" className="underline">
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
