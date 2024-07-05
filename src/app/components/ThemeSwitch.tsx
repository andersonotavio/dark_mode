import { useTheme } from "../context/ThemeContext";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();
  const handleThemeToogle = () => {
    if (themeCtx) {
      themeCtx.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div
      className="fixed left-0 top-0 right-0 p-3 cursor-pointer text-center"
      onClick={handleThemeToogle}
    >
      {themeCtx?.theme === "dark" && "Mudar para light"}
      {themeCtx?.theme === "light" && "Mudar para dark"}
    </div>
  );
};
