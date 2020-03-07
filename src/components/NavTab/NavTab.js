import React, { useState } from 'react';
import './NavTab.scss';
const NavTab = props => {
  const tabItemsProps = [
    {
      enrollment_semester: '2019.2'
    },
    {
      enrollment_semester: '2019.1'
    },
    {
      enrollment_semester: '2019.1'
    }
  ];

  // Get unique semesters
  const semesters = [
    ...new Set(tabItemsProps.map((item, index) => item.enrollment_semester))
  ].sort();
  semesters.unshift('Todos os Semestres');

  // Set Active Item States
  const initialState = { 0: true };
  const [activeItem, setActiveItem] = useState(initialState);

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
          className={`effect-courtain effect-courtain--blue ${selected}`}
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

  // Handle Click
  const handleClick = (e, props) => {
    e.preventDefault();
    const { id } = props;
    setActiveItem({ [id]: true });
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
