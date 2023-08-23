import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

const SearchBar = (props) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchInputChange = (event) => {
		if (event.target.value === '') {
			props.onSubmit('');
		}
		setSearchQuery(event.target.value);
	};

	const handleButtonClick = (searchValue) => {
		props.onSubmit(searchValue);
	};

	return (
		<div className='search-bar'>
			<div className=''>
				<Input
					type='text'
					placeholder='Enter course name or id...'
					value={searchQuery}
					onChange={handleSearchInputChange}
				/>
				<Button onClick={() => handleButtonClick(searchQuery)}>Search</Button>
			</div>
		</div>
	);
};

export default SearchBar;
