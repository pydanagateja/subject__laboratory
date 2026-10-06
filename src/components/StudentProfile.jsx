import { User, GraduationCap, Building2, BookOpen, IdCard, Users } from 'lucide-react';

const StudentProfile = () => {
  const student = {
    name: "P. Naga Teja",
    rollNo: "24102A030102",
    department: "Data Science",
    section: "02",
    courseId: "22DS102006",
    subject: "Data Science",
    faculty: "Bosu Babu",
    designation: "Assistant Professor"
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
          Student Profile
        </h3>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
          DATA SCIENCE
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center border-4 border-white shadow-md">
              <User className="w-12 h-12 md:w-14 md:h-14 text-primary-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="flex-1">
          {/* Name and Department */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {student.name}
            </h2>
            <p className="text-gray-600 font-medium">
              {student.department} • Section {student.section}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-4">
            {/* Roll No */}
            <div className="flex items-start gap-2">
              <IdCard className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Roll No</p>
                <p className="text-sm text-gray-900 font-semibold">{student.rollNo}</p>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-2">
              <Building2 className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Department</p>
                <p className="text-sm text-gray-900 font-semibold">{student.department}</p>
              </div>
            </div>

            {/* Section */}
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Section</p>
                <p className="text-sm text-gray-900 font-semibold">{student.section}</p>
              </div>
            </div>

            {/* Course ID */}
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Course ID</p>
                <p className="text-sm text-gray-900 font-semibold">{student.courseId}</p>
              </div>
            </div>

            {/* Subject */}
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Subject</p>
                <p className="text-sm text-gray-900 font-semibold">{student.subject}</p>
              </div>
            </div>

            {/* Faculty */}
            <div className="flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Faculty</p>
                <p className="text-sm text-gray-900 font-semibold">{student.faculty}</p>
                <p className="text-xs text-gray-500">{student.designation}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {student.courseId} • DIGITAL LABORATORY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
