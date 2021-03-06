import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export const APP_URL = "https://app.sailfish.app";

export default function Nav({
  color = "light",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 20);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classnames(
        "fixed w-full flex justify-center z-10 transition-all duration-200",
        className,
        {
          "py-2": showBg,
          "py-4": !showBg,
        }
      )}
      style={{
        background: showBg ? `rgba(5, 67, 255, 0.9)` : "rgba(0, 0, 0, 0)",
      }}
    >
      <ul className="flex justify-between items-center px-4 sm:max-w-screen-lg w-full">
        <li>
          <Link href="/">
            <a className="flex items-center">
              <img
                className="h-10"
                src={`/img/sailfish_logo_${showBg ? "light" : color}.svg`}
                alt="Sailfish"
              ></img>
            </a>
          </Link>
        </li>
        <ul className="justify-between items-center space-x-4 hidden sm:flex">
          <li>
            <a
              href={APP_URL}
              className="bg-sf-teal rounded-full px-4 py-2 text-sf-dark hover:shadow-lg transition-shadow duration-100 text-sm"
            >
              App
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
