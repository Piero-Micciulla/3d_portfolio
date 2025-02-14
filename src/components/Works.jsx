import React from 'react';
import { useLanguage } from "../i18n/LanguageContext";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { live } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import {
  yanga,
  parley,
  koepel,
  represent,
  dfns,
  ibtt,
  yadea,
  hildering,
  sevennorth,
  gopaint,
  puntmaakelars,
  msk,
  bvb,
  madaster,
  hely,
  elysee,
  activite,
  chocolatemakers,
  oceandiva,
  mrshighbrow,
  fietsenconcurrent,
  taskflow
} from "../assets";

const imageMap = {
  yanga: yanga,
  parley: parley,
  koepel: koepel,
  represent: represent,
  dfns: dfns,
  ibtt: ibtt,
  yadea: yadea,
  hildering: hildering,
  sevennorth: sevennorth,
  gopaint: gopaint,
  puntmaakelars: puntmaakelars,
  msk: msk,
  bvb: bvb,
  hely: hely,
  elysee: elysee,
  madaster: madaster,
  activite: activite,
  oceandiva: oceandiva,
  chocolatemakers: chocolatemakers,
  mrshighbrow: mrshighbrow,
  fietsenconcurrent: fietsenconcurrent,
  taskflow: taskflow,
};


const sanitizeProjectName = (projectName) => {
  return projectName.replace(/\s+/g, '_');  // Replaces spaces with underscores
};

const ProjectCard = ({ index, projectName }) => {
  const { t } = useLanguage();
  
  const sanitizedProjectName = sanitizeProjectName(projectName);
  const project = t(`projects.${sanitizedProjectName}`, { returnObjects: true });
  const Image = imageMap[project.image];
  
  // Extracting project data from the translation
  const { name, description, tags, image, source_code_link } = project;

  return (
    <motion.div 
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <a href={source_code_link} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-[230px]">
            {Image && <img src={Image} alt={name} className="w-full h-full object-cover rounded-2xl" />}

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "blank")}
                className="red-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="live website"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags && Array.isArray(tags) && tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div
        // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{t("myProjects")}</p>
        <h2 className={styles.sectionHeadText}>{t("projectsTitle")}</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("projectsDescription")}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7">
          {/* Dynamically map through the projects, similar to how Experience was mapped */}
          {Object.keys(t('projects')).map((projectKey, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              projectName={projectKey}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Works, "works");
