// const apiResponse = {
//   data: [
//     {
//       id: 1,
//       name: "Aurum",
//       isAdmin: false,
//       hasUserManagementAccess: false,
//     },
//     {
//       id: 2,
//       name: "Ritesh",
//       isAdmin: true,
//       hasUserManagementAccess: true,
//     },
//     {
//       id: 3,
//       name: "Aman",
//       isAdmin: true,
//       hasUserManagementAccess: false,
//     },
//   ],
//   responseCode: 201,
//   responseText: "User fetched successfully",
// };

// const giveUserMnAcccess = () => {
//   const users = apiResponse.data;

//   const updatedUsers = users.map((user) => {
//     if (user.isAdmin && !user.hasUserManagementAccess) {
//       return {
//         ...user,
//         hasUserManagementAccess: true,
//       };
//     } else {
//       return user;
//     }
//   });

//   return updatedUsers;
// };
// console.log(giveUserMnAcccess());

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
const apiResponse = {
  data: [
    {
      id: 1,
      name: "diya",
      isAdmin: false,
      hasUserManagementAccess: false,
      experience: 0,
      agentsId: [4, 5, 6, 7, 8],
    },
    {
      id: 2,
      name: "aaryan",
      isAdmin: true,
      hasUserManagementAccess: false,
      experience: 10,
      agentsId: [10, 11, 12, 13, 14, 15],
    },
    {
      id: 3,
      name: "amritanshu",
      isAdmin: true,
      hasUserManagementAccess: true,
      experience: 2,
      agentsId: [3],
    },
  ],
  code: 201,
  responseText: "Users fetched successfully",
};

const giveUserMnAccess = () => {
  const users = apiResponse.data;
  const updatedUsers = users.map((userDetail) => {
    if (userDetail.isAdmin && !userDetail.hasUserManagementAccess) {
      return {
        ...userDetail,
        hasUserManagementAccess: true,
      };
    } else {
      return userDetail;
    }
  });

  return updatedUsers;
};

// console.log(giveUserMnAccess());

// exp ===0  agentsId=[]
// exp>=1 agentsId =[a,b,c,d]

// arr=[4,5,6,7,8, 14, 15]

const assignAgents = () => {
  let availableAgents = [];

  const updatedUsers = apiResponse.data.map((userDetails) => {

    if (userDetails.experience === 0) {
      availableAgents = [...availableAgents, ...userDetails.agentsId];
      return { ...userDetails, agentsId: [] };
    }

    if (userDetails.agentsId.length === 4) {
      return userDetails;
    }

    if (userDetails.agentsId.length < 4) {
      const need = 4 - userDetails.agentsId.length;
      const agentsForUser = availableAgents.slice(0, need);

 
      availableAgents = availableAgents.slice(need);

      return {
        ...userDetails,
        agentsId: [...userDetails.agentsId, ...agentsForUser],
      };
    }

   
    const removeThisAgents = userDetails.agentsId.slice(4);
    availableAgents = [...availableAgents, ...removeThisAgents];

    return {
      ...userDetails,
      agentsId: userDetails.agentsId.slice(0, 4),
    };
  });

  return updatedUsers;
};

console.log(assignAgents());



// create a function if a  person is admin then not to do anything   if that is not admin then remove a agent id  delete a key using rest operator 

const deleteAgentIfNotAdmin = () => {
  const updatedUsers = apiResponse.data.map((userDetail) => {
    if (userDetail.isAdmin) {
      return userDetail;
    }else {
      const { agentsId, ...rest } = userDetail;
      return rest;
    }
    
  });
};

console.log(deleteAgentIfNotAdmin());
