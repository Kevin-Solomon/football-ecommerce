import React from 'react';
import { useToast } from '../../context/toast/toastContext';
import Toast from './Toast';
import './Toast.css';
function ToastContainer() {
  const { toastState } = useToast();
  return (
    <div className="toast-container">
      {toastState.map(({ _id, message, autoDelete }) => {
        return <Toast _id={_id} message={message} autoDelete={autoDelete} />;
      })}
    </div>
  );
}

export default ToastContainer;
