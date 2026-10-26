import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  badgeType?: 'default' | 'accent' | 'secondary';
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeType = 'default',
  title,
  subtitle,
  centered = false,
}) => {
  const badgeClass =
    badgeType === 'accent'
      ? 'section-badge badge-accent'
      : badgeType === 'secondary'
      ? 'section-badge badge-secondary'
      : 'section-badge';

  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {badge && <span className={badgeClass}>{badge}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
