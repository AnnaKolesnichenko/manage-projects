import CustomInput from "../CustomInput";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddProject = ({ getInputsData }) => {
  const navigate = useNavigate();
  // const titleRef = useRef();
  // const descriptionRef = useRef();
  // const dateRef = useRef();
  //remove value={} onChange={} and add ref={refName}

  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: new Date(),
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Be more descriptive:)")
        .max(20, "Too long, max 20 symbols")
        .required(),
      description: Yup.string().max(150, "Maximum 150 symbols").required(),
      date: Yup.date().required("Pick a date"),
    }),
    onSubmit: (values) => {
      getInputsData(values);

      navigate("/");
    },
  });

  // const handleTitle = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };

  // const handleFormSubmit = () => {
  //   // let title = titleRef.current.value;
  //   // let description = descriptionRef.current.value;
  //   // let date = dateRef.current.value;

  //   getInputsData({ title, description, date });
  //   setTitle("");
  //   setDescription("");
  //   setDate("");
  //   navigate("/");
  // };

  return (
    <div className="w-[35rem] mt-16">
      <form onSubmit={formik.handleSubmit}>
        <ul className="flex flex-row justify-end gap-8 ">
          <li className="py-2 px-5 bg-stone-400 rounded-md ">
            <button type="submit" onClick={() => navigate("/")}>
              Cancel
            </button>
          </li>
          <li className="py-2 px-7 bg-stone-400 rounded-md">
            <button type="submit">Save</button>
          </li>
        </ul>
        <CustomInput
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.title && formik.touched.title ? (
          <div className="mt-4 mb-6  text-rose-700">{formik.errors.title}</div>
        ) : null}
        <CustomInput
          label="Description"
          name="description"
          textarea
          // value={description}
          // onChange={handleDescription}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.description && formik.touched.description ? (
          <div className="mt-4 mb-6  text-rose-700">
            {formik.errors.description}
          </div>
        ) : null}
        {/* <CustomInput
          label="Due Date"
          name="date"
          // value={date}
          // onChange={handleDate}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2 font-bold text-stone-600">
            Due Date
          </label>
          <DatePicker
            className="h-[50px] bg-stone-200 rounded-md border-solid border-stone-300 border-[1px] pl-2"
            label="date"
            name="date"
            selected={formik.values.date}
            onChange={(date) => formik.setFieldValue(date)}
            value={formik.values.date}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date ? (
            <div className="mt-4 mb-6  text-rose-700">{formik.errors.date}</div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default AddProject;
