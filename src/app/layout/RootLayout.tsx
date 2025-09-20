import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
