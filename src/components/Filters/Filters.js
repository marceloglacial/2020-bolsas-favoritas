import React from 'react';
import formatPrice from '../../functions/formatPrice';
import './Filters.scss';

const Filters = (props) => {
  const {
    data,
    cart,
    filters,
    filterCity,
    filterPrograms,
    filterPrice,
    filterKind,
  } = props;

  const Cities = () => {
    const all = [...new Set(data.map((item) => item.campus.city))].sort();
    return all.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const Courses = () => {
    const all = [...new Set(data.map((item) => item.course.name))].sort();
    return all.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const getPrice = (type) => {
    const prices = [
      ...new Set(cart.map((item) => item.price_with_discount)),
    ].sort();
    if (type === 'max') {
      return Math.round(Math.max(...prices));
    } else {
      return Math.round(Math.min(...prices));
    }
  };

  return (
    <div className='filters'>
      <div className='filter'>
        <label className='filter__title' htmlFor='city'>
          Selecione sua cidade
        </label>
        <select
          className='filter__options'
          id='city'
          name='city'
          value={filters.city}
          onChange={(e) => filterCity(e)}
        >
          <option value='all'>Todas as Cidades</option>
          <Cities />
        </select>
      </div>
      <div className='filter'>
        <label className='filter__title' htmlFor='course'>
          Selecione o curso de sua preferência
        </label>
        <select
          className='filter__options'
          id='course'
          name='course'
          value={filters.course}
          onChange={(e) => filterPrograms(e)}
        >
          <option value='all'>Todos os cursos</option>
          <Courses />
        </select>
      </div>
      <div className='filter'>
        <h4 className='filter__title filter__title--type' htmlFor='type'>
          Como você quer estudar?
        </h4>
        <div className='filter__checkboxes'>
          <div className='filter__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='kind'
              id='Presencial'
              defaultChecked={true}
              onChange={(e) => filterKind(e)}
            />
            <label htmlFor='Presencial'> Presencial</label>
          </div>
          <div className='filter__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='kind'
              id='EaD'
              defaultChecked={true}
              onChange={(e) => filterKind(e)}
            />
            <label htmlFor='EaD'> A distância</label>
          </div>
        </div>
      </div>
      <div className='filter'>
        <h4 className='filter__title filter__title--price' htmlFor='type'>
          Até quanto pode pagar?
        </h4>
        <p>{formatPrice(filters.price)}</p>
        <input
          className='filter__range'
          type='range'
          id='pricerange'
          name='pricerange'
          min={getPrice('min')}
          max={getPrice('max')}
          value={filters.price}
          step='100'
          onChange={(e) => filterPrice(e)}
        />
      </div>
    </div>
  );
};
export default Filters;
