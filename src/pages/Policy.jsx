import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { makeStyles } from '@material-ui/core';
import { Page, Document, pdfjs } from 'react-pdf';

import privacy from '../assets/pdf/privacy.pdf';

import Loader from '../components/lib/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Policy = () => {
  const classes = useStyles();
  const [pageCounts, setPageCounts] = useState(null);

  const onDocumentLoadSuccess = (numPages) => {
    setPageCounts(numPages);
  };

  return (
    <div className={classes.policyContainer}>
      <div className={classes.ResumeContainer}>
        <Document
          loading={<Loader />}
          file={privacy}
          onLoadSuccess={onDocumentLoadSuccess}
          className={classes.PDFDocument}
        >
          {[...Array(pageCounts?._pdfInfo?.numPages).keys()].map((page) => (
            <div key={page} className={classes.PDFWrapper}>
              <Page
                pageNumber={page + 1}
                key={page}
                scale={1.5}
                className={classes.PDFPage}
                loading=''
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};
export default Policy;

const useStyles = makeStyles(() => ({
  policyContainer: {
    height: '100%',
  },
  ResumeContainer: {
    margin: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '3rem',
  },
  PDFDocument: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  PDFWrapper: {
    padding: '2rem',
  },

  PDFPage: {
    '& >canvas': {
      maxWidth: '100%',
      height: 'auto',
      border: '1px solid #000',
      marginBottom: '2 rem',
    },
  },
}));
