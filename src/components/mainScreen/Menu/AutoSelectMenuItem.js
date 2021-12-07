export const autoSelectMenuItem = (currentPage) => {
  // without Profile page, because there isn't that page in menu list
  const pages = [
    "Admissions",
    "Patients",
    "News",
    "Employees",
    "About",
    "Settings",
  ];

  return pages.indexOf(currentPage) + 1;
};
