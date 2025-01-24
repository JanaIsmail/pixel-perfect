import Image from "next/image";
import { Button } from "@nextui-org/react";
import roleImg from "@/images/bag.png";
import companyImg from "@/images/business.png";
import arrowImg from "@/images/arrow-right.png";
import grayDot from "@/images/gray-dot.png";
import greenDot from "@/images/green-dot.png";
import yellowDot from "@/images/yellow-dot.png";
import redDot from "@/images/red-dot.png";

export default function Profile({ name, role, company, disc, level, image }) {
  let difficulty;
  switch (level) {
    case "1":
      difficulty = (
        <div className="flex w-[112px] items-start gap-2">
          <Image src={greenDot} alt="" />
          <Image src={grayDot} alt="" />
          <Image src={grayDot} alt="" />
        </div>
      );
      break;
    case "2":
      difficulty = (
        <div className="flex w-[112px] items-start gap-2">
          <Image src={yellowDot} alt="" />
          <Image src={yellowDot} alt="" />
          <Image src={grayDot} alt="" />
        </div>
      );
      break;
    case "3":
      difficulty = (
        <div className="flex w-[112px] items-start gap-2">
          <Image src={redDot} alt="" />
          <Image src={redDot} alt="" />
          <Image src={redDot} alt="" />
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <div className="flex p-8 flex-col justify-end items-end gap-6 flex-1 rounded-[16px] bg-white/10 shadow-[4px_4px_8px_0px_rgba(0,0,0,0.15)]">
      <div className="flex items-start gap-8 self-stretch">
        <Image src={image} alt="image" width={189} height={186} />
        <div className="flex flex-col items-start gap-8 flex-1">
          <h2 className="text-text-primary font-poppins text-custom-20 font-semibold">
            {name}
          </h2>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <div className="flex flex-col items-start gap-4">
                <div className=" flex flex-col items-start gap-2 w-[165px]">
                  <div className="flex items-start gap-2 self-stretch">
                    <Image src={roleImg} alt="role" width={20} height={20} />
                    <p className="text-text-primary font-poppins text-custom-14 font-normal">
                      {role}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 self-stretch">
                    <Image
                      src={companyImg}
                      alt="company"
                      width={20}
                      height={20}
                    />
                    <p className="text-text-primary font-poppins text-custom-14 font-normal">
                      {company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 self-stretch">
                <p className="text-text-primary font-poppins text-custom-14 font-semibold w-16">
                  DISC
                </p>
                <p className="text-text-primary font-poppins text-custom-14 font-normal">
                  {disc}
                </p>
              </div>
              <div className="flex items-center gap-2 self-stretch">
                <p className="text-text-primary font-poppins text-custom-14 font-semibold w-16">
                  Difficulté
                </p>
                {difficulty}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start gap-4 self-stretch ">
        <Button className="flex h-12 flex-col items-start shadow-[4px_4px_8px_0px_rgba(0,0,0,0.15)] py-2 px-4 rounded-lg text-text-secondary text-center text-base font-semibold font-poppins">
          En savoir plus
        </Button>
        <Button className="flex px-4 py-3 justify-center items-center gap-2 rounded-lg bg-primary-gradient font-poppins text-white text-center text-base font-semibold">
          Séléctionner
          <Image src={arrowImg} alt="icon" />
        </Button>
      </div>
    </div>
  );
}
