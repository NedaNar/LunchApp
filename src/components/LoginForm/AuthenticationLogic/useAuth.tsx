function useAuth() {
  const user = localStorage.getItem('token');

  if (user) {
    return true;
  }
  return false;
}

export default useAuth;
