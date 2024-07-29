import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from '../App';

describe('Test Suite for App',()=> {

  
  test("Snapshot test ", () => {
    //render(<App />);
    const comp = renderer.create(<App />)
    const tree=comp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('renders welcome to Relevantz', () => {
  //   render(<App />);
  //   const linkElement = screen.getByText("Hi Welcome to Relevantz");
  //   expect(linkElement).toBeInTheDocument();
  // });
})

