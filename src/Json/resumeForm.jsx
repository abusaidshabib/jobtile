const class1 = "";
const class2 = "col-span-2";

export const formFields = [
  {
    name: "jobTitle",
    label: "Wanted Job Title",
    type: "text",
    class: class1,
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    class: class1,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    class: class1,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    class: class1,
  },
  {
    name: "phone",
    label: "Email",
    type: "tel",
    class: class1,
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    class: class1,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    class: class1,
  },
  {
    name: "address",
    label: "Postal Code",
    type: "text",
    class: class1,
  },
  {
    name: "dLicense",
    label: "Driving License",
    type: "text",
    class: class1,
  },
  {
    name: "nationality",
    label: "Nationality",
    type: "text",
    class: class1,
  },
  {
    name: "pob",
    label: "Place Of Birth",
    type: "text",
    class: class1,
  },
  {
    name: "dob",
    label: "Date Of Birth",
    type: "date",
    class: class1,
  },
  {
    name: "psummary",
    label: "Personal Summary",
    type: "text",
    class: class2,
  },
];

export const experience = [
  {
    name: "job-title",
    label: "Job Title",
    type: "text",
    class: class1,
  },
  {
    name: "employer",
    label: "Employer",
    type: "text",
    class: class1,
  },
  {
    name: "start-date",
    label: "Start Date",
    type: "date",
    class: class1,
  },
  {
    name: "end-date",
    label: "End Date",
    type: "date",
    class: class1,
  },
  {
    name: "job-location",
    label: "Job Location",
    type: "text",
    class: class1,
  },
  {
    name: "job-description",
    label: "Job Description",
    class: class2,
  },
];

export const education = [
  {
    name: "school",
    label: "School",
    type: "text",
    class: class1,
  },
  {
    name: "degree",
    label: "Degree",
    type: "text",
    class: class1,
  },
  {
    name: "start-date",
    label: "Start Date",
    type: "date",
    class: class1,
  },
  {
    name: "end-date",
    label: "End Date",
    type: "date",
    class: class1,
  },
  {
    name: "edu-location",
    label: "Education Location",
    type: "text",
    class: class1,
  },
  {
    name: "description",
    label: "Description",
    class: class2,
  },
];

export const webLinks = [
  {
    name: "title",
    label: "Website Title",
    type: "text",
    class: class1,
  },
  {
    name: "link",
    label: "link",
    type: "url",
    class: class1,
  },
];

export const webSkills = [
  {
    name: "title",
    label: "Skills Title",
    type: "text",
    class: class1,
  },
  {
    name: "level",
    label: "Expertise level",
    type: "text",
    class: class1,
  },
];

export const Language = [
  {
    name: "language",
    label: "Language Title",
    type: "text",
    class: class1,
  },
  {
    name: "level",
    label: "Expertise level",
    type: "text",
    class: class1,
  },
];

export const resumeTemplates = [
  {
    name: "template1",
    content: "<div>This is the template content {personalData.jobTitle}</div>",
  },
  {
    name: "template2",
    content:
      "<div>Another template content {personalData.firstName} {personalData.lastName}</div>",
  },
  {
    name: "template3",
    content:
      '<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">' +
      '<a href="#">' +
      '<h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">' +
      "{personalData.jobTitle}" +
      "</h5>" +
      "</a>" +
      '<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">' +
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." +
      "</p>" +
      "<a " +
      'href="#" ' +
      'class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">' +
      "Read more" +
      "</a>" +
      "</div>",
  },
];
