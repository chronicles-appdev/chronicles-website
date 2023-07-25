/* eslint-disable react/no-unescaped-entities */
import successTab from "/successTab.png";
import send from "/send.png";
import successboxImg from "/successboxImg.png";
import ekoTestCentre from "/ekoTestCentre.png";
import successboxImgv2 from "/successboxImgv2.png";
import igcse from "/igcse.png";

const ProductCards = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[120px] px-[60px]">
        <div className="flex flex-row gap-[74px] sm:flex-col sm:gap-[80px] md:flex-col md:gap-[80px]">
          <div className="bg-[#E7ECF6] w-[700px] py-[40px] px-[50px] flex flex-col items-center gap-[30px] rounded-[15px] sm:w-[100%] md:w-[100%]">
            <h3 className="font-semibold text-[24px] leading-[29px]">
              SuccessTABS
            </h3>
            <img src={successTab} alt="" />
            <h2 className="font-normal text-[18px] leading-[44px] text-center text-[#000000]">
              SuccessTAB is an educational tablet that delivers premium learning
              resources, <strong>100% offline learning</strong>. It contains
              volumes of pre-installed educational contents and most importantly
              its 100% World Class, it also offers volumes of book in it’s
              digital library that aligns with the curriculum which saves you
              the cost of buying several textbooks.
            </h2>
            <button className="bg-[#28166F] text-white py-[8px] px-[61px] rounded-[8px] w-[270px] h-[68px] flex flex-row items-center justify-center gap-[10px]">
              Get Now{" "}
              <span>
                <img src={send} alt="" />
              </span>
            </button>
          </div>
          <div className="bg-[#B3D6FB]  w-[700px] py-[40px] px-[50px] flex flex-col items-center gap-[30px] rounded-[15px] sm:w-[100%] md:w-[100%]">
            <h3 className="font-semibold text-[24px] leading-[29px]">
              SuccessBox
            </h3>
            <img src={successboxImg} alt="" />
            <h2 className="font-normal text-[18px] leading-[44px] text-center text-[#000000]">
              Our SuccessBOX study mobile application offers students a platform
              to practice seamlessly for JAMB and WAEC.{" "}
              <strong>
                It covers all subjects approved by the Nigerian Ministry of
                Education
              </strong>
              , it has a collection of vast digital learning resources with 120
              e-Textbooks, 45+ Subjects, covering JSS1 to SS3. This contains
              over 50,000 CBT Question Bank and Answers for WAEC, BECEand UTME
              Candidates
            </h2>
            <button className="bg-[#28166F] text-white py-[8px] px-[61px] rounded-[8px] w-[270px] h-[68px] flex flex-row items-center justify-center gap-[10px]">
              Get Now{" "}
              <span>
                <img src={send} alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-[74px] mt-[128px] sm:flex-col sm:gap-[80px] md:flex-col md:gap-[80px]">
          <div className="bg-[#B3D6FB] w-[700px] py-[40px] px-[50px] flex flex-col items-center gap-[30px] rounded-[15px] sm:w-[100%] md:w-[100%]">
            <h3 className="font-semibold text-[24px] leading-[29px]">
              Eko Test Centre
            </h3>
            <img src={ekoTestCentre} alt="" />
            <h2 className="font-normal text-[18px] leading-[44px] text-center text-[#000000]">
              Developed specifically for Lagos state schools, this digital
              school platform is designed to monitor students' performance and
              <strong> forecast their WAEC examination results</strong>. As a
              web application, it caters to both teachers and students. It
              includes a comprehensive collection of past WAEC examination
              questions, empowering teachers to create custom tests for their
              students. Moreover, teachers have the flexibility to schedule
              tests at their convenience, while students can easily log in to
              take the assessments.
            </h2>
            <button className="bg-[#28166F] text-white py-[8px] px-[61px] rounded-[8px] w-[270px] h-[68px] flex flex-row items-center justify-center gap-[10px]">
              Get Now{" "}
              <span>
                <img src={send} alt="" />
              </span>
            </button>
          </div>

          <div className="bg-[#E7ECF6] w-[700px] py-[40px] px-[50px] flex flex-col items-center gap-[30px] rounded-[15px] sm:w-[100%] md:w-[100%]">
            <h3 className="font-semibold text-[24px] leading-[29px]">
              successBox V2
            </h3>
            <img src={successboxImgv2} alt="" width={325} />
            <h2 className="font-normal text-[18px] leading-[44px] text-center text-[#000000]">
              SuccessBox (V2) offers an all-in-one solution that{" "}
              <strong>
                integrates AI assistance into your learning journey
              </strong>
              . Gain access to an extensive library of educational resources,
              including textbooks, previous exam questions, a math solver, and a
              chatbot that supports users throughout their learning process.
              This platform is specifically designed for students and teachers,
              providing them with a collaborative space for interaction.
            </h2>
            <button className="bg-[#28166F] text-white py-[8px] px-[61px] rounded-[8px] w-[270px] h-[68px] flex flex-row items-center justify-center gap-[10px]">
              Get Now{" "}
              <span>
                <img src={send} alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-[128px]">
          <div className="bg-[#E7ECF6] w-[700px] py-[40px] px-[50px] flex flex-col items-center gap-[30px] rounded-[15px] sm:w-[100%]">
            <h3 className="font-semibold text-[24px] leading-[29px]">
              IGCSE Master Prep
            </h3>
            <img src={igcse} alt="" />
            <h2 className="font-normal text-[18px] leading-[44px] text-center text-[#000000]">
              IGCSE Master Prep offers a comprehensive collection of past exam
              questions, complete with their corresponding answers. Covering all
              subjects included in the IGSCE curriculum, it provides your ward
              with{" "}
              <strong>
                interactive features; your ward can take practice tests and
                instantly track their performance
              </strong>
              . Empower your ward to excel in the IGSCE examinations with this
              invaluable practice buddy.
            </h2>
            <button className="bg-[#28166F] text-white py-[8px] px-[61px] rounded-[8px] w-[270px] h-[68px] flex flex-row items-center justify-center gap-[10px]">
              Get Now{" "}
              <span>
                <img src={send} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
