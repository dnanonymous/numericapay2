import { redirect } from 'react-router-dom';
import { getToken } from './auth';  

export const checkAuthLoader = async () => {
  const token = getToken();
  if (!token) {
    return redirect('/login');
  }
  return null;
};