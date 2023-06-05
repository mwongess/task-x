import { Outlet } from "react-router-dom";

export const HomeLayout: React.FC = () => {
  return (
    <>
      <div>HomeLayout</div>
      <Outlet />
    </>
  );
};
