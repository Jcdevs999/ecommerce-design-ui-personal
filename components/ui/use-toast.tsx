import { createContext, useContext, useState, ReactNode } from "react";

interface Toast {
  title: string;
  description: string;
}

interface ToastContextType {
  addToast: (toast: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
    setToasts([...toasts, toast]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-0 right-0 p-4 space-y-2">
        {toasts.map((toast, index) => (
          <div key={index} className="bg-gray-800 text-white p-2 rounded">
            <strong>{toast.title}</strong>
            <p>{toast.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
