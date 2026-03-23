import { Button } from "@/components/ui/button";

import {FiDownload} from "react-icons/fi";

const Home = () => {
  return ( <section className = 'h-full'>
    <div className = 'container mx-auto'>
      <div className = 'flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* text */}
        <div className = 'text-center xl:text-left'>
          <span className= 'text-xl'>AI Engineer</span>
          <h1 className = 'h1 mb-6'>
            Hello I'm <br /><span className='text-accent'> Álvaro Sampaio</span>
          </h1>
          <p className = 'max-w-[500px] mb-9 text-white/80'>
            I excel at crafting elegant digital experiences and I am 
            proficient in various programming languages and frameworks, including Python, JavaScript, and React.
          </p>
          {/* buttom and socials*/}
          <div className = 'flex flex-col xl:flex-row items-center gap-8'>
            <Button variant = 'outline' size = 'lg' className = 'uppercase flex itms-center gap-2'>
              <span>Download CV</span>
              <FiDownload className = 'text-xl' />
            </Button>
            <div className = 'mb-8 xl:mb-0 flex '>
              <Socials />
            </div>
          </div>
        </div>
        {/* photo */}
        <div><photo /></div>
      </div>
    </div>
  </section>
  );
};

export default Home;