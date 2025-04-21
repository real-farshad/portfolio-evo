function calculateAge(birthdate: string): number {
  const [yearStr, monthStr, dayStr] = birthdate.split("-");
  const birthYear = parseInt(yearStr, 10);
  const birthMonth = parseInt(monthStr, 10) - 1; // Months are 0-based in JavaScript
  const birthDay = parseInt(dayStr, 10);

  const birthDate = new Date(birthYear, birthMonth, birthDay);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Check if the birthdate hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export { calculateAge };
