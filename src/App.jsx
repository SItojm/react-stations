import './App.css';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  );
};
