import React from 'react';
import { useLanguage } from "../i18n/LanguageContext"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';

import {
  nooseenergy,
  syncvr,
  dantelabs,
  endeavour
} from "../assets";

const iconMap = {
  nooseenergy: nooseenergy,
  syncvr: syncvr,
  dantelabs: dantelabs,
  endeavour: endeavour
};

const sanitizeCompanyName = (companyName) => {
  return companyName.replace(/\s+/g, '_');  // Replaces spaces with underscores
};

const ExperienceCard = ({companyName}) => {
  const { t } = useLanguage();  // Accessing the `t` function from context
  const sanitizedCompanyName = sanitizeCompanyName(companyName);
  const experience = t(`experiences.${sanitizedCompanyName}`, { returnObjects: true });
  const Icon = iconMap[experience.icon];

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {Icon && <img src={Icon} alt={companyName} className="w-[60%] h-[60%] object-contain" />}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.role}
        </h3>
        <p className="text-secondary text-[16px]" style={{margin: 0}}>
          {companyName}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points && Array.isArray(experience.points) && experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{t("theRoadSoFar")}</p>
        <h2 className={styles.sectionHeadText}>{t("workExperience")}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          <ExperienceCard companyName="Noos Energy" />
          <ExperienceCard companyName="SyncVR Medical" />
          <ExperienceCard companyName="Dantelabs" />
          <ExperienceCard companyName="Endeavour" />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")