import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import './Courses.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseInfo from '../CourseInfo/CourseInfo';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';

const Courses = (props) => {
	const [search, setSearch] = useState('');
	const [selectedCourse, setSelectedCourse] = useState(null);

	const getSearch = (data) => {
		setSearch(data);
	};

	const handleCourseClick = (course) => {
		setSelectedCourse(course);
	};

	const handleBackButtonClick = () => {
		setSelectedCourse(null);
	};

	return (
		<div className='courses container-fluid'>
			{selectedCourse ? (
				<CourseInfo
					course={selectedCourse}
					authors={props.authors}
					onBackButtonClick={handleBackButtonClick}
				/>
			) : (
				<div className='course-header row col-12'>
					<SearchBar onSubmit={getSearch} />
					<div className='course-button'>
						<Button>Add new course</Button>
					</div>
					{props.courses.length < 1 ? (
						<EmptyCourseList />
					) : (
						props.courses
							.filter((elem) => {
								return search.toLowerCase() === ''
									? elem
									: elem.title.toLowerCase().includes(search) ||
											elem.id.toLowerCase().includes(search);
							})
							.map((course) => (
								<CourseCard
									course={course}
									key={course.id}
									authors={props.authors}
									onClick={() => handleCourseClick(course)} // Add click handler
								/>
							))
					)}
				</div>
			)}
		</div>
	);
};

export default Courses;
