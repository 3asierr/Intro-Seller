export default (props) => {
  const { fill, size, stroke } = props
  const viewBox = 512.167
  return <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    fill={fill || '#000'}
    stroke={stroke || 'unset'}
    width={size || '27px'}
    height={size + 1 || '28px'}
    viewBox={`0 0 ${viewBox} ${viewBox}`}
    className={props.className}
  >
      <path d='M511.992,501.807c-0.725-88.192-56.55-167.75-139.367-198.346c-2.733-1.008-5.817-0.542-8.142,1.225
      C333.058,328.716,295.55,341.416,256,341.416s-77.058-12.7-108.483-36.729c-2.317-1.767-5.375-2.233-8.133-1.225
      c-28.525,10.521-55.108,27.546-76.9,49.25C22.192,393.099,0,446.666,0,503.549c0,4.713,3.817,8.533,8.533,8.533h494.933
      c0.067,0,0.125,0.004,0.167,0c4.717,0,8.533-3.821,8.533-8.533C512.167,502.953,512.108,502.37,511.992,501.807z M17.25,495.016
      c2.092-49.138,22.258-95.113,57.3-130.233c18.942-18.871,41.842-33.904,66.45-43.667c33.617,24.462,73.275,37.367,115,37.367
      c41.725,0,81.383-12.904,115-37.367c71.675,28.421,120.375,97.079,123.75,173.9H17.25z' />
      <path d='M256,324.349c89.4,0,162.133-72.733,162.133-162.133S345.4,0.082,256,0.082S93.867,72.816,93.867,162.216
      S166.6,324.349,256,324.349z M256,17.149c79.992,0,145.067,65.075,145.067,145.067S335.992,307.282,256,307.282
      s-145.067-65.075-145.067-145.067S176.008,17.149,256,17.149z' />
  </svg>
}
