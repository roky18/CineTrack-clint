export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          MD RAKIBUL ISLAM ROKY
        </h2>
        <p className="mb-4 text-sm">Frontend & MERN Stack Developer</p>

        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a
            href="mailto:roky18bd@gmail.com"
            className="hover:text-blue-400 transition"
          >
            roky18bd@gmail.com
          </a>
          <span>+8801727020930</span>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/roky18"
            className="hover:text-white transition underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/roky18"
            className="hover:text-white transition underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://roky18.github.io/portfolio/"
            className="hover:text-white transition underline underline-offset-4"
          >
            Portfolio
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Md Rakibul Islam Roky. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
