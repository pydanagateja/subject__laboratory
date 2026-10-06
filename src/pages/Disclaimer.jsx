import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Disclaimer</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Educational Purpose</h2>
          <p>
            This Digital Laboratory website is developed as an educational project for the 
            Data Science course (22DS102006) at Mohan Babu University. It is intended solely 
            for educational and non-commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Video Content</h2>
          <p className="mb-3">
            All videos are embedded from YouTube using YouTube's official embed feature. 
            Videos are streamed directly from YouTube's servers and are not downloaded, 
            stored, or redistributed by this website.
          </p>
          <p>
            All video content remains the property of their respective creators and copyright 
            holders. We do not claim ownership of any embedded video content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Fair Use</h2>
          <p className="mb-3">
            The use of embedded educational videos falls under Fair Use for educational 
            purposes as outlined in Section 107 of the Copyright Act. This website:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Is non-commercial and educational</li>
            <li>Does not host or redistribute content</li>
            <li>Links directly to original sources on YouTube</li>
            <li>Does not replace or compete with original content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Copyright Notice</h2>
          <p>
            All rights to embedded content belong to their respective owners. If you are a 
            content owner and wish to have your video removed, please contact the course 
            administrator and we will remove it immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">No Endorsement</h2>
          <p>
            The inclusion of any video does not imply endorsement by the content creator 
            of this educational project.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">University Information</h2>
          <div className="space-y-1">
            <p><strong>Course:</strong> Data Science (22DS102006)</p>
            <p><strong>Section:</strong> 02</p>
            <p><strong>Institution:</strong> Mohan Babu University</p>
            <p><strong>Faculty:</strong> Bosu Babu, Assistant Professor</p>
            <p><strong>Academic Year:</strong> 2024-2025</p>
          </div>
        </section>

        <section className="text-sm text-gray-600 italic border-t pt-4 mt-6">
          <p>
            This disclaimer is provided for informational purposes and does not constitute 
            legal advice. The website is maintained as part of academic coursework and 
            follows educational fair use guidelines.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
