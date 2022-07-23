// Dependency imports
import Typed from "react-typed";

// Asset imports
import DataVisualisationIcon from "../../icons/DataVisualisationIcon";
import InfographicSteps from "../../assets/InfographicSteps";

// https://stackoverflow.com/questions/46670075/svg-in-jsx-how-to-convert-defs-tag

const DataVisualisation = () => {
  return (
    <main className="my-8 mx-4 space-y-8">
      <ServiceCard />
      <div>
        <HowWeWork />
      </div>
    </main>
  );
};

export default DataVisualisation;

const ServiceCard = () => {
  return (
    <div className="space-y-4 rounded bg-blue-1 p-5 text-neutral-100">
      <div className="flex items-center space-x-4 fill-neutral-100">
        <DataVisualisationIcon />
        <h1 className="text-2xl font-bold">data visualisation</h1>
      </div>
      <p className="text-justify opacity-80">
        Data visualization is the translation of often complex data into a visual expression. These kinds of images can
        be used to support texts in their communication. Data visualization can be used for online and in print. Visual
        Identities has years of experience in creating custom visual data for companies, NGOs and other organizations.
        Let our graphic expertise speak for you.
      </p>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="space-y-4 rounded border border-blue-1 p-5">
      <div className="flex justify-center">
        <Typed
          className="bg-neutral-900 px-4 py-2 text-2xl text-neutral-100"
          strings={["how we work"]}
          typeSpeed={75}
        />
      </div>
    </div>
  );
};

// Styling === basis for other pages!

/*
Pages: 
Navbar: 
*/

// fill alters the color of the icons
