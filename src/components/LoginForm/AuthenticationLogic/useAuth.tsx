import { SessionStorageKeys } from '../../../types/sessionStorageEnums';

function useAuth() {
  const user = sessionStorage.getItem(SessionStorageKeys.TOKEN);

  if (user) {
    return true;
  }
  return false;
}

export default useAuth;
