import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with<br className='max-md:hidden' />
        <span className='aqua_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Article Summarizer - an open-source article summarizer that transforms lengthy articles into succinct summaries.
      </h2>
    </header>
  );
};

export default Hero;
