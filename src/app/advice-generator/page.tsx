"use client"
import "./page.css";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Advice } from "./entity/Advice";
import FetchAdapter from "./infra/http/FetchAdapter";

const manrope = Manrope({
  weight: ["800"],
  subsets: ["latin"]
});

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);

  useEffect(() => {
    const fetchAdapter = new FetchAdapter();
    fetchAdapter.get("https://api.adviceslip.com/advice").then((newAdvice: Advice) => {
      setAdvice(newAdvice);
    })
  }, []);

  return (
    <section className={manrope.className}>
      <article>
        <p>Advice #{advice?.id}</p>
        <h1>&quot;{ advice?.quote }&quot;</h1>
        <div className="image-box">
          <Image src={"./advice-generator/pattern-divider-desktop.svg"} alt="divider" width={444} height={16} />
        </div>
        <div className="image-dice-box">
          <Image src={"./advice-generator/icon-dice.svg"} alt="dice" width={24} height={24} />
        </div>
      </article>
    </section>
  );
}

export default AdviceGenerator;
