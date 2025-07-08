// I need to add icons to this file but idk where to put the html import
"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/section-title";
import AnimatedSection from "@/components/animated-section";
import { getAssetPath } from "@/lib/utils"

const projects = [ // add DSRS, MCQ helper, and FDL research 
  //https://github.com/RobHand27/MCQ-Helper
  {
    id: 1,
    title: "AltCredit",
    description:
      "A tool for banks to determine loan eligibility for undocumented people. HackIllinois 2025 Capital One track submission.",
    image: "/AltCredit.png",
    technologies: ["react", "nodejs", "mongodb", "express"],
    githubUrl: "https://github.com/RobHand27/AltCredit-HackIllinois-2025",
  },
  {
    id: 2,
    title: "NLP Research with Forward Data Lab",
    description:
      "Repo containing my work with Prof. Kevin Cheng on RAG models and NLP for query-based research summarization and information retrieval.",
    image: "/research.png",
    technologies: ["NLP", "python", "RAG", "Machine Learning"],
    githubUrl: "https://github.com/RobHand27/Forward-Data-Lab-Research",
  },
  {
    id: 3,
    title: "Data Science Research Intstitute Workflow Tool",
    description:
      "Interactive graph visualization tool for DSRS workflows using Neo4j database and React/Vue.js frontend.",
    image: "/hey.png",
    technologies: ["react", "Vue.js", "mongodb", "express"],
    githubUrl: "https://github.com/RobHand27/",
  },
  {
    id: 4,
    title: "MCQ Solver Chrome Extension",
    description:
      "Hidden chrome extension that uses OpenAI's API to solve MCQs using highlighted text and screenshots.",
    image: "/MCQhelp.png",
    technologies: ["react", "Vue.js", "mongodb", "express"],
    githubUrl: "https://github.com/RobHand27/MCQ-Helper",
  },
  {
    id: 5,
    title: "QuickThoughts",
    description:
      "A social networking platform built with the MERN stack that allows users to share thoughts and connect with others.",
    image: "/QuickThoughts.png",
    technologies: ["react", "nodejs", "mongodb", "express"],
    githubUrl: "https://github.com/CS222-UIUC/main-project-team-102",
  },
  {
    id: 6,
    title: "Voltage Meter ML Model",
    description:
      "This repo contains a machine learning model I built using Meta's Prophet. It is a MVP for a startup that tracks power usage in Latin America.",
    image:
      "/Powerbox.png",
    technologies: ["python", "prophet", "googlecloud", "pandas"],
    githubUrl: "https://github.com/RobHand27/Machine-Learning-Code-Samples/tree/main/Power%20Prediction%20Data",
  },
  {
    id: 7,
    title: "Mosaic Maker",
    description: "A C++ program that generates a mosaic image from a collection of smaller images. Uses a KD-Tree for fast image search and generation.",
    image: "/mosaic.png",
    technologies: ["C++"],
    githubUrl: "https://github.com/RobHand27/Mosaic-Maker",
  },
  {
    id: 8,
    title: "Chess Rating Predictions",
    description: "A machine learning model that predicts chess ratings based on game history and player statistics.",
    image: "/Chess.png",
    technologies: ["python", "scikitlearn", "matplotlib"],
    githubUrl: "https://github.com/RobHand27/Machine-Learning-Code-Samples/tree/main/Chess%20Regression%20Data",
  },
  {
    id: 9,
    title: "Trendify Stocks",
    description: "A web application that provides stock market analysis and trend predictions for investors.",
    image: "/TrendifyProject.png",
    technologies: ["HTML", "CSS", "JavaScript", "python", "flask"],
    githubUrl: "https://github.com/RobHand27/TrendifyStocks",
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="projects" title="" highlight="Projects" />

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 w-full">
                    <Image
                      src={getAssetPath(project.image) || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-blue-600/90 flex flex-col justify-between p-6 transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-white/90 text-sm">{project.description}</p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                          {project.technologies.map((tech) => (
                            <div key={tech} className="text-white text-2xl" title={tech}>
                              <i className={`devicon-${tech}-plain`}></i>
                            </div>
                          ))}
                        </div>

                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full flex items-center justify-center gap-2"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span>View on GitHub</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
