import React, { useContext } from "react";
import Navbar from "./Navbar";
import { LoginContext } from "../Contexts/LoginContext";

const Dashboard = () => {
  const { name } = useContext(LoginContext);

  return (
    <>
      <div className="w-full flex">
        <Navbar />
        <main>
          <div className="py-12 px-14 flex flex-col">
            <h2 className="font-bold">Dashboard</h2>

            <div className="flex space-x-8">
              <div className=" w-56 h-[150px] border border-gray-400 rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
                <span>User Name is: {name}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
