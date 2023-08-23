import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import React, { useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<>
			<Header />
			<Courses courses={courses} authors={authors} />
		</>
	);
}

export default App;
