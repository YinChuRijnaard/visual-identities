const Footer = () => {
  return (
    <footer className="mt-16 space-y-8 border-t-1 border-neutral-200 px-4 py-8 text-center">
      <span className="m-auto flex w-1/2 items-center justify-between text-2xl">
        <a className="cursor-pointer hover:text-blue-1" href="tel:+31636439554" target="_blank" rel="noreferrer">
          <i className="ri-phone-fill"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="https://www.instagram.com/visual_identities_official/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-instagram-line"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="https://www.linkedin.com/company/visual-identities/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="mailto:nickcatron@visualidentities.nl"
          target="_blank"
          rel="noreferrer">
          <i className="ri-mail-fill"></i>
        </a>
      </span>
      <p className="text-xs text-neutral-500">Copyright &copy; Visual Identities 2022</p>
    </footer>
  );
};

export default Footer;
