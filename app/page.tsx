import {
  Hero, Problem, Pipeline, NotDashboard, Engine, CodeExample,
  Domains, Ecosystem, Developers, Sponsors, Commercial, FinalCta,
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pipeline />
      <NotDashboard />
      <Engine />
      <CodeExample />
      <Domains />
      <Ecosystem />
      <Developers />
      <Sponsors />
      <Commercial />
      <FinalCta />
    </main>
  );
}
