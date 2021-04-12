export const DUMMY_DATA: DummyData = {
  title: 'Lorem ipsum',
  subTitle: 'Lorem ipsum dolor sit amet',
  imageUrl: 'https://dummyimage.com/400x400/3d3d3d/5cb3ff.png&text=Sample',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export interface DummyData {
  title: string;
  subTitle: string;
  imageUrl: string;
  content: string;
}
