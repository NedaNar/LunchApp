import { LocalStorageKeys } from '../../../types/localStorageEnums';

function useAuth() {
  const user = localStorage.getItem(LocalStorageKeys.TOKEN);

  if (user) {
    return true;
  }
  return false;
}

export default useAuth;
