import StaffCards from "../components/employe-cards";
import { Header } from "../components/header";

export function Employees(){
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <div className="flex flex-col items-center justify-center flex-grow pt-32 ">
            <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-[#014034] via-[#D9C7B8] to-[#014034] my-8">
              Hier seht ihr unsere Mitarbeiter..
            </h1>
            <StaffCards />
          </div>
        </div>
      );
}