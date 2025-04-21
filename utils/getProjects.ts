import troweb from "../projects/troweb";
import wallpapers from "../projects/wallpapers";
import query from "../projects/query";

export default function getProjects() {
  const projects = [troweb, wallpapers, query];

  const sortedProjects = projects.sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    return bTime - aTime;
  });

  return sortedProjects;
}
