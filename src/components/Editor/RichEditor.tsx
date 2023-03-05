import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const RichEditor = () => {
  return (
    <div>
      <ReactQuill theme='snow' />
    </div>
  );
};

export default RichEditor;
