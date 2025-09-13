const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">&copy; 2025 Superbloom. All Rights Reserved.</p>
          <p className="text-sm text-gray-600">Crafted with ❤️ in Hyderabad, India.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
