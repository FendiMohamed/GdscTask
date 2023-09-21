'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from '/utils/motion';
import {TypingText } from '/utils/CustomTexts';
import axios from "axios";

function Contact() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await axios.post('/api/contact', {
        name: form.name,
        email: form.email,
        message: form.message,
      });
  
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
  
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
  
      alert('Ahh, something went wrong. Please try again.');
    }
  };
  
  return (
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
       className="flex flex-col gap-12 lg:flex-row justify-between items-center lg:items-start lg:px-16 content contentdiv2 ">
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className=" grow basis-1/2 cc"
      >
       <div id='h' className="content__title-main hidden" ></div>
       <span className="content__title-sub hidden"></span>
       
          
            <TypingText title="CONTACT US" textStyles="lg:text-5xl  text-4xl font-bold text-white my-4 text-center  capitalize lg:text-left  " />
          
          <p className="block w-80 sm:w-96 lg:w-3/4 rounded-md px-2 text-white outline-none" >
          Feel free to reach out to us anytime; our dedicated team is here to assist you with any inquiries or information related to our club. Your satisfaction is our top priority!
         
      </p>
          <form
                ref={formRef}
                onSubmit={handleSubmit}
             
          >

            <input
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
              className="block w-80 sm:w-96 lg:w-3/4 bg-black rounded-md px-8 py-4 border-white border  my-4 text-white outline-none"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Name"
              onChange={handleChange}
              value={form.name}
            />
            <input
             variants={fadeIn('right', 'spring', 1, 0.75)}
              className="block w-80 sm:w-96 lg:w-3/4  bg-black rounded-md  border-white border px-8 py-4 my-4 text-white outline-none"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />
            <textarea
             variants={fadeIn('right', 'spring', 1.5, 0.75)}
              className="block w-80 sm:w-96 lg:w-3/4 h-56  bg-black border-white border rounded-md px-8 py-4 my-4 text-white overflow-auto resize-none outline-none"
              type="textarea"
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Your message..."
              onChange={handleChange}
              value={form.message}
            />
            <button
              className="block w-80 sm:w-96 lg:w-3/4 bg-black hover:bg-white border-white border-2 rounded-full px-4 py-4 my-4 text-white hover:text-black font-bold transition-all duration-300 ease-in-out"
              type="submit"
            >
                 {loading ? "Sending..." : "Send"}
            </button>
          </form>
      
        </motion.div>

        <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="grow basis-1/2"
      >
    
            <TypingText title="WHERE TO FIND US" textStyles="lg:text-5xl text-4xl font-bold text-white my-4 text-center lg:text-left  capitalize " />
       <p 
       className="text-white my-4 text-center text-lg lg:text-left text-wrap "
       >We are mostly active in Sidi Bel Abbes. Looking for exact coordinates? Find Us Here </p>
          <div className="relative  overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11362.138478311485!2d-0.6240710036288056!3d35.20714944548696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f00290df8ed91%3A0x91bd238762e84ce4!2s%C3%89cole%20sup%C3%A9rieure%20en%20informatique%20de%20Sidi%20Bel%20Abb%C3%A8s!5e0!3m2!1sen!2sdz!4v1672326140491!5m2!1sen!2sdz"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-1 border-white w-5/6 mx-auto md:mx-0 h-96 rounded-3xl "
            ></iframe>
          </div>

        </motion.div>
      </motion.div>
  
  );
}
export default Contact;
