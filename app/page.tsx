import Image from "next/image";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import image from "@/public/Image.svg"
import image_b from "@/public/Image_b.svg"
import logos from "@/public/Logos.svg"
import logos_m from "@/public/Logos_m.svg"
import pen_tool from "@/public/pen-tool-2.svg"
import volume from "@/public/volume-high.svg"
import group from "@/public/group.svg"
import microphone from "@/public/microphone.svg"
import link from "@/public/link.svg"
import arrow from "@/public/arrow-2.svg"
import briefcase from "@/public/briefcase.svg"
import book from "@/public/book.svg"
import book_2 from "@/public/book_2.svg"
import course_img_1 from "@/public/course_img_1.svg"
import course_img_2 from "@/public/course_img_2.svg"
import course_img_3 from "@/public/course_img_3.svg"
import course_img_4 from "@/public/course_img_4.svg"
import course_img_5 from "@/public/course_img_5.svg"
import course_img_6 from "@/public/course_img_6.svg"
import star from "@/public/Star 1.svg"
import employee_1 from "@/public/employee_1.svg"
import employee_2 from "@/public/employee_2.svg"
import employee_3 from "@/public/employee_3.svg"
import employee_4 from "@/public/employee_4.svg"
import employee_5 from "@/public/employee_5.svg"
import employee_6 from "@/public/employee_6.svg"
import social_icons from "@/public/Social Icons.svg"
import stars from "@/public/Stars.svg"
import avatar_image from "@/public/Avatar Image.svg"
import avatar_image_2 from "@/public/Avatar Image_2.svg"
import avatar_image_3 from "@/public/Avatar Image_3.svg"
import slider_dots from "@/public/Slider Dots.svg"
import slider_buttons from "@/public/Slider Buttons.svg"
export default function Home() {
  return (
    <div >
      <Header />
      <div className="xl:flex  xl:w-[1280px] xl:h-[800px]">
        <div className="flex justify-center flex-col gap-[47px] mt-[30px] w-screen h-[390px] xl:w-[640px] xl:h-[800px] xl:mt-[0]">
          <div className="flex justify-center flex-col gap-[47px] m-auto">
            <div className="w-[380px] h-[174px]">
              <h1 className="font-bold text-[40px]  ">Learn new skills </h1>
              <h1 className="font-bold text-[40px] mb-[22px] ">online with ease</h1>
              <p>Discover a wide range of courses covering a <br />variety of subjects, taught by expert instructors.</p>
            </div>
            <div className="flex gap-[10px] w-[358px] h-[64px]">
              <button className="w-[178px] h-[48px] rounded-[5px] border-black border bg-black text-white">Start learning now</button>
              <button className="w-[178px] h-[48px] rounded-[5px] border-black border">Explore Courses</button>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-[100vw] h-auto max-h-[450px] xl:hidden"
            src={image}
            alt="image"
            width={640}
            height={780}
          >
          </Image>
          <Image
            className="w-[100vw] h-auto max-h-[450px] hidden xl:flex xl:w-[640px] xl:h-[800px] xl:max-h-[800px]"
            src={image_b}
            alt="image"
            width={640}
            height={780}
          >
          </Image>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] w-[428px] h-[239.34px] min-[426px]:justify-center min-[426px]:items-center min-[426px]:w-screen xl:flex-row xl:bg-header_color">
        <p className="font-bold text-[18px] ml-[27px] mt-[57px] xl:hidden">Trusted by the world's best companies <br /> [social proof to build credibility]</p>
        <p className="font-bold text-[18px] ml-[27px] mt-[10px] hidden xl:flex ">Trusted by 2000+ companies worldwide.</p>
        <Image
          className="ml-[22px] xl:hidden "
          src={logos_m}
          alt="logos"
        >
        </Image>
        <Image
          className="ml-[22px] hidden xl:flex "
          src={logos}
          alt="logos"
        >
        </Image>
      </div>
      <div className="w-screen h-[820px] mt-[80px] xl:h-[1100px] xl:w-screen xl:flex xl:flex-col xl:gap-[80px] xl:mt-[80px]">
        <div className="flex flex-col justify-center items-center w-[385px] h-[162px] m-auto">
          <h1 className="font-bold text-[32px] text-center mb-[20px] ">
            Explore Courses By Category
          </h1>
          <p className="text-[18px] ">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
        </div>
        <div className="w-[385px] h-[556px] m-auto xl:w-screen xl:h-screen xl:flex xl:flex-col  xl:justify-center xl:items-center xl:gap-[96px]">
          <div className="flex flex-col gap-[24px] xl:flex-row">
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={pen_tool}
                  alt="pen_tool"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Design & Development
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={volume}
                  alt="volume"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Marketing
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={group}
                  alt="group"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Development
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] max-xl:hidden xl:flex-row">
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={microphone}
                  alt="microphone"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Communication
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={link}
                  alt="link"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Digital Marketing
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={arrow}
                  alt="arrow"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Self Development
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] max-xl:hidden xl:flex-row">
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={briefcase}
                  alt="briefcase"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Business
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={book}
                  alt="book"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Finance
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] w-[380px] h-[132px] bg-header_color">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white ">
                <Image
                  src={book_2}
                  alt="book_2"
                  width={32}
                  height={32}
                >
                </Image>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Consulting
                </h3>
                <p className="text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center items-center  w-screen h-[48px] xl:mb-[20px]">
          <button className="w-[155px] h-[48px] rounded-[5px] border-black border ">View All Courses</button>
        </div>
      </div>
      <div className="flex flex-col  items-center w-[428px] h-[355px] min-[426px]:w-screen">
        <div className="flex flex-col justify-center items-center w-[380px] h-[147px] min-[426px]:w-screen">
          <h3 className="font-bold text-[32px]">
            Our Acheivements
          </h3>
          <p className="text-center mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[14vw] mt-[20px]">
          <div className="flex flex-col gap-[24px] min-[426px]:flex-row min-[426px]:gap-[14vw]">
            <div>
              <h4 className="font-bold text-[20px]">
                +200
              </h4>
              <p>
                Courses
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[20px]">
                50K
              </h4>
              <p>
                Mentors
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] min-[426px]:flex-row min-[426px]:gap-[14vw]">
            <div>
              <h4 className="font-bold text-[20px]">
                370K
              </h4>
              <p>
                Students
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[20px]">
                100+
              </h4>
              <p>
                Recognition
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  items-center w-screen h-[2070px] gap-[55px] xl:h-[1650px] ">
        <div >
          <h3 className="font-bold text-[32px] text-center">
            Courses
          </h3>
          <p>
            Your Ultimate Guide to learning
          </p>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-[40px]">
            <li className="cursor-pointer  border-b-[1px] border-black">Popular</li>
            <li className="cursor-pointer">Recommended</li>
            <li className="cursor-pointer">Best Price</li>
          </ul>
        </div>

        <div className="xl:flex justify-center items-center gap-[32px]">
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_1}
                alt="course_img_1"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Design
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                UX/UI Design 201
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_2}
                alt="course_img_2"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Programming
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                Introduction to Python
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_3}
                alt="course_img_1"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Business
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                Data Analysis for Beginners
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex justify-center items-center gap-[32px]">
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_4}
                alt="course_img_4"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Art
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                Art Specialization
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_5}
                alt="course_img_5"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Law
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                Rule of Law
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[380px] h-[558px] bg-header_color">
            <div>
              <Image
                src={course_img_6}
                alt="course_img_6"
                width={380}
                height={300}
              >
              </Image>
            </div>
            <div className="flex justify-between">
              <h6 className="font-semibold">
                Tech
              </h6>
              <div className="flex ">
                <Image
                  src={star}
                  alt="star"
                  width={24}
                  height={24}
                >
                </Image>
                <p className="font-semibold">5.0</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[24px]">
                Introduction to webflow
              </h3>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <button className="w-[117px] h-[40px] border border-black rounded-[5px]">
                Enroll Now
              </button>
              <p>$400</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  w-screen h-[48px]">
          <button className="w-[155px] h-[48px] rounded-[5px] border-black border ">View All Courses</button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[80px] w-screen h-[1075px] bg-header_color xl:h-[690px]">
        <div>
          <h3 className="font-bold text-[32px] text-center">
            Our team
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col gap-[64px] xl:flex-row">
          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_1}
                alt="employee_1"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
                Jame Nduku
              </h4>
              <p>
                Marketing Coordinator
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_2}
                alt="employee_2"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
              Joseph Munyambu
              </h4>
              <p className="text-center">
              Nursing Assistant
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_3}
                alt="employee_3"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
              Joseph Ngumbau
              </h4>
              <p className="text-center">
              Medical Assistant
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex xl:gap-[64px]">
          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_4}
                alt="employee_4"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
              Erick Kipkemboi
              </h4>
              <p>
              Web Designer
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_5}
                alt="employee_5"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
              Stephen Kerubo
              </h4>
              <p className="text-center">
              President of Sales
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[24px] w-[380px] h-[209px]">
            <div >
              <Image
                src={employee_6}
                alt="employee_6"
                width={80}
                height={80}
              >
              </Image>
            </div>
            <div >
              <h4 className="font-semibold text-[20px] text-center">
              John Leboo
              </h4>
              <p className="text-center">
              Dog Trainer
              </p>
            </div>
            <div>
              <Image
                src={social_icons}
                alt="social_icons"
                width={100}
                height={24}
              >
              </Image>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  w-screen h-[48px] mt-[30px] xl:hidden">
          <button className="w-[155px] h-[48px] rounded-[5px] border-black border ">View All Courses</button>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] w-screen h-[681.89] mt-[40px] xl:bg-header_color">
        <div>
          <h3 className="font-bold text-[32px] text-center xl:hidden">
          What Our Student Say
          </h3>
          <h3 className="hidden font-bold text-[48px] text-center p-[20px] xl:flex ">
          Customer testimonials
          </h3>
          <p className="text-center mt-[20px] xl:text-left xl:p-[25px] xl:pl-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex justify-center items-center gap-[48px] w-screen mt-[40px] ">
          <div className="flex flex-col gap-[40px] w-[362.67px] h-[321.89px] border border-black bg-header_color">
            <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
              <Image
                src={stars}
                alt="stars"
                width={116}
                height={18.89}
              >
              </Image>
              <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex gap-[20px] ml-[25px]">
              <div>
                <Image
                  src={avatar_image}
                  alt="avatar_image"
                  width={56}
                  height={56}
                >
                </Image>
              </div>
              <div>
                <h4>
                James Nduku
                </h4>
                <p>
                Software Developer
                </p>
              </div>
            </div>

          </div>

          <div className="hidden xl:flex xl:flex-col xl:gap-[40px] w-[362.67px] h-[321.89px] border border-black">
            <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
              <Image
                src={stars}
                alt="stars"
                width={116}
                height={18.89}
              >
              </Image>
              <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex gap-[20px] ml-[25px]">
              <div>
                <Image
                  src={avatar_image_2}
                  alt="avatar_image_2"
                  width={56}
                  height={56}
                >
                </Image>
              </div>
              <div>
                <h4>
                James Nduku
                </h4>
                <p>
                Software Developer
                </p>
              </div>
            </div>

          </div>

          <div className="hidden xl:flex xl:flex-col xl:gap-[40px] w-[362.67px] h-[321.89px] border border-black">
            <div className="flex flex-col gap-[32px] mt-[30px] ml-[25px]">
              <Image
                src={stars}
                alt="stars"
                width={116}
                height={18.89}
              >
              </Image>
              <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex gap-[20px] ml-[25px]">
              <div>
                <Image
                  src={avatar_image_3}
                  alt="avatar_image_3"
                  width={56}
                  height={56}
                >
                </Image>
              </div>
              <div>
                <h4>
                James Nduku
                </h4>
                <p>
                Software Developer
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-between">
          <Image
            className="ml-[7vw]"
            src={slider_dots}
            alt="slider_dots"
            width={72}
            height={8}
          >
          </Image>
          <Image
            className="mr-[7vw] cursor-pointer"
            src={slider_buttons}
            alt="slider_buttons"
            width={111}
            height={48}
          >
          </Image>
        </div>
      </div>
      <Footer />
    </div>

  );
}
