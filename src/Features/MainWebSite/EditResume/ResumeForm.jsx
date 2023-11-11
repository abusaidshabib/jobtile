import { useState } from "react";

const ResumeForm = () => {
  const formFields = [
    { name: "job-title", label: "Wanted Job Title", type: "text" },
    { name: "first-name", label: "First Name", type: "text" },
    { name: "last-name", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Email", type: "tel" },
    { name: "country", label: "Country", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "address", label: "Postal Code", type: "text" },
    { name: "d-license", label: "Driving License", type: "text" },
    { name: "nationality", label: "Nationality", type: "text" },
    { name: "pob", label: "Place Of Birth", type: "text" },
    { name: "dob", label: "Date Of Birth", type: "date" },
  ];

  const [formData, setFormData] = useState({});

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };
  const renderFormFields = () => {
    return formFields.map((field) => (
      <div key={field.name} className="mb-4">
        <label
          htmlFor={field.name}
          className="block text-sm font-medium text-gray-700"
        >
          {field.label}
        </label>
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleFieldChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
    ));
  };

  return (
    <div className="2xl:p-36 lg:p-24 md:p-16 p-8">
      <form>
        <p className="pb-5 text-2xl font-young">Personal Details</p>
        <div className="grid grid-cols-2 gap-5">{renderFormFields()}</div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
