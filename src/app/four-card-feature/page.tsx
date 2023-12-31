import "./page.css";
import { Poppins } from "next/font/google";
// import type { Metadata } from "next";
import Card from "./components/card";

// export const metadata: Metadata = {
//   title: "Frontend Mentor | Four card feature section",
//   description: "Four card feature section",
// }

const poppins = Poppins({
  weight: ["200", "400", "600"],
  subsets: ["latin"]
});

const cards = [
  {
    color: "hsl(180, 62%, 55%)",
    title: "Supervisor",
    content: "Monitors activity to identify project roadblocks",
    imageName: "icon-supervisor"
  },
  {
    color: "hsl(0, 78%, 62%)",
    title: "Team Builder",
    content: "Scans our talent network to create the optimal team for your project",
    imageName: "icon-team-builder"
  },
  {
    color: "hsl(34, 97%, 64%)",
    title: "Karma",
    content: "Regularly evaluates our talent to ensure quality",
    imageName: "icon-karma"
  },
  {
    color: "hsl(212, 86%, 64%)",
    title: "Calculator",
    content: "Uses data from past projects to provide better delivery estimates",
    imageName: "icon-calculator"
  }
];

export default function FourCardFeature() {
  return (
    <main className={`four-card ${poppins.className}`}>
      <h1 className="four-card__title">
        Reliable, efficient delivery
      </h1>
      <h2 className="four-card__title font-weight-600">
        Powered by Technology
      </h2>
      <p className="four-card__content">
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
      </p>
      <div className="four-card__card">
        {
          cards.map((card, i) => (
            <Card
              key={i}
              {...card}
            />
          )
          )
        }
      </div>
    </main>
  );
}
