import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import dynamic from 'next/dynamic';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTravelogueFormType } from '@/types/post';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
          ],
        },
        { background: [] },
      ],
      ['image'],
      ['clean'],
    ],
  },
};

interface RichEditorType {
  content: ControllerRenderProps<SubTravelogueFormType, 'content'>;
}

const RichEditor = ({ content }: RichEditorType) => {
  return (
    <div>
      <ReactQuill {...content} theme='snow' modules={modules} />
      <div dangerouslySetInnerHTML={{ __html: content.value }} />
    </div>
  );
};

export default RichEditor;
