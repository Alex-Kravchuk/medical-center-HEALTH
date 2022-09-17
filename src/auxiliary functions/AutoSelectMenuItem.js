export const autoSelectMenuItem = (currentPage) => {
  // without Profile page, because there isn't that page in menu list
  const pages = [
    "Make appointment",
    "Admissions",
    "Patients",
    "News",
    "Employees",
    "About",
    "Settings",
  ];

  if (currentPage === "Make appointment") {
    return 1;
  }

  return pages.indexOf(currentPage);
};
