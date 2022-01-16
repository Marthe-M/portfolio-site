import Bar from "../components/Bar";
import { languages } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              PhD candidate
            </h5>
            <p className="font-semibold">Amsterdam UMC (2015 - current)</p>
            <p className="my-3">
              PhD student at the deparment of Pathology studying the pathogenesis of B-cell malignancies.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Winc Academy</h5>
            <p className="font-semibold">Full-stack Development (2021)</p>
            <p className="my-3">Front-end and back-end development course @ Winc Academy (remote)</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Biomedical Sciences</h5>
            <p className="font-semibold">Radboud University Nijmegen</p>
            <p className="my-3">Master (2011 - 2014) <br /> Bachelor (2008 -2011)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-9">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
