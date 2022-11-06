const doctorPages = [
  "Admissions",
  "Patients",
  "News",
  "Employees",
  "About",
  "Edit profile",
];

const clientPages = [
  "Appointments",
  "News",
  "Employees",
  "About",
  "Edit profile",
];

export const autoSelectMenuItem = (currentPage, role) => {
  // without Profile page, because there isn't that page in menu list

  const typePages = role === "doctor" ? doctorPages : clientPages;

  if (currentPage === "Make appointment") {
    return 1;
  }

  if (currentPage === "Edit profile") {
    return "sub-1";
  }

  return typePages.indexOf(currentPage) + 1;
};
