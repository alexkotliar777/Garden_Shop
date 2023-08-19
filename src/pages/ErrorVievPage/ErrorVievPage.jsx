import { useRouteError } from 'react-router-dom';
import errorImg from '../../images/error.jpg';
import css from './ErrorVievPage.module.css';

export default function ErrorViev() {
  const error = useRouteError();
  console.log(error);
  return <img src={errorImg} alt="Error 404" className={css.image}></img>;
}
