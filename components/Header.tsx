const Header = () => {
  return (
    <div className="relative bg-decathlon-800">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://contents.mediadecathlon.com/s805210/k$0f89cfa1b3aa05f81672dbd3b2287e29/dbi_1f2ff19d+fe7b+4745+b829+d33071c00b3d.jpg"
          alt=""
        />
        <div
          className="absolute inset-0 bg-decathlon-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Decathlon AI
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-decathlon-100">
          Decathlon AI is a platform that makes shopping for sports equipment
          easier and more fun.
        </p>
      </div>
    </div>
  );
};

export default Header;
