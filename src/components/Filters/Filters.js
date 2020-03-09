import React from 'react';
import './Filters.scss';

const Filters = props => {
  return (
    <div className='modal-filters'>
      <div className='modal-filter'>
        <label className='modal-filter__title' htmlFor='city'>
          Selecione sua cidade
        </label>
        <select className='modal-filter__options' id='city' name='city'>
          <option>São José dos Campos</option>
          <option>São José dos Campos</option>
        </select>
      </div>
      <div className='modal-filter'>
        <label className='modal-filter__title' htmlFor='course'>
          Selecione o curso de sua preferência
        </label>
        <select className='modal-filter__options' id='course' name='course'>
          <option>Arquitetura e Urbanismo</option>
          <option>São José dos Campos</option>
        </select>
      </div>
      <div className='modal-filter'>
        <h4 className='modal-filter__title' htmlFor='type'>
          Como você quer estudar?
        </h4>
        <div className='modal-filter__checkboxes'>
          <div className='modal-filter__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='presencial'
              id='presencial'
            />
            <label htmlFor='presencial'> Presencial</label>
          </div>
          <div className='modal-filter__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='distancia'
              id='distancia'
            />
            <label htmlFor='distancia'> A distância</label>
          </div>
        </div>
      </div>
      <div className='modal-filter'>
        <h4 className='modal-filter__title' htmlFor='type'>
          Até quanto pode pagar?
        </h4>
        <input
          className='modal-filter__range'
          type='range'
          id='cowbell'
          name='cowbell'
          min='0'
          max='10000'
          defaultValue='500'
          step='500'
        />
      </div>
    </div>
  );
};
export default Filters;
