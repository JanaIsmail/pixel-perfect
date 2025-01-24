import Image from "next/image";
import { Button } from "@nextui-org/react";
import diceImg from "@/images/dice.png";

export default function PersonaHeader() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex w-[753px] flex-col items-start">
        <h1 className="text-text-primary font-poppins text-title-l font-semibold self-stretch">
          Démarrer une simulation
        </h1>
        <p className="text-text-primary font-poppins text-title-2 font-normal self-stretch">
          Choisissez le persona correspondant à vos objectifs du moment
        </p>
      </div>
      <Button className="flex py-3 px-4 justify-center items-center gap-2 rounded-lg bg-primary-gradient text-white text-center font-poppins text-base font-semibold">
        Mode aléatoire
        <Image src={diceImg} alt="icon" />
      </Button>
    </div>
  );
}
