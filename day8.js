const apiResponse = {
  data: [
    {
      id: 1,
      name: "diya",
      isAdmin: false,
      hasUserManagementAccess: false,
      experience: [
        { title: "trainee", years: 1, office: "techspire" },
        { title: "associate dev", years: 2, office: "code himalaya" },
      ],
      agentsId: [4, 5, 6, 7, 8],
    },
    {
      id: 2,
      name: "aaryan",
      isAdmin: true,
      hasUserManagementAccess: false,
      experience: [
        { title: "Intern", years: 1, office: "maitri" },
        { title: "junior dev", years: 2, office: "cedar gate" },
        { title: "mid dev", years: 2, office: "eb pearls" },
        { title: "mid dev", years: 1, office: null },
      ],
      agentsId: [10, 11, 12, 13, 14, 15],
    },
    {
      id: 3,
      name: "amritanshu",
      isAdmin: true,
      hasUserManagementAccess: true,
      experience: undefined,
      agentsId: [3],
    },
  ],
  code: 201,
  responseText: "Users fetched successfully",
};

const calculateExperience = (userId) => {
  let totalExperiance = 0;
  const user = apiResponse.data.find((user) => user.id === userId);
  if (!user) {
    return totalExperiance;
  }
  const userExperienceArray = user.experience;
  userExperienceArray?.map(
    (exp) => (totalExperiance = totalExperiance + exp.years)
  );

  return totalExperiance;
};
console.log(calculateExperience(2));

// office
const getOffices = (userId) => {
  let offices = [];
  const user = apiResponse.data.find((user) => user.id === userId);

  if (!user) {
    return offices;
  }
  const userExperienceArray = user.experience;
  userExperienceArray?.map((exp) => {
    if (exp.office !== null) {
      offices = [...offices, exp.office];
    } else {
      offices = [...offices, "not specified"];
    }
  });
  //   if (exp.office) {
  //     offices.push(exp.office);
  //   }

  return offices;
};
console.log(getOffices(2));
