import React from 'react';
import styles from './Header.module.css';
import Button from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

const Header = (props) => {
	const isAuthorized = true;

	return (
		<div className={styles.header}>
			<Logo />
			<div>
				<span className={styles.username}>{props.name}</span>
				<Button>{isAuthorized ? 'Logout' : 'Login'}</Button>
			</div>
		</div>
	);
};

export default Header;
