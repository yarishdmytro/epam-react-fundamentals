import React from 'react';
import Button from '../../common/Button/Button';
import './EmptyCourseList.css';

const EmptyCourseList = () => {
	return (
		<div className='text-center empty-course-list'>
			<div className='div'>
				<h2>Course List is Empty</h2>
				<p>Please use "Add New Course" button to add your first course.</p>
				<Button>Add New Course</Button>
			</div>
		</div>
	);
};
export default EmptyCourseList;
