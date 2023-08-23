import React from 'react';
import Button from '../../../../common/Button/Button';
import './CourseCard.css';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

const CourseCard = (props) => {
	let authorsName = [];
	props.course.authors.forEach((id) => {
		const foundAuthor = props.authors.find((author) => author.id === id);
		if (foundAuthor) {
			authorsName.push(foundAuthor.name);
		}
	});

	return (
		<div className='course-card'>
			<div className='course-card__info'>
				<h2>{props.course.title}</h2>
				<p>{props.course.description}</p>
			</div>
			<div className='course-card__details'>
				<div>
					<strong>Authors: </strong>
					{authorsName.join(', ')}
				</div>
				<div>
					<strong>Duration: </strong>
					{getCourseDuration(props.course.duration)}
				</div>
				<div>
					<strong>Created: </strong>
					{formatCreationDate(props.course.creationDate)}
				</div>
				<div className='course-card__button'>
					<Button onClick={props.onClick}>Show course</Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
