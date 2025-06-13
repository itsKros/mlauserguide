import React from 'react'
import TipBox from '../../TipBox/TipBox'


function QuizMedia() {
  return (
    <>
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#7b1fa2]">QuizMedia</h2>
            <div className="flex justify-start py-6">
                <img src="/imgs/quiz-media/qm-1.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Creating Quizzes</h2>

            <p className="text-gray-700">
                Mini Lessons Academy offers a powerful yet intuitive Quiz Generator, enabling you to enhance your courses or books with engaging interactive assessments.
            </p>

            <h2 className="text-xl font-bold text-[#7b1fa2]">Quiz Types Available</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>
                    <span className="font-semibold">Multiple Choice:</span> Provides a question with multiple selectable answers. Automatically graded in real-time.
                </li>
                <li>
                    <span className="font-semibold">True/False:</span> Simple statements assessed as correct or incorrect instantly.
                </li>
                <li>
                    <span className="font-semibold">Fill in the Blank:</span> Learners type answers to complete statements or phrases; graded based on accuracy.
                </li>
                <li>
                    <span className="font-semibold">Flip Cards (Flashcards):</span> Interactive cards reveal answers when clicked—perfect for memory recall.
                </li>
                <li>
                    <span className="font-semibold">Short Answer:</span>  Learners type responses in their own words; the AI intelligently grades based on relevance and accuracy.
                </li>
            </ul>

            <h2 className="text-xl font-bold text-[#7b1fa2]">Quiz Types Available</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>
                    <span className="font-semibold">Click "Create Quiz":</span> Located at the top toolbar within your course/book editor.
                </li>
                <li>
                    <span className="font-semibold">Select Quiz Type:</span> Choose your preferred assessment style (Multiple Choice, True/False, etc.).
                </li>
                <li>
                    <span className="font-semibold">Set Number of Questions:</span> Select between 1 and 10 questions per quiz for focused or comprehensive assessments.
                </li>
                <li>
                    <span className="font-semibold">Generate Quiz:</span> Click “Generate and Add Quiz,” and your quiz is instantly created using your existing course/book content.
                </li>
                <li>
                    <span className="font-semibold">Review & Customize:</span> Preview your quiz to ensure accuracy and suitability. If needed, regenerate or customize further.
                </li>
            </ul>
            <div className="flex justify-start py-6">
                <img src="/imgs/quiz-media/qm-2.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 

            <h2 className="text-xl font-bold text-[#7b1fa2]">Interactive Grading:</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li>Quizzes are auto-graded immediately, providing instant feedback.</li>
                <li>Short answer responses are intelligently evaluated by Mini Lessons advanced AI, offering precise and relevant scoring.</li>
            </ul>

            <TipBox label="Quick Tips">
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                    <li>Regularly include quizzes to boost learner retention and engagement.</li>
                    <li>Utilize diverse question types to create more engaging and effective learning experiences.</li>
                    <li>Quickly regenerate quizzes for fresh or alternative question sets.</li>
                </ul>
            </TipBox> 

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Generating Images</h2>
            <p className="text-gray-700">Enhance your content visually using Mini Lessons built-in AI image generator.</p>
            <div className="flex justify-start py-6">
                <img src="/imgs/quiz-media/qm-3.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 
            <h2 className="text-xl font-bold text-[#7b1fa2]">Steps to Generate Images:</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li><span className="font-semibold">Navigate to Media Library:</span> Click “Media Library” from the top toolbar.</li>
                <li><span className="font-semibold">Choose “Generate Image”:</span> Enter a descriptive prompt (e.g., "a sunny beach scene at sunset") to quickly produce high-quality visuals for your content.</li>
                <li><span className="font-semibold">Preview & Save:</span> Review the generated image, then save it to your Media Library for easy reuse.</li>
            </ul>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h2 className="text-2xl font-bold text-[#7b1fa2]">Uploading Images</h2>
            <p className="text-gray-700">Mini Lessons simplifies the process of adding your custom images to your courses and books.</p>
            <div className="flex justify-start py-6">
                <img src="/imgs/quiz-media/qm-4.png" alt="Description" className="w-full md:w-3/5 h-auto p-6 shadow-sm rounded-md" />
            </div> 
            <h2 className="text-xl font-bold text-[#7b1fa2]">Steps to Upload Images:</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                <li><span className="font-semibold">Click "Upload Image":</span> Found in the toolbar or Media Library.</li>
                <li><span className="font-semibold">Select Files from Your Device: </span> Browse your computer or mobile device and select images.</li>
                <li><span className="font-semibold">Instant Access:</span> Uploaded images are automatically stored in your Media Library for convenient access and integration.</li>
            </ul>

            <TipBox label=" Quick Tips (Images & Multimedia):">
                <ul className="list-disc pl-5 space-y-2 mt-2 text-sm text-gray-800">
                    <li>Select clear, visually appealing images relevant to your content.</li>
                    <li>Use images consistently to reinforce key concepts and enhance learner understanding.</li>
                    <li>Regularly update visuals to maintain fresh, engaging content.</li>
                </ul>
            </TipBox>         
        </div>
    </>
  )
}

export default QuizMedia