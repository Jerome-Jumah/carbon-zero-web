import { Footer } from "../components/custom/footer";
import { HeaderNav } from "./header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col justify-center px-4 sm:px-4 lg:px-24 lg:py-4 md:px-12">
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export { RootLayout };
