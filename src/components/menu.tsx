import Image from "next/image";
import MenuTitle from "./menu-title";
import MenuButton from "./menu-button";
import logoImg from "@/images/logo.png";
import peopleImg from "@/images/people.png";
import gridImg from "@/images/grid.png";
import playtImg from "@/images/caret-forward-circle.png";
import personImg from "@/images/person.png";
import mapImg from "@/images/map.png";
import cardImg from "@/images/id-card.png";
import globeImg from "@/images/globe.png";
import logoutImg from "@/images/log-out-outline.png";

export default function SideMenu() {
  return (
    <div className="flex w-[276px] px-10 py-16 flex-col items-center gap-14 flex-shrink-0 self-stretch rounded-[40px] bg-white/40">
      <div className="flex p-2 flex-col items-center gap-2 rounded-[64px]">
        <Image src={logoImg} alt="" />
      </div>
      <div className="flex w-[196px] flex-col items-start gap-10">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-6">
            <MenuTitle text="PILOTER" />
            <MenuButton image={peopleImg} text="Mes équipes" />
          </div>
          <div className="flex flex-col items-start gap-6">
            <MenuTitle text="S'ENTRAÎNER" />
            <div className="flex flex-col items-start gap-2 self-stretch">
              <MenuButton image={gridImg} text="Tableau de bord" />
              <MenuButton
                image={playtImg}
                text="Simulation"
                isSelected={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <MenuTitle text="ADMIN" />
            <div className="flex flex-col items-start gap-2">
              <MenuButton image={personImg} text="Utilisateurs" />
              <MenuButton image={peopleImg} text="Equipes" />
              <MenuButton image={mapImg} text="Situation" />
              <MenuButton image={cardImg} text="Personas" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch ">
          <MenuButton image={globeImg} text="Langues" />
          <MenuButton image={logoutImg} text="Déconnexion" />
        </div>
      </div>
    </div>
  );
}
