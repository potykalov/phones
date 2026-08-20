function validatePhone(phone) {
  const re = /[^\d]/g;

  const validatedPhone = phone.replace(re, "");

  if (validatedPhone.length === 11 && validatedPhone[0] === "8") {
    return `+7${validatedPhone.slice(1)}`;
  }

  return `+${validatedPhone}`;
}

export default validatePhone;
