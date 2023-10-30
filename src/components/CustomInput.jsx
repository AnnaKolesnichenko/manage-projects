const CustomInput = ({ label, textarea, value, onChange, name }) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-2 font-bold text-stone-600">{label}</label>
      {textarea ? (
        <textarea
          className="h-[90px] bg-stone-200 rounded-md border-solid border-stone-300 border-[1px] pl-2 pt-2"
          value={value}
          onChange={onChange}
          name={name}
        />
      ) : (
        <input
          className="h-[50px] bg-stone-200 rounded-md border-solid border-stone-300 border-[1px] pl-2"
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </div>
  );
};

export default CustomInput;

// import { forwardRef } from "react";

// const CustomInput = forwardRef(function CustomInput(
//   { label, textarea, value, onChange },
//   ref
// ) {
//   return (
//     <div className="flex flex-col mb-3">
//       <label className="mb-2 font-bold text-stone-600">{label}</label>
//       {textarea ? (
//         <textarea
//           className="h-[90px] bg-stone-200 rounded-md border-solid border-stone-300 border-[1px]"
//           value={value}
//           onChange={onChange}
//           ref={ref}
//         />
//       ) : (
//         <input
//           className="h-[50px] bg-stone-200 rounded-md border-solid border-stone-300 border-[1px]"
//           value={value}
//           onChange={onChange}
//           ref={ref}
//         />
//       )}
//     </div>
//   );
// });

// export default CustomInput;
