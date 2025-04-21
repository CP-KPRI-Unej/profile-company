import Button from "./Button";

const Hero = ({ colorDeep, colorButton , mainText, shadow, mobileShadow, subText, colorLite }) => {
  return (
    <main
      className={`flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16 mt-20 mb-10`}
    >
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
        <h1
          className="md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy"
          style={{ color: `${colorDeep}` }}
        >
          {mainText}
        </h1>
        <p className="leading-normal md:text-2xl text-lg text-navy" style={{color:`${colorLite}`}}>
          {subText}
        </p>
        <Button
          type="button"
          text="Get Started"
          className="mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5"
          style={
            window.innerWidth > 767
              ? { backgroundColor: `${colorButton}`, boxShadow: `${shadow}` }
              : {
                  backgroundColor: `${colorDeep}`,
                  boxShadow: `${mobileShadow}`,
                }
          }
        />
      </div>
    </main>
  );
};

export default Hero;
