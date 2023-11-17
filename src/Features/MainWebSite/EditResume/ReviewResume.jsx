import { useSelector } from "react-redux";

const ReviewResume = () => {
  const { personalData } = useSelector((state) => state.form);
  const { firstName, lastName } = personalData;

  return (
    <div className="bg-slate-500 max-h-screen fixed grid place-content-center top-0 right-0 bottom-0 w-1/2 lg:p-24 md:p-16 p-8">
      <div className="w-[595px] h-[842px] bg-white rounded-md p-8">
        <div className="font-open text-xs">
          <div className="border-b pb-5 border-blue-500">
            <p className="text-center text-sm font-bold text-blue-500"></p>
            <p className="text-center">Ultra Senior Developer</p>
          </div>
          <div className="border-b py-5 border-blue-500 grid grid-cols-3 text-center">
            <div>
              <p>1234567890</p>
              <p>abusaidshabib@gmail.com</p>
            </div>
            <div>
              <p>1234567890</p>
              <p>abusaidshabib@gmail.com</p>
            </div>
            <div>
              <p>1234567890</p>
              <p>abusaidshabib@gmail.com</p>
            </div>
          </div>
          <div className="border-b py-5 border-blue-500 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus deleniti voluptatum dolores ullam maxime blanditiis
              totam quo, amet quaerat dolorem incidunt, doloribus fugiat vel
              obcaecati! Deleniti voluptatibus aspernatur sint voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
