import { toast } from 'react-toastify';

export const showNotification = (message, type) => {
  toast(message, {
    type: type, // success, info, warning, error
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
