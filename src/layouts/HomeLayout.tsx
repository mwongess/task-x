import { Outlet } from "react-router-dom";

export const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="text-lg font-medium">HomeLayout</div>
      <Outlet />
    </>
  );
};
