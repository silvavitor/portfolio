"use client";

import projectsJSON from "@/data/projects.json";
import { ProjectData } from "@/interfaces/project";
import { useMemo, useState } from "react";

export default function useProjects() {
  const [selectedTech, setSelectedTech] = useState('all');
  const projects: Array<ProjectData> = projectsJSON.projects;

  const techs = useMemo(() => {
    const items: Array<string> = [];
    projects.forEach((project) => {
      project.techs.forEach((tech) => {
        if (!items.includes(tech)) {
          items.push(tech);
        }
      })
    })
    return items;
  }, [projects]);

  const filteredProjects = useMemo(() => projects.filter((project) => (
    selectedTech === 'all' || project.techs.includes(selectedTech)
  )), [projects, selectedTech]);

  function filterTechs(e: React.MouseEvent<HTMLButtonElement>) {
    setSelectedTech(e.currentTarget.id);
  }

  return [
    {
      techs,
      filteredProjects
    },
    {
      filterTechs
    }
  ];
}