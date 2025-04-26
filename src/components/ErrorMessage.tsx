import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 left-0 right-0 mx-auto w-max z-50 animate-slideDown">
      <div className="bg-red-500/90 text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-md flex items-center">
        <AlertCircle className="w-5 h-5 mr-2" />
        <span>{message}</span>
        <button 
          className="ml-4 text-white/80 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;