export function NavMenu() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      <li>
        <a>Homepage</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </ul>
  );
}
