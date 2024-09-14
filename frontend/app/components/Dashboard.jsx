"use client"
import React from 'react';
import { Bell, Home, User, ChevronDown, Dumbbell, Sandwich, FileBarChart } from 'lucide-react';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ExerciseCard = ({ icon, title, accuracy,handlefn }) => (
  <div className="bg-white rounded-lg p-4 shadow">
    <div className="bg-blue-500 text-white p-3 rounded-lg mb-4">
      {icon}
      <span className="ml-2 font-semibold">{title}</span>
    </div>
    <div className="mb-2">
      <span className="text-sm text-gray-600">Form Accuracy</span>
      <span className="float-right font-semibold">{accuracy}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-black h-2.5 rounded-full" style={{ width: `${accuracy}%` }}></div>
    </div>
    {/* <Link 
      href={"http://localhost:8888/notebooks/Desktop/MediaPipePoseEstimation/Media%20Pipe%20Pose%20Tutorial.ipynb"}
    className="w-[80vw] mt-4 bg-black text-white py-2 rounded-md font-semibold">
      Analyze
    </Link> */}
    <button onClick={{handlefn}} className="w-full mt-4 bg-black text-white py-2 rounded-md font-semibold">
      Analyze
    </button>
    <button className="w-full mt-4 bg-black text-white py-2 rounded-md font-semibold">
      View Details
    </button>
  </div>
);

export default function Dashboard(){
  const router = useRouter();
  return(
    <>
    <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-white p-6">
      <div className="flex items-center mb-8">
        <Dumbbell className="text-blue-500" />
        <span className="ml-2 text-xl font-bold">FitTrack</span>
      </div>
      <nav>
        <a href="#" className="flex items-center py-2 text-gray-600 hover:text-black">
          <Home className="mr-3" /> Dashboard
        </a>
        <a href="#" className="flex items-center py-2 text-gray-600 hover:text-black">
          <User className="mr-3" /> Profile
        </a>
      </nav>
    </aside>
    
    <main className="flex-1 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Exercise Dashboard</h1>
        <div className="flex items-center">
          <Bell className="mr-4 text-gray-600" />
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 text-center content-center font-semibold">J</div>
            <span className="mr-2">John Doe</span>
            <Dropdown/>
          </div>
        </div>
      </header>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Form Tracking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExerciseCard icon={<FileBarChart size={24} />} title="Deadlift" accuracy={75} handlefn={router.push('http://localhost:8080/')} />
          <ExerciseCard icon={<Sandwich size={24} />} title="Bicep Curl" accuracy={87} handlefn={router.push('http://localhost:8080/')}/>
          <ExerciseCard icon={<Dumbbell size={24} />} title="Squats" accuracy={92}handlefn={router.push('http://localhost:8080/')} />
        </div>
      </section>
    </main>
  </div>
    </>
  )
  
};
