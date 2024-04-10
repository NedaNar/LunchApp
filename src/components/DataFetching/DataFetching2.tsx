export const fetchUserData = async () => {
    try {
      const response = await fetch("../../../data/db.json"); 
      const data = await response.json();
      return data.user; 
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };