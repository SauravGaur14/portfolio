import { db } from "../firebase.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { useEffect, useState } from "react";

import Skill from "./Skill";
import Loading from "./Loading.jsx";

export default function SkillSet() {
  const [skills, setSkills] = useState([]);
  const [isLoadingSkills, setIsLoadingSkills] = useState([]);

  const storage = getStorage();

  useEffect(() => {
    async function getData() {
      setIsLoadingSkills(true);
      try {
        const q = query(collection(db, "skills"), orderBy("priority", "desc"));
        const querySnapshot = await getDocs(q);
        const skillsData = [];

        for (const doc of querySnapshot.docs) {
          const data = doc.data();
          const imgRef = ref(storage, data.image);
          const imgUrl = await getDownloadURL(imgRef);

          skillsData.push({
            id: doc.id,
            name: data.name,
            description: data.description,
            image: imgUrl,
          });
        }

        setSkills(skillsData);
        setIsLoadingSkills(false);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [storage]);

  if (isLoadingSkills) return <Loading />;

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 sm:p-10">
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill.name} src={skill.image} />
      ))}
    </div>
  );
}
