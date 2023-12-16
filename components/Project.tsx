import Cloudniary from "../public/assets/projects/cloudinary.png";
import Cars from "../public/assets/projects/car.png";
import LMS from "../public/assets/projects/lms.png";
import Eccomerceadmin from "../public/assets/projects/ecom-admin.png";
import Eccomercestore from "../public/assets/projects/ecom-store.png";
import Jotion from "../public/assets/projects/jotion.png";
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
            title="Jotion Note Taking App"
            backgroundImg={Jotion}
            projectUrl="/jotion"
            tech="Next JS"
          />
          <ProjectItem
            title="Showroom App"
            backgroundImg={Cars}
            projectUrl="/car"
            tech="Next JS"
          />
          <ProjectItem
            title="Cloudinary App"
            backgroundImg={Cloudniary}
            projectUrl="/cloudinary"
            tech="Next JS"
          />
          <ProjectItem
            title="Learning Mangement System"
            backgroundImg={LMS}
            projectUrl="/lms"
            tech="Next JS"
          />
          <ProjectItem
            title="Ecommerce App Admin"
            backgroundImg={Eccomerceadmin}
            projectUrl="/ecommerce-admin"
            tech="Next JS"
          />
          <ProjectItem
            title="Ecommerce App Store"
            backgroundImg={Eccomercestore}
            projectUrl="/ecommerce-store"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
