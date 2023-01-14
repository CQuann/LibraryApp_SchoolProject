import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import mainLogo from './MainLogo.png';



export const Header = ({ ...props }: HeaderProps) => {
	return (
		<header {...props} className={cn(styles.header)}>
			<div className={styles.icon}>
				<img src={'./MainLogo.png'} alt="logo" className={styles.logo} />
			</div>
			<div className={styles.name}>
				Library
			</div>
		</header>
	);
};