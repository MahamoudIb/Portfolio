import { ofetch } from "ofetch";

import { endpoint } from "@/config/url";
import { Project } from "../types";
import { validateProject } from "../helpers/schema";

const url = endpoint.project

const remove = async (id: string) => {
    try {
        await ofetch(`${url}/${id}`, {
            method: "DELETE"
        });  
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const create = async (data: Omit<Project, 'id' |'publishedAt'>) => {
    try {
        const createdProject = await ofetch(url, {
            method: "POST",
            body: data
        });

        return createdProject
    } catch (error) {
        console.error(error);
    }
};

const getProjects = async () => {
    try {
        const projects = await ofetch(url);
        return validateProject(projects.data)
    } catch (error) {
        console.error(error);
    }
};

export default { remove, create, getProjects };

