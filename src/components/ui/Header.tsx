import { ArrowLeft, ArrowRight, ArrowRightCircle } from "lucide-react"; // Import Lucide icons

interface HeaderProps {
  text: string;
  textColor: string;
  showButtons?: boolean;
  onFirstButtonClick?: () => void;
  onSecondButtonClick?: () => void;
}

export const Header = ({
  text,
  textColor,
  showButtons,
  onFirstButtonClick,
  onSecondButtonClick,
}: HeaderProps) => {
  return (
    <header className="flex w-full items-center justify-between max-w-full mx-auto px-4 relative">
      <div className="flex-grow text-center">
        <h1
          className={`text-4xl  font-semibold tracking-tighter ${textColor} ${
            onFirstButtonClick ? "md:-mr-20" : "md:mr-0"
          }`}
        >
          {text}
        </h1>
      </div>
      {showButtons && (
        <div className="hidden md:flex gap-4 ml-auto">
          <button
            onClick={onFirstButtonClick}
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="First action"
          >
            <ArrowLeft className={`w-6 h-6 ${textColor}`} />
          </button>
          <button
            onClick={onSecondButtonClick}
            className="p-3 rounded-full hover:bg-rose-500 transition-colors"
            aria-label="Second action"
          >
            <ArrowRight className={`w-6 h-6 ${textColor}`} />
          </button>
        </div>
      )}
    </header>
  );
};
