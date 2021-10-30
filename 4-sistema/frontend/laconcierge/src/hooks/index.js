import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

export const AppProvider= ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
