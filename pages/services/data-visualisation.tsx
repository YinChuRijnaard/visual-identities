// Dependency imports
import Typed from "react-typed";

// Asset imports
import DataVisualisationIcon from "../../icons/DataVisualisationIcon";
import InfographicSteps from "../../assets/InfographicSteps";

// https://stackoverflow.com/questions/46670075/svg-in-jsx-how-to-convert-defs-tag

const DataVisualisation = () => {
  return (
    <main className="bg-red-300">
      <ServiceCard />
    </main>
  );
};

export default DataVisualisation;

const ServiceCard = () => {
  return (
    <div className="bg-green-300 p-10">
      <div className="">
        <h1>data visualisation</h1>
      </div>
    </div>
  );
};

// <div className="">
//   <Typed strings={["How we work"]} className="text-4xl" typeSpeed={75} />
// </div>

// Styling === basis for other pages!

/*
Pages: 
Navbar: 
*/
