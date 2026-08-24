import React from 'react';
import {
  Briefcase,
  Palette,
  Video,
  Mic,
  Code,
  Sparkles,
  Zap,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'briefcase':
    case 'office':
      return <Briefcase className={className} />;
    case 'palette':
    case 'designer':
      return <Palette className={className} />;
    case 'video':
    case 'creator':
      return <Video className={className} />;
    case 'mic':
    case 'voice':
    case 'voice-ai':
      return <Mic className={className} />;
    case 'code':
    case 'developer':
      return <Code className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'zap':
      return <Zap className={className} />;
    case 'check':
      return <CheckCircle className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};
