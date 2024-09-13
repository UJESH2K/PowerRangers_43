"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="bg-dark min-h-screen">
      <header className="header">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <a href="#" className="text-white flex items-center">
              <ion-icon
                name="barbell-sharp"
                aria-hidden="true"
                className="text-2xl mr-2"
              ></ion-icon>
              <span className="font-bold text-xl">MotionMind</span>
            </a>
            <nav
              className={`navbar ${navbarOpen ? "block" : "hidden"} lg:block`}
            >
              <button
                className="nav-close-btn text-white"
                aria-label="close menu"
                onClick={() => setNavbarOpen(false)}
              >
                <ion-icon name="close-sharp" aria-hidden="true" />
              </button>
              <ul className="navbar-list flex lg:space-x-8 space-y-4 lg:space-y-0">
                <li>
                  <a href="#home" className="navbar-link active text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#class" className="navbar-link text-white">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-link text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="text-white lg:hidden"
              onClick={() => setNavbarOpen(true)}
            >
              <span className="line bg-white w-6 h-1 block mb-1"></span>
              <span className="line bg-white w-6 h-1 block mb-1"></span>
              <span className="line bg-white w-6 h-1 block"></span>
            </button>
            <a
              href="#"
              className="btn btn-secondary text-white hidden lg:block"
            >
              Log In
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero bg-dark relative">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20">
            <div className="hero-content text-white lg:w-1/2">
              <p className="hero-subtitle text-2xl mb-4">
                <strong className="font-bold">Elevate Performance</strong>{" "}
                Achieve Goals
              </p>
              <h1 className="text-5xl font-bold mb-6">
                Work Hard To Get Better Life
              </h1>
              <p className="section-text text-lg mb-8">
                Your body can stand almost anything. It’s your mind that you
                have to convince.
              </p>
              <a
                href="#"
                className="btn btn-primary bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Get Started
              </a>
            </div>
            <div className="hero-banner lg:w-1/2">
              <Image
                src="/assets/images/main.png"
                alt="hero banner"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about bg-white py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="about-banner lg:w-1/2 relative">
              <Image
                src="/exercise.png"
                alt="about banner"
                width={660}
                height={648}
                className="w-full"
              />
              <Image
                src="/assets/images/fitness.png"
                alt="fitness"
                width={650}
                height={154}
                className="absolute top-0"
              />
            </div>
            <div className="about-content lg:w-1/2 lg:ml-12 mt-12 lg:mt-0">
              <p className="section-subtitle text-blue-600 text-xl mb-4">
                About Us
              </p>
              <h2 className="h2 section-title text-3xl font-bold mb-6">
                Welcome To Our Fitness Gym
              </h2>
              <p className="section-text text-lg mb-4">
                This platform utilizes advanced machine learning to guide you
                through exercises like deadlifts, offering real-time feedback to
                refine your form and track your health.
              </p>
              <p className="section-text text-lg">
                Whether you're new to fitness or an experienced athlete,
                personalized insights will help you improve performance and
                safely reach your fitness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section id="class" className="class bg-dark py-20">
          <div className="container mx-auto">
            <p className="section-subtitle text-blue-600 text-xl text-center">
              Our Features
            </p>
            <h2 className="h2 section-title text-3xl font-bold text-white text-center mb-12">
              Enhance Your Posture
            </h2>
            <ul className="class-list flex overflow-x-scroll space-x-6">
              <li className="scrollbar-item bg-white p-6 rounded-lg shadow-lg min-w-[300px]">
                <Image
                  src="/assets/images/deadlift.jpg"
                  alt="Dead Lifting"
                  width={416}
                  height={240}
                />
                <h3 className="text-2xl font-bold mt-4">Dead Lifting</h3>
                <p className="text-gray-700 mt-2">
                  Master the art of deadlifting with precise, real-time feedback
                  that helps optimize your form.
                </p>
              </li>
              <li className="scrollbar-item bg-white p-6 rounded-lg shadow-lg min-w-[300px]">
                <Image
                  src="/assets/images/class-2.jpg"
                  alt="Bicep Curl"
                  width={416}
                  height={240}
                />
                <h3 className="text-2xl font-bold mt-4">Bicep Curl</h3>
                <p className="text-gray-700 mt-2">
                  Perfect your bicep curl technique with detailed feedback,
                  enhancing muscle engagement.
                </p>
              </li>
              {/* Add more class cards as needed */}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
