export const Header = ({
  text,
  textColor,
}: {
  text: string;
  textColor: string;
}) => {
  return (
    <header className="flex items-center w-[1070px] max-w-full mx-auto px-4 relative">
      <div className="flex-grow text-center">
        <h1 className={`text-4xl font-semibold tracking-tighter ${textColor}`}>
          {text}
        </h1>
      </div>
      <div className="hidden md:flex gap-4">
        <img
          loading="lazy"
          src="/images/imperia/arrow.png"
          className="object-contain w-14 aspect-[0.87] rounded-[64px]"
          alt="Preference icon 1"
        />
        <img
          loading="lazy"
          src="/images/imperia/arrow2.png"
          className="object-contain w-14 aspect-[0.87] rounded-[64px]"
          alt="Preference icon 2"
        />
      </div>
    </header>
  );
};
