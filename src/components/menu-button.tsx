import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function MenuButton({ image, text, isSelected = false }) {
  if (isSelected) {
    return (
      <Button className="flex w-[196px] p-2 flex-col items-start gap-2 rounded-[8px] bg-[#9C95FF]">
        <div className="flex items-center gap-2">
          <Image src={image} alt="" />
          <p className="text-white font-poppins text-base font-semibold leading-normal">
            {text}
          </p>
        </div>
      </Button>
    );
  }
  return (
    <Button className="flex w-[196px] p-2 flex-col items-start gap-2 rounded-[8px]">
      <div className="flex items-center gap-2">
        <Image src={image} alt="" />
        <p className="text-[#6D63FF] font-poppins text-base font-semibold leading-normal">
          {text}
        </p>
      </div>
    </Button>
  );
}
