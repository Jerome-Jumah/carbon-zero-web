import { RootLayout } from "./layout";
import { HomePage } from "./pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivacyPage } from "./pages/privacy-page";
import { ContactPage } from "./pages/contact-page";
import { TermsPage } from "./pages/terms-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
