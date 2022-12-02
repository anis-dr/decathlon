import useNavigation from '../hooks/useNavigation';

const Footer = () => {
  const { navigation, socials } = useNavigation();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <img
          className="block h-8 w-auto mx-auto mt-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Decathlon_Logo.svg"
          alt="Decathlon"
        />
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2020 Decathlon, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
