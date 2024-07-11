const GenderRadioButton = ({onCheckboxChange,selectedGender}) => {
    return (
      <div className='flex p-2'>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}>
            <span className='label-text text-white'>Male</span>
            <input type='radio' name='gender' className='radio border-slate-900' value="male" 
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected":""}`}>
            <span className='label-text text-white'>Female</span>
            <input type='radio' name='gender' className='radio border-slate-900' value="female"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender==="other" ? "selected":""}`}>
            <span className='label-text text-white'>Other</span>
            <input type='radio' name='gender' className='radio border-slate-900' value="other" 
              checked={selectedGender === "other"}
              onChange={() => onCheckboxChange("other")}
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderRadioButton;
  




 //Starter Code for GenderRadioButton Component
  // const GenderRadioButton = () => {
  //   return (
  //     <div className='flex p-2'>
  //       <div className='form-control'>
  //         <label className='label gap-2 cursor-pointer'>
  //           <span className='label-text text-white'>Male</span>
  //           <input type='radio' name='gender' className='radio border-slate-900' value="male" />
  //         </label>
  //       </div>
  //       <div className='form-control'>
  //         <label className='label gap-2 cursor-pointer'>
  //           <span className='label-text text-white'>Female</span>
  //           <input type='radio' name='gender' className='radio border-slate-900' value="female" />
  //         </label>
  //       </div>
  //       <div className='form-control'>
  //         <label className='label gap-2 cursor-pointer'>
  //           <span className='label-text text-white'>Other</span>
  //           <input type='radio' name='gender' className='radio border-slate-900' value="other" />
  //         </label>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default GenderRadioButton;
  