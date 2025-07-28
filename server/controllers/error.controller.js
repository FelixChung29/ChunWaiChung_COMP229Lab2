const getErrorMessage = (err) => {
  let message = '';

  // MongoDB 唯一性错误
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Email already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    // Mongoose schema validation 错误
    for (let errName in err.errors) {
      if (err.errors[errName].message) {
        message = err.errors[errName].message;
      }
    }
  }

  return message;
};

export default { getErrorMessage };
