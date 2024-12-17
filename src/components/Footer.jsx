const Footer = () => {
  return (
    <footer className="w-screen bg-violet-500 py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;{" "}
          <a
            href="https://www.semper.blue/"
            target="_blank"
            className="hover:text-red-500 hover:underline"
          >
            Semper
          </a>{" "}
          2024. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start"></div>
      </div>
    </footer>
  );
};

export default Footer;
