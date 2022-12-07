import { Link } from 'react-router-dom';

export const AppMenu = () => {
  return (
    <div>
      <a href="*">Logo</a>
      <h1>Hi Intern!</h1>
      <p>Welcome to MI 2022 Front-end test</p>
      <p>Lets start using Cat API</p>
      <ul className="flex justify-center align-center">
        <li>
          <Link to={'voting'}>
            <div></div>
            <span>VOTING</span>
          </Link>
        </li>
        <li>
          <Link to={'breeds'}>
            <div className="bg-violet-400">Purple</div>
            <span>BREEDS</span>
          </Link>
        </li>
        <li>
          <Link to={'gallery'}>
            <div></div>
            <span>GALLERY</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
