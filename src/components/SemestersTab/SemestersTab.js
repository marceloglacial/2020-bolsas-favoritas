import React from 'react';
import './SemestersTab.scss';

const SemestersTab = (props) => {
  const { semesters, filterCart, formatSemesterName, activeSemester } = props;
  const allSemesters = semesters.map((item, index) => {
    const itemClassName =
      activeSemester === item
        ? 'cartfilter__button cartfilter__button--active'
        : 'cartfilter__button';

    return (
      <button
        id={`cartfilter-${index}`}
        className={itemClassName}
        key={index}
        value={item}
        onClick={(e) => filterCart(e)}
      >
        {formatSemesterName(item)}
      </button>
    );
  });

  const allClassName =
    activeSemester === 'all'
      ? 'cartfilter__button cartfilter__button--active'
      : 'cartfilter__button';

  return (
    <div className='cartfilter'>
      <button
        id={`cartfilter-all`}
        className={allClassName}
        value='all'
        onClick={(e) => filterCart(e)}
      >
        Todos os Semestres
      </button>
      {allSemesters}
    </div>
  );
};

export default SemestersTab;
