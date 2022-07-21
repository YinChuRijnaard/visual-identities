// Dependency imports
import Typed from "react-typed";

// Asset imports
import InfographicSteps from "../../assets/InfographicSteps";

// https://stackoverflow.com/questions/46670075/svg-in-jsx-how-to-convert-defs-tag

const DataVisualisation = () => {
  return (
    <>
      <div className="">
        <Typed strings={["How we work"]} className="text-4xl" typeSpeed={75} />
      </div>
      <hr />
      {/* <h1 className="text-2xl text-green-500">This is the Data visualisation subpage, part of the Services folder </h1> */}
      <InfographicSteps />
    </>
  );
};

export default DataVisualisation;
