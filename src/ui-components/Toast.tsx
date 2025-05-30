import { Toaster, toast } from 'react-hot-toast';

const Toast = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};

export const showToast = (message: string, type: 'success' | 'error') => {
  toast[type](message, {
    duration: 5000,
  });
};

export default Toast;
