import { useState } from "react";
import { v4 as uuidv4} from "uuid";

const useProject = () => {
    const [projects, setProjects] = useState([]);

    const add = (title) => {
        setProjects(projects => [...projects, { title, id: uuidv4() }]);
    }

    return [projects, add];
}

export default useProject;