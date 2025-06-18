import React from 'react'
import TipBox from '../../TipBox/TipBox'

function BookEditor() {
  return (
    <>
      <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#7b1fa2]">Using the Book Editor</h2>
          <p className="text-gray-700">The Mini Lessons Book Editor allows you to easily modify, enhance, and polish your books with intuitive editing features and seamless media integration. Here’s a quick overview of its main components:
          </p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <p className="text-xl font-bold text-[#7b1fa2]">Chapters Management</p>             
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Chapter Sidebar: </span>Easily view and navigate through your book’s chapters
            </li>
            <li>
              <span className="font-semibold">Collapsible Sidebar: </span>Quickly collapse or expand the chapter navigation pane by clicking the collapse button, maximizing your editing workspace.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Text Editor Toolbar</p>     
          <p className="text-gray-700">The toolbar offers familiar tools for rich text editing:</p>
        
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold">Bold, Italic, Underline: </span>Quickly format text for emphasis.
            </li>
            <li>
              <span className="font-semibold">Text Alignment & Indent: </span>Clearly organize your content with alignment options (left, center, right) and indentation controls.

            </li>
            <li>
              <span className="font-semibold">Text Color & Background Color: </span>Customize your text’s appearance to highlight important sections or match your brand style.

            </li>
            <li>
              <span className="font-semibold">Headings: </span>Structure your book clearly with headings and subheadings.
            </li>
            <li>
              <span className="font-semibold">Insert Link: </span>Add clickable hyperlinks to external resources or references.
            </li>
            <li>
              <span className="font-semibold">Insert Image: </span>Easily upload and embed images directly from your device.

            </li>
            <li>
              <span className="font-semibold">Video Embed: (for enhanced ebooks)</span> Embed videos from YouTube, Vimeo, or other platforms to enrich multimedia ebook content.

            </li>
            <li>
              <span className="font-semibold">Clear Formatting: </span>Quickly remove existing formatting from selected text to maintain consistency.
            </li>
          </ul>

          <p className="text-xl font-bold text-[#7b1fa2]">Top Navigation Buttons</p>  
          <p className="text-gray-700">Additional editing options accessible from the top bar:
          </p>
          <div className="flex justify-start mt-2">
            <img src="/imgs/book-creation/book-editor/be-1.png" alt="Description" className="w-full md:w-2/5 h-auto p-6 shadow-sm rounded-md" />
          </div>
                      
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
            <li>
              <span className="font-semibold"> Email Campaign: </span>Instantly generate emails tailored specifically for promoting your book.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about email campaigns here</span><img src="/imgs/book-creation/book-editor/be-2.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Admin (Book Hosting): </span>Configure visibility, privacy, embedding, and other sharing settings for your books.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about book hosting here</span><img src="/imgs/book-creation/book-editor/be-3.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>
            
            <li>
              <span className="font-semibold">Create Quiz: </span>Add quizzes or interactive assessments to enhance your educational books.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about quizzes here</span><img src="/imgs/book-creation/book-editor/be-4.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Create Audio: </span>Transform your written book content into professional-quality audiobooks.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about audiobooks here</span><img src="/imgs/book-creation/book-editor/be-5.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Media Library: </span>Access and manage your uploaded or generated images, ideal for visually enriching your book.
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-800">
                <li className="flex justify-start items-center gap-x-2 space-2">
                  <span className="font-semibold">Learn more about media management here</span><img src="/imgs/book-creation/book-editor/be-6.png" alt="Description" className="h-auto" />
                </li>
              </ul>  
            </li>

            <li>
              <span className="font-semibold">Course Cover: </span> Generate or upload a visually appealing cover for your book to attract reader interest.
            </li>

            <li>
              <span className="font-semibold">Save Content: </span>Easily save your changes with one click, securely storing your work.
            </li>
          </ul>

          <TipBox label="Tips for Effective Book Editing">
              <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                  <li>
                  Regularly preview your book from your readers’ perspective to ensure clarity, smooth narrative flow, and readability.
                  </li>
                  <li>
                  Use media elements like images, embedded videos, or interactive quizzes (if applicable) to enhance reader engagement.

                  </li>
                  <li>
                  Maintain consistent formatting across all chapters for a polished, professional appearance.
                  </li>
              </ul>
          </TipBox>

          <p className="text-gray-700">With Mini Lessons intuitive editor, you can easily refine your books, embed engaging multimedia content, and create compelling, high-quality reading experiences tailored precisely for your audience’s interests and preferences.</p>
          <p className="text-gray-700">Happy Editing!</p>

      </div>
    </>
  )
}

export default BookEditor