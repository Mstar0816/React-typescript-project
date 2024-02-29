import { BookDate } from "./Page";
import './styles.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

export const mockData: BookDate = {
  pages: [
    {
      imageUrl: img1,
      contents: [
        {
          type: 'LINE',
          value: {
            text: 'This is phone.',
            position: {
              x: 200,
              y: 450,
            },
          },
          duration: 2000,
        },
        {
          type: 'PAUSE',
          value: null,
          duration: 3,
        },
        {
          type: 'LINE',
          value: {
            text: 'This is a book.',
            position: {
              x: 500,
              y: 350,
            },
          },
          duration: 2000,
        },
        {
          type: 'LINE',
          value: {
            text: 'This is a ballpen.',
            position: {
              x: 1100,
              y: 350,
            },
          },
          duration: 2000,
        },
        {
            type: 'LINE',
            value: {
              text: 'This is a glass.',
              position: {
                x: 1400,
                y: 500,
              },
            },
            duration: 2000,
          },
        {
          type: 'PAUSE',
          value: null,
          duration: 3,
        }
      ],
    },
    {
      imageUrl: img2,
      contents: [
        {
          type: 'LINE',
          value: {
            text: 'This is a book.',
            position: {
              x: 300,
              y: 450,
            },
          },
          duration: 2000,
        },
        {
          type: 'LINE',
          value: {
            text: 'This is a phone.',
            position: {
              x: 1300,
              y: 400,
            },
          },
          duration: 2000,
        },
        {
          type: 'LINE',
          value: {
            text: 'This is a tea.',
            position: {
              x: 1300,
              y: 650,
            },
          },
          duration: 2000,
        },
        {
          type: 'PAUSE',
          value: null,
          duration: 2000,
        },
      ],
    },
    {
      imageUrl: img3,
      contents: [
        {
          type: 'LINE',
          value: {
            text: 'This is a phone.',
            position: {
              x: 300,
              y: 250,
            },
          },
          duration: 5,
        },
        {
          type: 'PAUSE',
          value: null,
          duration: 2000,
        },
      ],
    },
  ],
};
