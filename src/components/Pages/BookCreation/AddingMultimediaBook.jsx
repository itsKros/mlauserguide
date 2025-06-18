import React from 'react'
import TipBox from '../../TipBox/TipBox'

function AddingMultimediaBook() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Adding Images & Multimedia To Your Books
          </h2>
          <p className="text-gray-700">Enhance your books by integrating images, videos, and other multimedia elements. Mini Lessons makes adding visuals quick, easy, and effective, helping your readers connect deeply with your content.</p>

          <p className="text-xl font-bold text-[#7b1fa2]">Inserting Images</p>
          <p className="text-gray-700">To add images to your book:</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
            Click the image icon (🖼️) in the editor toolbar.
            </li>
            <li>
            Choose <span className="font-semibold">"Upload Image"</span> to add images directly from your device, or select <span className="font-semibold">"Generate Image"</span> to create custom visuals using AI.
              
            </li>
            <li>
            All uploaded or generated images are conveniently stored in your <span className="font-semibold">Media Library</span> for easy access at any time.

            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Embedding Videos</p>
          <p className="text-gray-700">Boost reader engagement by embedding videos directly into your book content (ideal for multimedia-rich ebooks):</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
            Click the video embed icon (🎬) in the toolbar.
            </li>
            <li>
            Paste the video URL from YouTube, Vimeo, or other supported video-sharing platforms.
            </li>
            <li>
            Quickly position your embedded videos within your text.

            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Creating Book Covers</p>
          <p className="text-gray-700">Make your book visually compelling by creating attractive covers:</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
             Click <span className="font-semibold">"Book Cover"</span> at the top toolbar.
            </li>
            <li>
            Generate a custom image by entering a descriptive prompt (e.g., "A magical castle under a starry sky") or upload your own unique design.
            </li>
            <li>
            Instantly preview and apply your new cover.
            </li>
          </ul>

          <TipBox label="Quick Tips">
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                  <li>
                  Choose clear, straightforward images to help readers quickly understand key concepts.
                  </li>
                  <li>
                  Include videos (when applicable) to break up text and keep readers engaged.

                  </li>
                  <li>
                  Update your multimedia regularly to maintain fresh, relevant, and appealing content.

                  </li>
              </ul>
          </TipBox>

          <p className="text-gray-700">Mini Lessons multimedia features make adding images, videos, and visuals to your books simple, keeping your content engaging, vibrant, and reader-focused!</p>

      </div>
    </>
  )
}

export default AddingMultimediaBook