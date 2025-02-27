import { LandingButton } from "@/components/buttons/LandingButton";
import { LogosDesktop, LogosMobile } from "@/components/LogoWall";
import { BlurFade } from "@/components/magicui/blur-fade";
import FadeContent from "@/components/ui/fadeContent";

export default function Landing() {
  return (
    <>
      {/* Contenedor principal: en móvil se apila en columna, en escritorio en fila */}
      <div className="flex flex-col md:flex-row items-center h-screen max-w-screen-2xl mx-auto">
        {/* Sección para escritorio (solo se muestra en md y superiores) */}
        <div className="hidden md:flex flex-row items-center w-full">
          {/* Logos para Desktop */}
          <div className="flex items-center h-screen">
            <BlurFade delay={0.8}>
              <LogosDesktop />
            </BlurFade>
          </div>

          {/* Contenido de la sección PC */}
          <div className="w-[672px] mx-auto mb-10 items-center">
            <div className="flex">
              <div>
                <BlurFade delay={0.1}>
                  <h1 className="text-4xl font-black mt-16">
                    Hi, I’m Miguel💻
                  </h1>
                </BlurFade>
                <div>
                  <BlurFade delay={0.1}>
                    <p className="mt-4 text-1xl w-[480px]">
                      <span className="font-semibold">Frontend Developer</span>{" "}
                      with solid backend experience, currently in my third year
                      of a Systems Engineering program.
                    </p>
                  </BlurFade>
                  <BlurFade delay={0.1}>
                    <p className="mt-4 text-1xl w-[480px]">
                      <span className="font-semibold">
                        I devote 10+ hours a day to mastering new technologies
                        and building real-world projects
                      </span>
                      , driven by an unwavering work ethic. My relentless
                      ambition fuels my passion for continuous learning and
                      innovation.
                    </p>
                  </BlurFade>
                </div>
              </div>
              <FadeContent
                blur={true}
                duration={150}
                delay={250}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="mt-[6.5rem] ml-8">
                  <img
                    src="Perfil.jpg"
                    alt="profile picture"
                    className="rounded-3xl max-w-36"
                  />
                </div>
              </FadeContent>
            </div>

            <FadeContent
              blur={true}
              duration={150}
              delay={250}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="border-t-2 border-slate-100 mt-10 animate-border-appear"></div>
            </FadeContent>

            <div>
              <BlurFade delay={0.3}>
                <h1 className="text-2xl my-5 font-black">About me</h1>
              </BlurFade>
              <BlurFade delay={0.4}>
                <p className="text-base">
                  <span className="font-semibold">
                    I've deployed 20+ projects so far, always striving to exceed
                    expectations and deliver top-quality results
                  </span>
                  . My main tech stack includes React.js, TypeScript, Node.js,
                  and MongoDB, which I use to build scalable, high-performance
                  web applications with seamless user experiences. I'm
                  constantly honing my skills and exploring new technologies to
                  innovate and stay ahead in a fast-paced industry.
                </p>
              </BlurFade>
            </div>

            <LandingButton />
          </div>
        </div>

        {/* Sección para móviles (se muestra solo en md:hidden) */}
        <div className="md:hidden w-full mx-auto mb-4 items-center px-4">
          <BlurFade delay={0.1}>
            <h1 className="text-4xl font-black mt-8 text-center">
              Hello, I’m Miguel💻
            </h1>
          </BlurFade>

          {/* Contenedor para el párrafo e imagen (en columna para evitar solapamientos) */}
          <div className="flex flex-col items-center justify-center mt-4">
            <BlurFade delay={0.1}>
              <p className="text-1xl text-center">
                Frontend Developer with solid backend experience, currently in
                my third year of a Systems Engineering program.
              </p>
            </BlurFade>
            <FadeContent
              blur={true}
              duration={250}
              delay={250}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="mt-4">
                <img
                  src="Perfil.jpg"
                  alt="profile picture"
                  className="rounded-3xl max-w-[80px]"
                />
              </div>
            </FadeContent>
          </div>

          <BlurFade delay={0.3}>
            <p className="text-1xl text-center mt-3 md:mt-4">
              I am studying Systems Engineering at the National University and
              have been building projects and continuously upskilling for over a
              year. 🚀
            </p>
          </BlurFade>

          <LandingButton />

          <div className="border-t-2 border-slate-100 mt-10 animate-border-appear"></div>

          <div>
            <BlurFade delay={0.3}>
              <h1 className="text-2xl my-5 font-black text-center">About me</h1>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p className="text-base text-center">
                I have deployed over 20 projects and always strive to exceed
                expectations with my work. I work with React.js, TypeScript,
                Node.js, MongoDB, and more. I am passionate about building
                scalable, optimized applications with seamless user experiences.
                I am continuously learning and exploring new technologies to
                drive innovation.
              </p>
            </BlurFade>
          </div>

          {/* Logos para Mobile */}
          <div className="mt-4">
            <LogosMobile />
          </div>
        </div>
      </div>
    </>
  );
}
