// Validation Functions
export const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required!';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please Enter Valid Email'
    return '';
  };

export const validatePassword = (password) => {
  if (!password) return "Password is required!"
  if (password < 8) return "Password must be atleast 8 characters"
  if (!/(?=.*[a-z])/.test(password))
    return "Password must contain at least one lower case";
  if (!/(?=.*[A-Z])/.test(password))
    return "Password must contain at least one upper case";
  if (!/(?=.*\d)/.test(password))
      return "Password must contain at leaset one number"
  return "";
};

export const validateAvatar = (file) => {
  if (!file) return ""; // Avatar is optional

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.type)) {
    return "Avatar must be a JPG or PNG or JPEG";
  }
  
  const maxSixe = 5 * 1024 * 1024; // 5 MB
  if (file.size > maxSixe){
    return "Avatar must be less than 5 MB";
  }
  return "";
};

