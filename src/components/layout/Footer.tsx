import Link from "next/link";

const Footer = () => {
  const navLink = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/projects" },
    { name: "Contact", link: "/contact-us" },
  ];
  return (
    <>
      <footer className="bg-[#F1F1F1]">
        <div className="container flex flex-wrap justify-between border-t-[1px] border-[black] py-10">
          <div className="w-1/2">
            <p>
              Steve McGugan Industrial Design{" "}
              <span className="font-bold">
                {new Date().getFullYear() || "2023"}
              </span>{" "}
            </p>
          </div>
          <div className="w-1/2">
            <ul className="flex gap-x-5 justify-end">
              {navLink.map((link, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-[black] hover:underline"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
