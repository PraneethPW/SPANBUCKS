import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <div>
    <Layout>
      <Outlet />
    </Layout>
    <CookieBanner />
    </div>
  );
}
