import { notFound } from "next/navigation";
import Image from "next/image";
import proyectos from "@/data/data";
import Logo from "@/app/components/atoms/Logo";
import Link from "next/link";
import { BsArrowBarLeft } from "react-icons/bs";
import BadgeTags from "./components/BadgeTags";
import Container from "@/app/components/atoms/Container";
import TitleSection from "@/app/components/atoms/TitleSection";
import Paragraph from "@/app/components/atoms/Paragraph";
import Overline from "@/app/components/atoms/Overline";
import { Metadata } from "next";

export function generateStaticParams() {
      return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return {
      title: "Proyecto no encontrado — Lumbre Estudio",
    };
  }

  return {
    title: `${proyecto.titulo} — Lumbre Estudio`,
    description: proyecto.descripcion,
    openGraph: {
      title: `${proyecto.titulo} — Lumbre Estudio`,
      description: proyecto.descripcion,
      images: [proyecto.imagenPortada],
    },
  };
}

export default async function ProyectoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) notFound();

      return (
            <section className="">
                  <div className=" flex justify-around py-6 ">
                        <Logo brandText={"lumbre estudio"} />
                        <Link href={"/#proyectos"} className=" flex items-center gap-2 font-inconsolata font-semibold text-sm text-muted  "><BsArrowBarLeft />
                              Volver</Link>
                  </div>
                  <article>
                        <div className=" relative w-full h-150 ">
                              <Image
                                    src={proyecto.imagenPortada}
                                    alt={proyecto.titulo}
                                    fill
                                    className=" object-cover "
                              />

                        </div>

                        <Container>

                              <div className=" flex gap-4 ">
                                    {proyecto.tags.map((tag) => (
                                          <BadgeTags key={tag} tag={tag} />
                                    ))}
                              </div>
                              <div className=" flex flex-col pt-6 ">
                                    <TitleSection> {proyecto.titulo} </TitleSection>
                                    <p className=" font-inconsolata text-accent tracking-widest ">
                                          {proyecto.ubicacion} · {proyecto.anio}
                                    </p>

                              </div>
                              <div className=" w-full max-w-2xl pt-12 ">
                                    <Paragraph>{proyecto.descripcion}</Paragraph>

                              </div>


                              <div className=" mt-20 pt-10 border-t border-border">
                                    <Overline text={"imagenes del proyecto"} />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 pb-20  ">
                                          {proyecto.galeria.map((img, i) => (
                                                <div key={i} className="overflow-hidden">

                                                      <Image
                                                            key={i}
                                                            src={img}
                                                            alt={`${proyecto.titulo} imagen ${i + 1}`}
                                                            width={800}
                                                            height={400}
                                                            className=" h-70 2xl:h-100 object-cover lg:hover:scale-110 transition-transform duration-500  "
                                                      />
                                                </div>
                                          ))}

                                    </div>
                              </div>
                        </Container>

                  </article>
            </section>
      );
}