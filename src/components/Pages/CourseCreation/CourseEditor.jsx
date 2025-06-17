import React from 'react'
import TipBox from '../../TipBox/TipBox'


function CourseEditor() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Using the Course Editor</h2>
          <p className="text-gray-700">The Mini Lessons Course Editor allows you to easily modify, enhance, and perfect your courses with intuitive editing features and seamless media integration. Here’s a quick overview of its main components:</p>
          <p className="text-gray-700">Here's exactly how it works:</p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Chapters Management</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Chapter Sidebar: </span>View and navigate through your course's chapters easily.
            </li>
            <li>
              <span className="font-semibold">Collapsible Sidebar: </span>Easily collapse or expand the chapter navigation pane by pressing the collapse button to maximize your editing space.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Text Editor Toolbar</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Bold, Italic, Underline: </span>Quickly format text for emphasis.
            </li>
            <li>
              <span className="font-semibold">Text Alignment & Indent: </span>Arrange your content clearly with alignment (left, center, right) and indentation options.
            </li>
            <li>
              <span className="font-semibold">Text Color & Background Color: </span>Customize the appearance of text to highlight important points or match your brand.
            </li>
            <li>
              <span className="font-semibold">Headings: </span>Structure your course clearly with headings and subheadings.
            </li>
            <li>
              <span className="font-semibold">Insert Link: </span>Add clickable hyperlinks to external resources or references.
            </li>
            <li>
              <span className="font-semibold">Insert Image: </span>Upload and embed images directly from your computer.
            </li>
            <li>
              <span className="font-semibold">Video Embed: </span>Easily embed videos from YouTube, Vimeo, or other video-sharing platforms to enrich your content.
            </li>
            <li>
              <span className="font-semibold">Clear Formatting: </span>Remove existing formatting from selected text to maintain consistency.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Top Navigation Buttons</p>  
          <p className="text-gray-700">Additional editing options accessible from the top bar:</p>
          <div className="flex justify-start mt-2">
            <img src="/imgs/course-creation/course-editor/ce-1.png" alt="Description" className="w-full md:w-4/5 h-auto p-6 shadow-sm rounded-md" />
          </div>
                     
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold"> Email Campaign: </span>Instantly generate emails tailored specifically for promoting your course.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about email campaigns here</span><img src="/imgs/course-creation/course-editor/ce-2.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Admin (Course Hosting): </span>Configure visibility, privacy, embedding, and other sharing settings for your courses.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about course hosting here</span><img src="/imgs/course-creation/course-editor/ce-3.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>
            
            <li>
              <span className="font-semibold">Create Quiz: </span>Enhance your course by adding quizzes and interactive assessments.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about quizzes here</span><img src="/imgs/course-creation/course-editor/ce-4.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Create Audio: </span>Transform your written course content into professional-quality audiobooks.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about audiobooks here</span><img src="/imgs/course-creation/course-editor/ce-5.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Media Library: </span>Access your uploaded or generated images, perfect for enriching course visuals.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about media management here</span><img src="/imgs/course-creation/course-editor/ce-6.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Course Cover: </span> Generate or upload a visually appealing cover for your course to attract attention and engagement.
            </li>

            <li>
              <span className="font-semibold">Save Content: </span>Regularly save your changes and edits with one click to ensure your work is securely stored.
            </li>
          </ul>

          <TipBox label="Tips for Effective Course Editing">
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                  <li>
                    Regularly preview your course from your learners' perspective to ensure clarity and flow.
                  </li>
                  <li>
                    Utilize media elements like images, videos, and quizzes to enhance learner engagement.
                  </li>
                  <li>
                    Keep formatting consistent across chapters for a professional, cohesive appearance.
                  </li>
              </ul>
          </TipBox>

          <p className="text-gray-700">With Mini Lessons intuitive editor, you can easily refine your courses, embed rich multimedia content, and craft polished, engaging educational experiences tailored exactly to your audience’s needs.</p>
          <p className="text-gray-700">Happy Editing!</p>

      </div>
    </>
  )
}

export default CourseEditor