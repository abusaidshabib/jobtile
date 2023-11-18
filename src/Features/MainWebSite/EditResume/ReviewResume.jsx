import { useSelector } from "react-redux";

const ReviewResume = () => {
  const {
    personalData,
    experience,
    webLink,
    educationData,
    skills,
    languageData,
  } = useSelector((state) => state.form);
  const { firstName, lastName, jobTitle, address1, address2, phone, email } =
    personalData;

  return (
    <div className="bg-slate-500 max-h-screen fixed grid place-content-center top-0 right-0 bottom-0 w-1/2 lg:p-24 md:p-16 p-8">
      <div className="w-[595px] h-[842px] bg-white rounded-md p-10 font-roboto">
        <div className="grid grid-cols-8 gap-5 text-xs">
          <div className="col-span-5">
            <p className="text-3xl font-bold uppercase">
              {firstName} {lastName}
            </p>
            <p className="capitalize">{jobTitle}</p>
          </div>
          <div className="col-span-3">
            <p>{address1}</p>
            <p>{address2}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5 text-xs pt-8">
          <div className="col-span-5">
            <div className="grid gap-3">
              {experience.length > 0 && (
                <p className="text-res-blue text-base font-semibold">
                  Experience
                </p>
              )}
              {experience.map((data, index) => (
                <div className="grid gap-1" key={index}>
                  <p className="text-sm">
                    <span className="font-bold capitalize">
                      {data.company}
                      {data.company && ", "}
                    </span>
                    <span className="capitalize">
                      {data.jobLocation}
                      {data.jobLocation && " - "}
                    </span>
                    <span className="capitalize">{data.jobTitle}</span>
                  </p>
                  <p>
                    {data.startDate} {data.startDate && " - "} {data.endDate}
                  </p>
                  <p>{data.jobDescription}</p>
                </div>
              ))}
              {educationData.length > 0 && (
                <p className="text-res-blue text-base font-semibold">
                  Education
                </p>
              )}
              {educationData.map((data, index) => (
                <div className="grid gap-1" key={index}>
                  <p className="text-sm">
                    <span className="font-bold capitalize">
                      {data.school}
                      {data.school && ", "}
                    </span>
                    <span className="capitalize">
                      {data.eduLocation}
                      {data.eduLocation && " - "}
                    </span>
                    <span className="capitalize">{data.degree}</span>
                  </p>
                  <p>
                    {data.startDate} {data.startDate && " - "} {data.endDate}
                  </p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 grid gap-1">
            {webLink.length > 0 && (
              <p className="text-res-blue text-base font-semibold">
                Social Links
              </p>
            )}
            {webLink.map((data, index) => (
              <div key={index}>
                <p className="font-bold">{data?.title}</p>
                <p>{data?.link}</p>
              </div>
            ))}
            {skills.length > 0 && (
              <p className="text-res-blue text-base font-semibold">Skills</p>
            )}
            {skills.map((data, index) => (
              <p key={index}>
                <span>{data?.title}</span>
                {data?.title && " - "}
                <span>{data?.level}</span>
              </p>
            ))}
            {languageData.length > 0 && (
              <p className="text-res-blue text-base font-semibold">Language</p>
            )}
            {languageData.map((data, index) => (
              <p key={index}>
                <span>{data?.language}</span>
                {data?.language && " - "}
                <span>{data?.level}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
