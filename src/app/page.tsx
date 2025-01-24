import PersonaHeader from "@/components/persona-header";
import SideMenu from "@/components/menu";
import Stepper from "@/components/stepper";
import Profile from "@/components/profile";
import josephineImg from "@/images/josephine.png";
import jeromeImg from "@/images/jerome.png";
import kevinImg from "@/images/kevin.png";
import sarahImg from "@/images/sarah.png";

export default function Home() {
  return (
    <div className="flex w-[1440px] p-10 px-8 items-start gap-10  bg-[#D3D3D380]">
      <SideMenu />
      <div className="flex p-8 px-10 flex-col items-center gap-10 flex-1 self-stretch rounded-[40px] bg-white/40">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-start gap-8 self-stretch">
            <PersonaHeader />
            <Stepper />
            <div className="flex items-start gap-8 self-stretch">
              <Profile
                name="Joséphine AMOUR"
                role="Employée de Mairie"
                company="Mairie de Tours"
                disc="Vert"
                level="1"
                image={josephineImg}
              />
              <Profile
                name="Jérôme MARTIN"
                role="Chercheur"
                company="CHU de Nîmes"
                disc="Vert"
                level="2"
                image={jeromeImg}
              />
            </div>
            <div className="flex items-start gap-8 self-stretch">
              <Profile
                name="Kevin AUTEL"
                role="Cadre commercial"
                company="Airbus"
                disc="Vert"
                level="2"
                image={kevinImg}
              />
              <Profile
                name="Sarah JEAN"
                role="CEO"
                company="Saint-Gobain"
                disc="Vert"
                level="3"
                image={sarahImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
