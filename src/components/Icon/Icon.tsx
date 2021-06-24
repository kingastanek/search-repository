import icons from 'icons/icons';
import COLORS from 'styles/colors';

export type tIcon = {
  icon: string;
  fill?: string;
  width?: string;
  height?: string;
};

const Icon = ({ icon, fill = COLORS.GREY }: tIcon): JSX.Element | null => {
  const IconComponent = icons[icon];

  if (!IconComponent) return null;
  return <IconComponent fill={fill} />;
};

export default Icon;
