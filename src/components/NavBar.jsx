import { HeaderItem } from "./HeaderItem";

export const NavBar = () => {
    return (
        <>
          <header className="navbar bg-neutral text-neutral-content">
            <nav className="w-full">
              <div className="m-auto w-fit">
                <ul className="flex items-center gap-10">
                  <li>
                   <HeaderItem href={"/products"}>Nos produits</HeaderItem>
                  </li>
                  <li>
                    <HeaderItem href={"/counter-store"}>Compteur avec Store</HeaderItem>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </>
      );
}