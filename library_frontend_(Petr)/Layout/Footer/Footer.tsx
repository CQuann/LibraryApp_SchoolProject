import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer {...props} className={cn(className, styles.footer)}>
			<div className={styles.protect}>
				Library © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<div className={styles.MadeBy}>
				Made by Grisha Krylov and Peter Stepanov
			</div>
		</footer>
	);
};