const ContactForm = () => {
  return (
    <div>
      <div className="border-[1px] rounded-[20px] border-black py-[50px] px-[47px]">
        <h2 className="font-semibold text-[24px] text-black">
          Send us a Message
        </h2>

        <h2 className="font-normal text-20px text-black w-[697px] mt-[20px] sm:w-[100%] md:w-[100%]">
          We are interested in helping you turn your ideas/ concept into market
          value Reach out to us through this form.
        </h2>

        <div className="mt-[40px]">
          <div className="flex flex-row gap-[37px] sm:flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="Full Name"
              className="w-[303px] h-[60px] border-[1px] border-[#808080] rounded-[8px] py-[10px] px-[20px] outline-none sm:w-[100%] md:w-[100%]"
            />

            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="w-[303px] h-[60px] border-[1px] border-[#808080] rounded-[8px] py-[10px] px-[20px] outline-none sm:w-[100%] md:w-[100%]"
            />
          </div>

          <div className="flex flex-row gap-[37px] mt-[46px] sm:flex-col md:flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject of Message"
              className="w-[303px] h-[60px] border-[1px] border-[#808080] rounded-[8px] py-[10px] px-[20px] outline-none sm:w-[100%] md:w-[100%]"
            />

            <input
              type="number"
              name=""
              id=""
              placeholder="Phone Number"
              className="w-[303px] h-[60px] border-[1px] border-[#808080] rounded-[8px] py-[10px] px-[20px] appearance-none outline-none sm:w-[100%] md:w-[100%]"
            />
          </div>

          <div className="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-[645px] h-[150px] border-[1px] border-[#808080] rounded-[8px] py-[10px] px-[20px] mt-[40px] resize-none outline-none sm:w-[100%] md:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
