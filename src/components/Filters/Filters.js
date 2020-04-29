import React from 'react';
import './Filters.scss';

const Filters = (props) => {
  const { cart, filterCity, filterPrograms, filterPrice, filterHow } = props;

  const Cities = () => {
    const all = [...new Set(cart.map((item) => item.campus.city))].sort();
    return all.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const Courses = () => {
    const all = [...new Set(cart.map((item) => item.course.name))].sort();
    return all.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
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
          onChange={(e) => filterCity(e)}
        >
          <option>Escolha uma cidade</option>
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
          onChange={(e) => filterPrograms(e)}
        >
          <option>Escolha um curso</option>
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
              type='radio'
              htmlFor='type'
              name='howTo'
              id='presencial'
              onChange={(e) => filterHow(e)}
            />
            <label htmlFor='presencial'> Presencial</label>
          </div>
          <div className='filter__checkbox'>
            <input
              type='radio'
              htmlFor='type'
              name='howTo'
              id='distancia'
              onChange={(e) => filterHow(e)}
            />
            <label htmlFor='distancia'> A distância</label>
          </div>
        </div>
      </div>
      <div className='filter'>
        <h4 className='filter__title filter__title--price' htmlFor='type'>
          Até quanto pode pagar?
        </h4>
        <p>R$ 10.000</p>
        <input
          className='filter__range'
          type='range'
          id='cowbell'
          name='cowbell'
          min='0'
          max='10000'
          defaultValue='500'
          step='500'
          onChange={(e) => filterPrice(e)}
        />
      </div>
    </div>
  );
};
export default Filters;
