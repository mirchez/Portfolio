import { BlurFade } from "../magicui/blur-fade";

export function BlurFadeTextDemo({text}) {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-2xl tracking-tighter sm:text-2xl xl:text-2xl/none">
          {text}
        </span>
      </BlurFade>
    </section>
  );
}
