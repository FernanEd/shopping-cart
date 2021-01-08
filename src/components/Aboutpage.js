import { AiFillGithub } from 'react-icons/ai';

export default function Aboutpage() {
  return (
    <div className="page">
      <div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          perferendis molestiae tempore officia, iure enim voluptatum explicabo
          dolor veritatis natus eligendi laboriosam nesciunt, animi velit
          eveniet illo maiores, voluptatibus similique!
        </p>
      </div>

      <div>
        Made by{' '}
        <a href="https://github.com/FernanEd" target="_blank">
          <AiFillGithub /> FernanEd
        </a>
        . 2020
      </div>
    </div>
  );
}
