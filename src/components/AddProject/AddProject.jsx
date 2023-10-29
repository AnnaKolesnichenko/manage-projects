import CustomInput from "../CustomInput";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const AddProject = ({ getInputsData }) => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");
  // console.log(title);

  const handleCancelButton = () => {
    navigate("/");
  };

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };

  const handleFormSubmit = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    //console.log(title, description, date);

    getInputsData({ title, description, date });
  };
  return (
    <div className="w-[35rem] mt-16">
      <ul className="flex flex-row justify-end gap-8 ">
        <li className="py-2 px-5 bg-stone-400 rounded-md ">
          <button type="submit" onClick={handleCancelButton}>
            Cancel
          </button>
        </li>
        <li className="py-2 px-7 bg-stone-400 rounded-md">
          <button type="submit" onClick={handleFormSubmit}>
            Save
          </button>
        </li>
      </ul>
      <form>
        <CustomInput label="Title" ref={titleRef} />
        <CustomInput label="Description" textarea ref={descriptionRef} />
        <CustomInput label="Due Date" ref={dateRef} />
      </form>
    </div>
  );
};

export default AddProject;
