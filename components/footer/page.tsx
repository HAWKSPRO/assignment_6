import Image from "next/image"
import icon from "@/public/Icon.svg"
import social_links from "@/public/Social Links.svg"
export default function Footer(){
    return(
        <div className="mt-[80px]">
            <div className="flex flex-col items-center w-screen h-[700px]">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                    <div className="flex flex-col justify-center items-center gap-[20px] xl:flex-row xl:justify-between xl:w-screen">
                        <div className="xl:ml-[40px]">
                            <h3 className="font-semibold text-[18px] text-center ">
                            Subscribe to our newsletter
                            </h3>
                            <p className="text-center xl:hidden">
                            Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.
                            </p>
                            <p className="text-center text-[16px] max-xl-hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[20px] xl:flex-row xl:mr-[40px]">
                            <input type="email" placeholder="Enter your email" className="w-[380px] xl:w-[256px] h-[48px] border border-black rounded-[5px] pl-[10px]" />
                            <button className="w-[380px] xl:w-[119px] h-[48px] text-[16px] text-center border border-black rounded-[5px]">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="xl:ml-[685px]">
                        <p className="text-[12px]">
                        By subscribing you agree to with our <span className="underline"> Privacy Policy</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[40px] w-[172px] h-[856px] mt-[40px]  xl:w-screen xl:h-[500px] xl:flex-row xl:gap-[150px] xl:justify-center xl:items-center">
                    <div className="flex flex-col xl:w-[250px] xl:h-[270px]">
                        <Image
                            src={icon}
                            alt="icon"
                            width={172}
                            height={40}
                        >
                        </Image>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center xl:h-[270px]">
                        <h3 className="font-semibold text-[16px]">
                            Courses
                        </h3>
                        <ul className="flex flex-col gap-[16px] text-center">
                            <li>Business</li>
                            <li>Development</li>
                            <li>Technology</li>
                            <li>Design</li>
                            <li>Programming</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center xl:h-[270px]">
                        <h3 className="font-semibold text-[16px]">
                            Resources
                        </h3>
                        <ul className="flex flex-col gap-[16px] text-center">
                            <li>Career</li>
                            <li>Resume</li>
                            <li>Learning</li>
                            <li>Interview Preparation</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center xl:h-[270px]">
                        <h3 className="font-semibold text-[16px]">
                            About Us
                        </h3>
                        <ul className="flex flex-col gap-[16px] text-center">
                            <li>Contact</li>
                            <li>Help/Support</li>
                            <li>FAQ</li>
                            <li>Terms and Conditions</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[80vw] mt-[50px] mb-[50px] m-auto h-[2px] border-t-2 border-black"></div>
                <div className="flex flex-col justify-center items-center gap-[24px] w-screen h-[114] xl:flex-row xl:justify-between">
                    <div className="flex flex-col justify-center items-center gap-[24px] xl:flex-row xl:ml-[126px]">
                        <div>
                            <p className="text-[14px]">2023 Ddsgnr. All right reserved.</p>
                        </div>
                        <div>
                            <ul className="flex justify-center items-center gap-[24px] text-[14px] underline"> 
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookies Settings</li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:mr-[126px]">
                        <Image
                            src={social_links}
                            alt="social_links"
                            width={132}
                            height={24}
                        >
                        </Image>
                    </div>
                </div>
            </div>
        </div>
    )
}