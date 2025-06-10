import React from 'react'
import TipBox from '../../../TipBox/TipBox';


function Intro() {

    const features = [
        {
          title: 'Rapid Course & Book Creation',
          description: 'Turn ideas into a structured course or book in minutes with no blank-page delays.',
        },
        {
          title: 'Audiobook Generation',
          description: 'Instantly convert written content into engaging audiobooks learners can enjoy anywhere.',
        },
        {
          title: 'Email & Image Generation',
          description: 'Generate ready-to-send emails and brand-matched images in one click.',
        },
        {
          title: 'Easy Hosting & Monetization',
          description: 'Seamlessly host your courses, easily integrate payment systems, and start monetizing immediately, no complicated setups or hefty costs.',
        },
      ];
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7b1fa2]"> Introduction to Mini Lessons Academy</h2>
        <p className="text-gray-700">
            Welcome to Mini Lessons Academy (Mini Lessons), the fastest way for coaches, educators, and creators to transform their expertise into polished digital products like courses, books, audiobooks, and more, without complex technical skills or endless content creation burnout.
        </p>
        <p className="text-gray-700">        
        Mini Lessons uses AI to structure your ideas into organized text, images, and audio. Whether you're launching your first product or scaling your business, we simplify each step of the creation process so you can spend more time growing your business, not battling tech.
        </p>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <p className="text-md font-bold text-[#7b1fa2]">        
        Here's a quick overview of how Mini Lessons works and what you'll learn in this guide:
        </p>
        
        <ul className="list-none space-y-4 pl-4 border-l-2 border-[#7b1fa2]">
            {features.map((item, index) => (
                <li key={index} className="pl-4">
                <h3 className="text-md font-semibold text-[#7b1fa2]">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
                </li>
            ))}
        </ul>

        <p className="text-gray-700">        
            In this guide, you’ll find straightforward explanations, practical tips, and clear examples designed to help you quickly master every feature, from content creation to monetization. Each section is brief, focused, and easy to navigate, so you can get exactly the help you need, exactly when you need it.
        </p>

        
        <TipBox>
          If you ever get stuck, simply return here for quick guidance, no need for late-night Googling or stress-induced headaches.
        </TipBox>
        
        
        <p className="text-gray-700">
            Now, let’s dive in and get you up and running!
        </p>
        
      </div>
    </>
  )
}

export default Intro