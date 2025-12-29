const apiResponse = {
  data: [
    {
      id: 1,
      name: "Aurum",
      isAdmin: false,
      hasUserManagementAccess: false,
    },
    {
      id: 2,
      name: "Ritesh",
      isAdmin: true,
      hasUserManagementAccess: true,
    },
    {
      id: 3,
      name: "Aman",
      isAdmin: true,
      hasUserManagementAccess: false,
    },
  ],
  responseCode: 201,
  responseText: "User fetched successfully",
};

const giveUserMnAcccess = () => {
  const users = apiResponse.data;

  const updatedUsers = users.map((user) => {
    if (user.isAdmin && !user.hasUserManagementAccess) {
      return {
        ...user,
        hasUserManagementAccess: true,
      };
    } else {
      return user;
    }
  });

  return updatedUsers;
};
console.log(giveUserMnAcccess());

// const getAdminNames = (response) => {
//   const adminNames = [];

//   for (const user of response.data) {
//     if (user.isAdmin) {
//       adminNames.push(user.name);
//     }
//   }

//   return adminNames;
// };

// const adminNames = getAdminNames(apiResponse);
// console.log(adminNames);
