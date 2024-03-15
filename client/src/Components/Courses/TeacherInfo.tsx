// TeacherInfo.tsx

import React from 'react';
import { User } from '../../util/interfaces';

interface TeacherInfoProps {
  teacher?: User;
  numberOfStudents: number | null;
  numberOfReviews: number | null;
  numberOfCourses: number | null;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({
  teacher,
  numberOfStudents,
  numberOfReviews,
  numberOfCourses,
}) => {
  if (!teacher) {
    // Handle the case when teacher is undefined
    return <div>No teacher information available</div>;
  }

  // Render the teacher information
  return (
    <div className='bg-white'>
      <h2>{teacher.displayName}</h2>
      {/* Other teacher information rendering */}
    

      <p className="font-bold text-[1rem]">{teacher.headline}</p>
      <div className="flex flex-row mt-6 gap-4">
        <div>
          <p className="text-gray-500 font-bold text-[0.9rem]">Total students</p>
          <p className="text-[1.3rem] font-bold mt-[0.4rem]">
            {numberOfStudents !== null ? numberOfStudents : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-gray-500 font-bold text-[0.9rem]">Reviews</p>
          <p className="text-[1.3rem] font-bold mt-[0.4rem]">
            {numberOfReviews !== null ? numberOfReviews : 'N/A'}
          </p>
          <p className="text-gray-500 font-bold text-[0.9rem]">Reviews</p>
          <p className="text-[1.3rem] font-bold mt-[0.4rem]">
            {numberOfCourses !== null ? numberOfCourses : 'N/A'}
          </p>
        </div>
      </div>
      {/* Additional details */}
    </div>
  );
};

export default TeacherInfo;
