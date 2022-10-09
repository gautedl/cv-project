export function ElementMaker(props) {
  return (
    <span className={props.className}>
      {props.showInputEle ? (
        <input
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          autoFocus
        />
      ) : (
        <span onDoubleClick={props.handleDoubleClick}>{props.value}</span>
      )}
    </span>
  );
}

export function ElementMakerTextField(props) {
  return (
    <span className={props.className}>
      {props.showInputEle ? (
        <textarea
          value={props.value}
          cols={props.cols}
          rows={props.rows}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          autoFocus
        />
      ) : (
        <span onDoubleClick={props.handleDoubleClick}>{props.value}</span>
      )}
    </span>
  );
}
