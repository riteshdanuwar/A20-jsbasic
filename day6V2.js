const apiResponse = {
  data: [
    { 
        id: 1, 
        name: "Aurum", 
        isAdmin: false, 
        hasUserManagementAccess: false },
    { 
        id: 2, 
        name: "Ritesh", 
        isAdmin: true, 
        hasUserManagementAccess: true },
    { 
        id: 3, 
        name: "Aman", 
        isAdmin: true, 
        hasUserManagementAccess: false },
  ],
  responseCode: 201,
  responseText: "User fetched successfully",
};
const getAdminNames = (response) => {
  const adminNames = [];

  response.data.forEach(user => {
    if (user.isAdmin) {
      adminNames.push(user.name);
    }
  });

  return adminNames;
};

const adminNames = getAdminNames(apiResponse);
console.log(adminNames);
