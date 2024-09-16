import { db } from "../firebase.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { useEffect, useState } from "react";

import Project from "../components/Project";
import Loading from "../components/Loading.jsx";

import github from "../assets/github.svg";
import { GithubUrl } from "../util/constants.js";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const storage = getStorage();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoadingProjects(true);
        const q = query(
          collection(db, "projects"),
          where("showCase", "==", true),
          orderBy("priority", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const projectData = [];

        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          const imgRef = ref(storage, data.image);
          const imgUrl = await getDownloadURL(imgRef);

          projectData.push({
            id: doc.id,
            name: data.name,
            description: data.description,
            image: imgUrl,
            projectLink: data.link,
          });
        }

        setProjects(projectData);
        setIsLoadingProjects(false);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [storage]);

  return (
    <div className="clip-path-skew-top min-h-screen w-full gap-y-11 -mt-24 pt-10 bg-red-100">
      <div className="animateBottomToTop items-center justify-center p-10">
        <p className="m-10 text-center font-alegreya text-5xl font-semibold">
          Some of my recent works..
        </p>
        {isLoadingProjects ? (
          <Loading />
        ) : (
          <div className="flex flex-col flex-wrap gap-y-10">
            {projects.map((project) => (
              <Project
                key={project.id}
                projectName={project.name}
                projectImg={project.image}
                projectLink={project.projectLink}
                projectDescription={project.description}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-10 w-full rounded-lg border-amber-400 pb-5 hover:text-blue-700">
        <a
          target="blank"
          href={GithubUrl}
          className="flex items-center justify-center gap-x-3 p-4 pb-10 text-xl sm:text-2xl"
        >
          <p>Check out my Github profile for more such amazing projects...</p>
          <img src={github} width={50} alt="github" />
        </a>
      </div>
    </div>
  );
}
