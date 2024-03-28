export const NavBar = () => {
    return (
        <>
          <header className="navbar bg-neutral text-neutral-content">
            <nav className="w-full">
              <div className="w-fit m-auto">
                <ul className="flex items-center gap-10">
                  <li>
                    <a href={"/products"}>Nos produits</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </>
      );
}