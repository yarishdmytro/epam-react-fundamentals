import React from 'react';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import Button from '../../common/Button/Button';

const CourseInfo = (props) => {
	const { course, authors, onBackButtonClick } = props;
	const authorsName = course.authors.map((id) => {
		const foundAuthor = authors.find((author) => author.id === id);
		return foundAuthor ? foundAuthor.name : '';
	});

	return (
		<div className='course-info'>
			<h2 className='course-info__title '>{course.title}</h2>
			<div className='course-info__details p-5 border border-success row no-gutters'>
				<div className='col-6'>
					<div>
						<strong>Description: </strong>
						{course.description}
					</div>
				</div>
				<div className='border-left offset-1 col-5 pl-5'>
					<div className='pb-3'>
						<strong>ID: </strong>
						{course.id}
					</div>
					<div className='pb-3'>
						<strong>Duration: </strong>
						{getCourseDuration(course.duration)}
					</div>
					<div className='pb-3'>
						<strong>Creation Date: </strong>
						{formatCreationDate(course.creationDate)}
					</div>
					<div className='pb-3'>
						<strong>Authors: </strong>
						{authorsName.join(', ')}
					</div>
				</div>
			</div>
			<div className='course-info__button pt-3 d-flex align-items-end justify-content-end'>
				<Button onClick={onBackButtonClick}>Back to Courses</Button>
			</div>
		</div>
	);
};

export default CourseInfo;
