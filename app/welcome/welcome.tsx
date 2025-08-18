import DNA from "./WillaDNA.png";
import WillaWoo from "./WillaFace.jpg";
import Preggers from "./Preggers.jpg";
import Baby from "./BabyFace.jpg";
import WillaPups from "./WillaPups.jpg";
import Hippo from "./Hippo4.jpeg";
import Kathleen from "./Kathleen1.jpeg";
import Otter from "./Otter2.jpeg";
import Piggy from "./Piggy5.jpeg";
import Pinky from "./Pinky1.jpeg";
import Possum from "./Possum5.jpeg";
import Reptar from "./Reptar6.jpeg";
import Splinter from "./Splinter1.jpeg";
import Violet from "./Violet4.jpeg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Puppies!
          </h1>
          <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            Today the puppies are {differenceInDays} days old!
          </p>
        </header>
        <div className="max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center">
          <span className="text-gray-500 dark:text-gray-400 text-center font-bold">
            First meet the mama:
          </span>

          <div className="columns-md gap-4">
            <div>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                Willa
              </h2>
              <span>
                Willa is a beautiful and sweet dog with a very mild temperament. She was found in the neighborhood and came to live with us on May 28th, 2025 as a foster after the rescue helped us catch her. The vet estimated her age around 2.5 years, and her DNA results are pictured.
              </span>
              <br />
              <br />

              <span className="justify-center items-center flex flex-wrap row gap-4">
                <img
                  src={WillaWoo}
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <img
                  src={Preggers}
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
                <img
                  src={Baby}
                  alt="Willa"
                  className="rounded-xl w-1/4 h-auto xs:w-auto"
                />
              </span>
              <br />
              <span>
                We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes.
              </span>
              <span className="justify-center items-center flex">
                <img
                  src={WillaPups}
                  alt="Willa with her brand new puppies"
                  className="rounded-xl w-3/4 h-auto"
                />
              </span>
            </div>
            <div className="justify-center items-center flex">
              <img
                src={DNA}
                alt="Willa's DNA results"
                className="rounded-4xl w-5/6 h-auto"
              />
            </div>
          </div>
          <div className="text-center w-full">
            <hr />
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-center font-bold">
            Now meet the puppies:
          </span>
          {/* <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                
              </h2>
              <span>

              </span>
              <br />
              <br />
              <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">
                
              </h2>
            </div>
          </div> */}
          <br />
          <br />
          <div className="columns-3xs gap-4">
            {puppies.map((puppy) => (
              <div key={puppy.name} className="flow-root">
                <span className="justify-center items-center">
                  <img
                    src={puppy.pic}
                    alt={puppy.name}
                    className="rounded-xl"
                  />
                </span>
                <h2 className="text-2xl text-gray-900 dark:text-gray-100 font-bold text-center">
                  {puppy.name}
                </h2>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Create Date objects representing the two dates
const birth: Date = new Date('2025-07-12');
const today = Date.now();

// Calculate the difference in 
// milliseconds between the two dates
const differenceInMs: number =
  Math.abs(today - birth.getTime());

// Define the number of milliseconds in a day
const millisecondsInDay: number = 1000 * 60 * 60 * 24;

// Calculate the difference in days by 
// dividing the difference in milliseconds by 
// milliseconds in a day
const differenceInDays: number =
  Math.floor(differenceInMs / millisecondsInDay);

const puppies = [
  {
    "name": "Hippo",
    "pic": Hippo
  },
  {
    "name": "Kathleen",
    "pic": Kathleen
  },
  {
    "name": "Otter",
    "pic": Otter
  },
  {
    "name": "Piggy",
    "pic": Piggy
  },
  {
    "name": "Pinky",
    "pic": Pinky
  },
  {
    "name": "Possum",
    "pic": Possum
  },
  {
    "name": "Reptar",
    "pic": Reptar
  },
  {
    "name": "Splinter",
    "pic": Splinter
  },
  {
    "name": "Violet",
    "pic": Violet
  }
]