export default function Footer() {
  // No margin left/right for the footer
  // Margin top 16px

  return (
    <footer className="mt-16 space-y-4 border-t-1 border-neutral-200 px-4 py-2 text-center">
      <span className="m-auto flex w-1/2 items-center justify-between">
        <a className="cursor-pointer hover:text-blue-1" href="tel:+31636439554" target="_blank" rel="noreferrer">
          <i className="ri-phone-fill ri-1x"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="https://www.instagram.com/visual_identities_official/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-instagram-line ri-1x"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="https://www.linkedin.com/company/visual-identities/"
          target="_blank"
          rel="noreferrer">
          <i className="ri-linkedin-fill ri-1x"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-1"
          href="mailto:nickcatron@visualidentities.nl"
          target="_blank"
          rel="noreferrer">
          <i className="ri-mail-fill ri-1x"></i>
        </a>
      </span>
      <p className="text-xs text-neutral-500">Copyright &copy; Visual Identities 2022</p>
    </footer>
  );
}

// absolute: no
// fixed: no
// relative: sort of
// sticky: sort of
// static: no
