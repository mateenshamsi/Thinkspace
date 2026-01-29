'use client';
import { Facebook, Instagram, Linkedin } from "lucide-react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-2">
      <span className="opacity-70 cursor-pointer"><Facebook color="#c2c4c0" /></span>
      <span className="opacity-70 cursor-pointer"><Linkedin color="#c2c4c0" /></span>
      <span className="opacity-70 cursor-pointer"><Instagram color="#c2c4c0" /></span>
    </div>
  );
};

export default SocialIcons;
