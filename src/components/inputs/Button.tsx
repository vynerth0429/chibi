interface ComponentProps {
  children?: JSX.Element | any,
  className?: string,
}

function ButtonComp(props: ComponentProps) {
  return (
    <button type="button" className={`btn ${props.className}`}>
      { props.children }
    </button>
  )
}

export default ButtonComp;
