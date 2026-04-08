import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon?: ReactNode;
  children?: ReactNode;
}

const Button = ({ icon, children, ...rest }: ButtonProps) => {
  return (
    <button className={styles['primary-button']} {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
export default Button;
