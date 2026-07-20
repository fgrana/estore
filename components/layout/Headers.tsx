import Link from "next/link";

const routes = [
  { href: "/", route: "Home" },
  { href: "/categories", route: "Categories" },
  { href: "/brands", route: "Brands" },
  { href: "/products", route: "Products" },
  { href: "/sale", route: "Sale" },
];

export default function Headers() {
  return (
    <>
      <div>
        <div className="bg-blue-500">
          <div className="container">
            <h1 className="p-2 font-sans text-white">
              De Lunes a Viernes de 10:00 a 18:00 hs y Sábados de 09:00 a 13:00
              hs | Av.Gral Rivera 6730, Montevideo
            </h1>
          </div>
        </div>

        <div className="align-justify container flex items-center">
          <img
            className="h-20 w-20 flex-1 object-contain"
            src="logopcstore.png"
            alt="logo"
          />
          <input
            type="text"
            placeholder="Search.."
            className="flex-3 rounded-sm p-2 ps-5 outline-2 outline-offset-2"
          ></input>
          <h2 className="flex-1 text-center">User acount</h2>
        </div>
        <div className="topnav">
          <div className="container">
            <div className="flex items-center justify-around">
              {routes.map((route) => (
                <Link href={route.href} key={route.href}>
                  {route.route}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
