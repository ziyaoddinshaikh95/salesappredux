const valid = ({ email, password }) => {
  let error = {};
  if (!email) {
    error.email = "Please Enter your Email";
  } else if (email.length < 8) {
    error.email = "Please enter Valid Email";
  }
  if (!password) {
    error.password = "Please Enter Your Password";
  } else if (password.length < 10) {
    error.password = "please Enter Valid password";
  }
  return error;
};

export default valid;
