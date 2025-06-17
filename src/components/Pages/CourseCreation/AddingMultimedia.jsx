import React from 'react'
import TipBox from '../../TipBox/TipBox'

function AddingMultimedia() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Adding Images & Multimedia To Your Courses</h2>
          <p className="text-gray-700">Enhance your course by seamlessly integrating images, videos, and other multimedia elements. Mini Lessons makes this quick, intuitive, and impactful.</p>

          <p className="text-xl font-bold text-[#7b1fa2]">Inserting Images</p>
          <p className="text-gray-700">To add images:</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              Click the <span className="font-semibold">image icon</span> (🖼️) in the editor toolbar
            </li>
            <li>
              Choose <span className="font-semibold">"Upload Image"</span> to add from your device or select <span className="font-semibold">"Generate Image"</span> to create custom visuals using AI.
            </li>
            <li>
            Uploaded or generated images are conveniently stored in your <span className="font-semibold">Media Library</span> for quick access anytime.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Embedding Videos</p>
          <p className="text-gray-700">To embed a video, click the 🎬 icon and paste a YouTube or Vimeo URL:</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              Click the <span className="font-semibold">video embed icon</span> (🎬) in the toolbar
            </li>
            <li>
              Paste the URL from <span className="font-semibold">YouTube, Vimeo,</span> or other supported video-sharing platforms.
            </li>
            <li>
              Adjust and position your embedded videos easily within your text.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Creating Course Covers</p>
          <p className="text-gray-700">Give your course visual appeal with custom covers:</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              Click <span className="font-semibold">"Course Cover"</span> at the top toolbar.
            </li>
            <li>
              Generate an image by entering a descriptive prompt (e.g., "A magical castle under a starry sky") or upload your own design.
            </li>
            <li>
              Instantly preview and apply your new cover.
            </li>
          </ul>

          <TipBox label="Quick Tips">
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                  <li>
                    Choose clear, simple images to help learners quickly understand key ideas.
                  </li>
                  <li>
                    Use videos to break up text and keep your content interesting and easy to follow.
                  </li>
                  <li>
                    Keep your images and videos updated so your course stays fresh and engaging.
                  </li>
              </ul>
          </TipBox>

          <p className="text-gray-700">With Mini Lessons multimedia features, adding impactful visuals and interactive elements is simple, making your courses vibrant and engaging.</p>

      </div>
    </>
  )
}

export default AddingMultimedia