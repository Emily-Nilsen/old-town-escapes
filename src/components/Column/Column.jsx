export const Column = ({ children, width }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 }
  return (
    <div style={widthStyle} className="p-6 space-y-6 md:pr-10">
      {children}
    </div>
  )
}
