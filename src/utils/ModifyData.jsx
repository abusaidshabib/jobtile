export const modifyEducation = (formData) => {
  const extractedKeys = Object.keys(formData).filter((key) =>
    /^(school|degree|start-date|end-date|edu-location|description)_\d+$/.test(
      key
    )
  );

  const groupedKeys = extractedKeys.reduce((acc, key) => {
    const [prefix, suffix] = key.split("_");
    acc[suffix] = acc[suffix] || {};
    acc[suffix][prefix] = formData[key];
    return acc;
  }, {});
  return Object.values(groupedKeys);
};

export const modifyLanguage = (formData) => {
  return Object.keys(formData)
    .filter((key) => key.startsWith("language"))
    .map((key) => ({
      language: formData[key],
      level: formData[key.replace("language", "level")],
    }));
};

export const modifySkill = (formData) => {
  return Object.keys(formData)
    .filter((key) => key.startsWith("title"))
    .map((key) => ({
      title: formData[key],
      level: formData[key.replace("title", "level")],
    }));
};

export const modifyWebLink = (formData) => {
  return Object.keys(formData)
    .filter((key) => key.startsWith("title"))
    .map((key) => ({
      title: formData[key],
      link: formData[key.replace("title", "link")],
    }));
};

export const modifyExperience = (formData) => {
  const experienceArray = [];

  for (let i = 1; formData[`job-title_${i}`]; i++) {
    const experienceObject = {
      jobTitle: formData[`job-title_${i}`],
      employer: formData[`employer_${i}`],
      startDate: formData[`start-date_${i}`],
      endDate: formData[`end-date_${i}`],
      jobLocation: formData[`job-location_${i}`],
      jobDescription: formData[`job-description_${i}`],
    };

    experienceArray.push(experienceObject);
  }

  return experienceArray;
};
