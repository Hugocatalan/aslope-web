import React from 'react';
import { Info } from 'lucide-react';
import './EmptyState.css';

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  onAction,
  icon,
}) => {
  return (
    <div className="empty-state-box" role="status">
      <div className="empty-state-icon" aria-hidden="true">
        {icon || <Info size={36} />}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {actionText && onAction && (
        <button type="button" className="btn btn-outline btn-sm" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
};
