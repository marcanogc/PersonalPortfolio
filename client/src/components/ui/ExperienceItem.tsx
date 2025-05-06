import { Briefcase, GraduationCap } from "lucide-react";

export interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  type: "work" | "education";
}

export const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  description, 
  skills,
  type
}: ExperienceItemProps) => {
  return (
    <div className="experience-timeline__item">
      <div className="experience-timeline__dot">
        {type === "work" ? (
          <Briefcase className="w-4 h-4" />
        ) : (
          <GraduationCap className="w-4 h-4" />
        )}
      </div>
      <div className="bg-card rounded-xl shadow-md p-6 transition-colors">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        <h4 className="text-lg font-medium text-primary dark:text-primary mb-2">{company}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="badge badge--tag">{skill}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
