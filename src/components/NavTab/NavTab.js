import React, { useState } from 'react';
import './NavTab.scss';
const NavTab = props => {
  const { setCardGridFilter } = props;

  // Set Active Item States
  const [activeItem, setActiveItem] = useState({ 0: true });

  const data = props.data;
  if (!data) return false;

  // Get unique semesters
  const semesters = [
    ...new Set(data.map((item, index) => item.enrollment_semester))
  ].sort();
  semesters.unshift('Todos os Semestres');

  // Handle Click
  const handleClick = (e, props) => {
    e.preventDefault();
    const { id, title } = props;
    setActiveItem({ [id]: true });
    setCardGridFilter(title);
  };

  // Single Item
  const TabItem = props => {
    const { id, title } = props;
    const semester = title.slice(-1);
    const year = title.slice(0, 4);
    const titleRender = id === 0 ? title : `${semester}o semestre de ${year}`;
    const selected = activeItem[parseInt(id)] ? 'is-selected' : '';
    return (
      <li className='navtab__item'>
        <a
          href='/'
          onClick={e => handleClick(e, props)}
          className={`navtab__item-link effect-courtain effect-courtain--blue ${selected}`}
        >
          {titleRender}
        </a>
      </li>
    );
  };

  // All Itens
  const Tabs = () => {
    return semesters.map((semester, index) => (
      <TabItem id={index} title={semester} key={index} />
    ));
  };

  return (
    <section className='navtab container'>
      <ul className='navtab__container'>
        <Tabs />
      </ul>
    </section>
  );
};
export default NavTab;
