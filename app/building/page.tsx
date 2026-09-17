import Image from "next/image";
import Overline from "../components/atoms/Overline";
import Paragraph from "../components/atoms/Paragraph";

export default function PageBuilding() {
      return (
            <section className=" flex justify-center items-center w-full px-4 min-h-screen bg-black ">
                  <div className=" flex flex-col items-center w-full max-w-lg p-6 bg-cream ">
                        <Image src={"/image/lumbre-logo.webp"} alt={""} width={148} height={148} />
                        <Overline text={"lumbre estudio"} className={" text-accent "} />
                        <div className=" flex flex-col items-center gap-6 ">
                              <h1 className=" font-bold text-4xl md:text-6xl text-center text-black ">Estamos <span className=" text-accent ">construyendo</span> </h1>
                              <Paragraph className=" max-w-sm text-xs text-center">
                                    Nuestra nueva web está tomando forma. Muy pronto podrás conocer nuestro estudio, nuestros proyectos y nuestra manera de hacer.
                              </Paragraph>
                        </div>
                  </div>
            </section>
      )
}