import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface GroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size: 's' | 'm';
	href?: string;
}