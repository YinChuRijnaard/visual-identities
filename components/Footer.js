export default function Footer() {
  return (
    <footer className="bottom-0 w-screen space-y-4 bg-blue-700 px-4 py-2 text-center text-neutral-100">
      <span className="m-auto flex w-1/2 items-center justify-between">
        <a className="cursor-pointer" href="tel:+31636439554" target="_blank" rel="noreferrer">
          <i className="ri-phone-fill ri-1x"></i>
        </a>
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/visual_identities_official/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-instagram-line ri-1x"></i>
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/company/visual-identities/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-linkedin-fill ri-1x"></i>
        </a>
        <a className="cursor-pointer" href="mailto:nickcatron@visualidentities.nl" target="_blank" rel="noreferrer">
          <i className="ri-mail-fill ri-1x"></i>
        </a>
      </span>
      <p className="text-xs">Copyright &copy; Visual Identities 2022</p>
    </footer>
  );
}

// absolute: no
// fixed: no
// relative: sort of
// sticky: sort of
// static: no
