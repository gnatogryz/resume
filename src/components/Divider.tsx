import React from 'react';
import './Divider.scss';

export interface DividerProps {
	orientation: 'bottom' | 'right';
	thickness: number;
}

export default React.memo(function ({ orientation, thickness = 1, ...props }: DividerProps) {
	return <hr className={orientation} style={{ borderWidth: `${thickness / 14}rem` }} />;
});
