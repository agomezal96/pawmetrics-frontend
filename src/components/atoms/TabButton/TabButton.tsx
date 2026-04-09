import styles from './TabButton.module.css'

interface TabButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({
  label,
  count,
  isActive,
  onClick,
  ...rest
}: TabButtonProps) {
  return (
    <button
      className={isActive ? styles.active : ''}
      onClick={onClick}
      {...rest}
    >
      {label} ({count})
    </button>
  );
}
