import { Button } from "@/components/ui/button";

import {FiDownload} from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return ( <section className = 'h-full'>
    <div className = 'container mx-auto'>
      <div className = 'flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-12'>
        {/* text */}
        <div className = 'text-center xl:text-left order-2 xl:order-none mt-[-32px] xl:mt-[-48px]'>
          <span className= 'text-xl'>AI Engineer</span>
          <h1 className = 'h1 mb-4'>
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
              <Social containerStyles="flex gap-4" iconStyles="w-9 h-9 border
              border-accent rounded-full flex justify-center items-center
              text-accent text-base hover:bg-accent hover:text-primary
              hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* photo */}
        <div className= 'order-1 xl:order-none mb-8 xl:mb-8'>
          <Photo />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;