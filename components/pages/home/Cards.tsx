// Framework imports
import Link from "next/link";

// Component imports
import PlusSign from "../../PlusSign";

// Data imports
import cardsData from "../../../data/cardsData";

const Cards = () => {
  return (
    <div className="space-y-2">
      {cardsData.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between rounded bg-blue-1 fill-neutral-100 text-neutral-100"
            key={index}>
            <div className="p-2">{item.icon}</div>
            <span className="w-full cursor-pointer p-4">
              <Link href={item.link}>
                <span className="flex items-center justify-between">
                  <p className="font-bold">{item.text}</p>
                  <PlusSign />
                </span>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

// {cardsData.map((item, index) => {
//   return (
//     <div
//       className="mt-12 flex h-40 w-40 flex-col items-center justify-between bg-blue-1 fill-neutral-100 text-neutral-100"
//       key={index}>
//       <span>{item.icon}</span>
//       <span className="w-full cursor-pointer p-1">
//         <Link href={item.link}>
//           <span className="flex items-center justify-between">
//             <p className="font-bold">{item.text}</p>
//             <PlusSign />
//           </span>
//         </Link>
//       </span>
//     </div>
//   );
// })}
