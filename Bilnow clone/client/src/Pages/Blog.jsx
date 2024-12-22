import React from 'react';
import Header from '../Components/Header';
import blogbg from '../assets/blogbg.jpg'; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa'
import Cptcard from '../assets/Cptcard.webp'
import Compcard from '../assets/Compcard.webp'
import Streamcard from '../assets/Streamcard.webp'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer';
const Blog = () => {
  const posts = [
    {
      title: "CPT Code for Liposuction: 101...",
      image: Cptcard,
      date: "September 23, 2024",
      category: "Medical Billing"
    },
    {
      title: "A Comprehensive Guide to Understan...",
      image: Compcard,
      date: "September 23, 2024",
      category: "Medical Billing"
    },
    {
      title: "Streamline Your Practice Using EMR...",
      image: Streamcard,
      date: "September 23, 2024",
      category: "Medical Billing"
    }
  ]
  return (
    <>
      <Header />
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogbg})` }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-[48px] font-bold mb-8">Our Blog</h1>
          <p className="text-white text-[16px] leading-relaxed mb-10">
            With years of experience, we simplify complex billing processes for healthcare professionals of
            all specializations, assuring accuracy and increasing compensation. We're here to help you
            streamline your revenue cycle by providing customized & compliant solutions that meet
            industry standards.
          </p>
          <button className="bg-teal-400 text-white font-semibold py-2 px-6 rounded hover:bg-[#FFC567] transition">
            Schedule a free Demo
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-[48px]  text-gray-900">
          Latest Blogs
        </h1>
        <div className="relative w-full md:w-96">
          <input
            type="search"
            placeholder="Search Blog ..."
            className="w-full px-4 py-2 pl-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post, index) => (
      <article key={index} className="group cursor-pointer mx-2"> {/* Add margin to each card */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <img
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
        <div className="flex items-center gap-3 text-gray-600">
          <time dateTime="2024-09-23">{post.date}</time>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>{post.category}</span>
        </div>
      </article>
    ))}
  </div>
</div>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Blog;