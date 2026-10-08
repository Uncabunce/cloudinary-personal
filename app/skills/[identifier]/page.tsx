import { dataskill } from "../[identifier]/dataskill";

type SkillPageProps = {
  params: {
    identifier: string;
  };
};

export default async function SkillPage({
  params,
}: SkillPageProps) {
  const { identifier } = await params
  const Skill = dataskill.find((Skill) => Skill.id == identifier)
  return Skill ? (
    <article>
    <h1 className="text-center text-5xl">SCP: 0{Skill.id}</h1>
    <p className="text-center text-5xl">{Skill.name}</p>
    <p className="text-center text-5xl">{Skill.job}</p>
    <p className="text-center text-5xl">{Skill.size}</p>
    </article>
  ) : (
    <div className="text-center text-6xl">Nothing to see besides this text :)</div>
  );
}