import Car from "../public/assets/projects/cloudinary.png";
import Cloudniary from "../public/assets/projects/car.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Showroom App"
            backgroundImg={Car}
            projectUrl="/car"
            tech="Next JS"
          />

          <ProjectItem
            title="Cloudniary App"
            backgroundImg={Cloudniary}
            projectUrl="/cloudinary"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
