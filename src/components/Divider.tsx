import React from 'react';
import './Divider.scss';

export interface DividerProps {
	orientation: 'bottom' | 'right';
	thickness: number;
}

export default function Divider({ orientation, thickness = 1, ...props }: DividerProps) {
	return <hr className={orientation} />;
}
