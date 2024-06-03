import { ReactNode } from "react";

const SuccessModal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      onClick={() => onClose()}
      className={`fixed inset-0 flex  justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow-md p-6 transition-all  ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-sm text-gray-300 bg-white hover:bg-gray-50 hover:text-gray-600"
        ></button>
        {children}
      </div>
    </button>
  );
};

export default SuccessModal;
