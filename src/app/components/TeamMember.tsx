'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  platform: string;
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise?: string[];
  socialLinks?: SocialLink[];
  achievements?: string[];
  delay?: number;
}

const TeamMember = ({ 
  name, 
  role, 
  image, 
  bio, 
  expertise, 
  socialLinks,
  achievements,
  delay = 0 
}: TeamMemberProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-lg p-6"
    >
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="(min-width: 1024px) 192px, 192px"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-semibold text-[var(--text-dark)]">{name}</h3>
        <p className="text-[var(--primary-orange)] font-medium mt-1">{role}</p>
        
        {socialLinks && (
          <div className="flex gap-4 mt-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--primary-orange)] transition-colors"
                aria-label={`Follow ${name} on ${link.platform}`}
              >
                {link.platform === 'LinkedIn' ? <FaLinkedin size={20} /> : <FaTwitter size={20} />}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 text-center">{bio}</p>

        {expertise && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-center">Areas of Expertise</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--bg-cream)] px-3 py-1 rounded-full text-sm text-[var(--text-dark)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {achievements && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Key Achievements</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default TeamMember;