import { ButtonPrimary, ButtonOutline } from "./Button.jsx";
import smallPFP from '../images/mySmallLogo.jpg'
import bigPFP from "../images/myProfilePicture.jpeg";
import resume from "../images/resume.pdf";


const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src={smallPFP}
                                width={40}
                                height={40}
                                alt="Shambhavi Goyal portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-300 text-large tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            
                            Looking for Internships
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-4">
                    Shambhavi Goyal
                    </h2>
                    <h4 className="headline-2 max-w-full mb-3">
                    CSE @ University at Buffalo
                    </h4>
                    <h6 className= "lg:text-base text-zinc-400 max-w-full mb-4 bold">
                    A full-stack developer looking for summer internships
                    </h6>



                    <div className="flex items-center gap-3">
                        <ButtonPrimary label="Download Resume" icon="download" href={resume} target="_blank" />
                        <ButtonPrimary href="#about" label="About Me!" icon="arrow_downward" />
                    </div>
                </div>

                <div className="hidden lg:flex flex-col items-center">
  <figure className="w-full max-w-[400px] relative rounded-full p-1 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-500">
    <img
      src={bigPFP}
      alt="Shambhavi Goyal"
      className="w-full h-full object-cover object-top rounded-full"
    />
  </figure>

  <p className="text-zinc-400 italic text-lg mt-6 text-center">
    “Code, create, and caffeinate ☕”
  </p>
</div>


            </div>
        </section>
    );
};

export default Hero;