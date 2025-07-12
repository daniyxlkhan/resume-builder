import "../styles/InputGroup.css"

function InputGroup({
        type,
        id,
        labelText,
        placeHolder,
        value,
        onChange,
        dataKey,
}) {
    return (
        <div className="input-group">
           <label htmlFor={id}>
               <span className="label-text">{labelText}</span>
           </label>

           {type === 'textarea' ? (
               <textarea
                   id={id}
                   value={value}
                   placeholder={placeHolder}
                   onChange={onChange}
                   data-key={dataKey}
               >
               </textarea>
           ) : (
               <input
                   type={type}
                   id={id}
                   value={value}
                   placeholder={placeHolder}
                   onChange={onChange}
                   data-key={dataKey}
               >
               </input>
           )}
        </div>
    )
}

export default InputGroup;
