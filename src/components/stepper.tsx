import Image from "next/image";
import checkmarkImg from "@/images/checkmark.png";

export default function Stepper() {
  return (
    <div className="flex w-[988px] h-6 justify-center items-start">
      <div className="flex px-1.5 items-center gap-2">
        <div className="flex w-6 h-6 p-2 justify-center items-center gap-2 rounded-full border border-[#00BA88] bg-[#00BA88]">
          <Image src={checkmarkImg} alt="" width={16} height={16} />
        </div>
        <p className="text-text-primary font-poppins text-sm font-semibold leading-normal">
          Sélection de la situation
        </p>
        <div className="w-[52px] h-px bg-[#ADADAD]"></div>
      </div>
      <div className="flex px-1.5 items-center gap-2">
        <div className="flex w-6 h-6 p-2 justify-center items-center gap-2 rounded-[24px] bg-primary-gradient">
          <p className="text-white font-poppins text-sm font-semibold leading-normal">
            2
          </p>
        </div>
        <p className="text-text-primary font-poppins text-sm font-semibold leading-normal">
          Choix du persona
        </p>
        <div className="w-[52px] h-px bg-[#ADADAD]"></div>
      </div>
      <div className="flex px-1.5 items-center gap-2">
        <div className="flex w-6 h-6 p-2 justify-center items-center gap-2 rounded-[24px] border border-gray-200">
          <p className="text-gray-200 font-poppins text-sm font-semibold leading-normal">
            3
          </p>
        </div>
        <p className="text-[#637481] font-poppins text-sm font-semibold leading-normal">
          Lancement de la simulation
        </p>
      </div>
    </div>
  );
}
