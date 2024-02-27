import { useState, useEffect } from 'react';
import './styles.css';

interface PagingState {
  pageCursor: number;
  contentCursor: number;
  autoPaging: boolean;

  toNextPage: () => void;
  toPrevPage: () => void;
  toNextContent: () => void;
  toPrevContent: () => void;
  toggleAutoPaging: () => void;
  toPause: () => void; 
}

export type BookDate = {
  pages: {
    imageUrl: string;
    contents: {
      type: 'LINE' | 'PAUSE';
      value: {
        text: string;
        position: {
          x: number;
          y: number;
        };
      } | null;
      duration: number;
    }[];
  }[];
};

const AUTO_PAGING_SPEED1 = 2000;
const AUTO_PAGING_SPEED2 = 6000;

const usePagingState = (data: BookDate): PagingState => {
  const [pageCursor, setPageCursor] = useState(0);
  const [contentCursor, setContentCursor] = useState(0);
  const [autoPaging, setAutoPaging] = useState(false);

  const toNextPage = () => {
    setPageCursor((prevCursor) => Math.min(prevCursor + 1, data.pages.length - 1));
    setContentCursor(0);
  };

  const toPrevPage = () => {
    setPageCursor((prevCursor) => Math.max(prevCursor - 1, 0));
    setContentCursor(0);
  };

  const toNextContent = () => {
    setContentCursor((prevCursor) => Math.min(prevCursor + 1, data.pages[pageCursor].contents.length - 1));
  };

  const toPrevContent = () => {
    setContentCursor((prevCursor) => Math.max(prevCursor - 1, 0));
  };

  const toggleAutoPaging = () => {
    setAutoPaging((prevCursor) => !prevCursor);
  };

  const toPause = () => {
    setAutoPaging(false);
  };

  useEffect(() => {
    let autoPagingTimer: NodeJS.Timeout;
    if (autoPaging) {
      autoPagingTimer = setInterval(() => {
        toNextContent();
      }, AUTO_PAGING_SPEED1);
    }
    

    return () => clearInterval(autoPagingTimer);
  }, [autoPaging, contentCursor, pageCursor, data]);

  useEffect(() => {
    let autoPagingTimer: NodeJS.Timeout;
    if (autoPaging) {
      autoPagingTimer = setInterval(() => {
        toNextPage();
      }, AUTO_PAGING_SPEED2);
    }
    

    return () => clearInterval(autoPagingTimer);
  }, [autoPaging, contentCursor, pageCursor, data]);

  return {
    pageCursor,
    contentCursor,
    autoPaging,
    toNextPage,
    toPrevPage,
    toNextContent,
    toPrevContent,
    toggleAutoPaging,
    toPause,
  };
};

export const Page = ({ data }: { data: BookDate }) => {
  const {
    pageCursor,
    contentCursor,
    autoPaging,
    toNextPage,
    toPrevPage,
    toNextContent,
    toPrevContent,
    toggleAutoPaging,
    toPause,
  } = usePagingState(data);

  const content = data.pages[pageCursor].contents[contentCursor];

  return (
    <div className='container'>
      <img src={data.pages[pageCursor].imageUrl} alt={`Page ${pageCursor}`} />
      {content.type === 'LINE' && content.value && (
        <div
          style={{
            position: 'absolute',
            top: `${content.value.position.y}px`,
            left: `${content.value.position.x}px`,
          }}
        >
          {content.value.text}
        </div>
        
      )}
      <div className='buttongroup' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <button className='button' onClick={toPrevPage}>Previous Page</button>
        <button className='button' onClick={toNextPage}>Next Page</button>
        <button className='button' onClick={toPrevContent} disabled={contentCursor === 0}>
          Previous Content
        </button>
        <button className='button' onClick={toNextContent} disabled={contentCursor === data.pages[pageCursor].contents.length - 1}>
          Next Content
        </button>
        <button className='button' onClick={toggleAutoPaging}>{autoPaging ? 'Stop Auto Paging' : 'Start Auto Paging'}</button>
        <button className='button' onClick={toPause}> Pause</button>
      </div>
    </div>
  );
};