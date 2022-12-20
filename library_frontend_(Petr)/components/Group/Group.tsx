import styles from './Group.module.css';
import { GroupProps } from './Group.props';
import cn from 'classnames';


export const Group = ({ size, children, href, className, ...props }: GroupProps) => {
	return (
		<div
			className={
				cn(styles.group, className, {
					[styles.s]: size == 's',
					[styles.m]: size == 'm'
				})}
			{...props}
		>
			{
				href
					? <a className={cn(styles.href, styles.group)} href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};