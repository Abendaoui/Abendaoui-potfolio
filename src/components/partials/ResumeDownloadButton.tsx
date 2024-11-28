// import { useState } from 'react'

const DownloadButton = () => {
  // const [pdfData, setPdfData] = useState('')

  // const onBtnClicked = () => {
  //   fetch('/src/PDFs/Resume.pdf')
  //     .then((response) => response.arrayBuffer())
  //     .then((buffer) => {
  //       const base64String = Buffer.from(buffer).toString('base64')
  //       setPdfData(`data:application/pdf;base64,${base64String}`)
  //     })
  //     .catch((error) => console.error('Error fetching PDF:', error))
  // }

  return (
    <a
      // href={pdfData}
      download='Resume.pdf'
      className='button ml-4 cursor-pointer'
    >
      Resume
    </a>
  )
}

export default DownloadButton
