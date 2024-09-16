/* eslint-disable jsx-a11y/anchor-is-valid */

export default function HeaderItems({
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <>
      <a
        onClick={onHomeClick}
        className="font-medium cursor-pointer hover:text-violet-700"
      >
        Home
      </a>
      <a
        onClick={onAboutClick}
        className="font-medium cursor-pointer hover:text-violet-700"
      >
        About
      </a>
      <a
        onClick={onProjectsClick}
        className="font-medium cursor-pointer hover:text-violet-700"
      >
        Projects
      </a>
      <a
        onClick={onContactClick}
        className="font-medium cursor-pointer hover:text-violet-700"
      >
        Contact
      </a>
    </>
  );
}
