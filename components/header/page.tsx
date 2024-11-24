import Image from "next/image";
import content from "@/public/Content.svg"
import action from "@/public/Actions.svg"
import icon from "@/public/Icon.svg"
import menu from "@/public/Menu.svg"
export default function Header() {
    return (
        <div>
            <div className="w-screen h-[54px] bg-header_color border-border border-[1px] hidden xl:flex justify-center items-center gap-[32px] ">
                <Image
                    src={content}
                    alt="content"
                    width={386}
                    height={30}
                >
                </Image>
                <Image
                    src={action}
                    alt="action"
                    width={736}
                    height={24}
                >
                </Image>
            </div>
            <div className="flex justify-center items-center w-screen h-[72px] bg-header_color border-border border-[1px]">
                <div className="flex justify-center items-center gap-[8.25rem] w-screen max-lg:gap-[20px] max-[852px]:justify-between ">
                    <div className="max-[852px]:ml-[26px]">
                        <Image
                            className="max-w-[130.6px] h-[41px]"
                            src={icon}
                            alt="icon"
                            width={130.6}
                            height={41}
                        >
                        </Image>
                    </div>
                    <div className="flex justify-center items-center gap-[32px] max-lg:gap-[10px] ">
                        <ul className="flex justify-center items-center gap-[32px] max-lg:gap-[15px] max-[852px]:hidden">
                            <li><a href="">Home</a></li>
                            <li><a href="">Courses</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Achievement</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Testimonial</a></li>
                        </ul>
                        <div className="flex justify-center items-center gap-[16px] max-[852px]:hidden">
                            <button className="w-[80px] h-[40px] border-[#000000] border-[1px] rounded-[5px]">Login</button>
                            <button className="w-[95px] h-[40px] border-[#000000] border-[1px] rounded-[5px] bg-[#000000] text-white">Sign Up</button>
                        </div>
                        <div className="hidden max-[852px]:flex mr-[20px] cursor-pointer">
                            <Image
                                className=""
                                src={menu}
                                alt="menu"
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}