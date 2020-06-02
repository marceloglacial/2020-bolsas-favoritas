import React, { useState, useEffect } from 'react';
import useStateWithLocalStorage from '../../functions/localStorage';
import CartList from './CartList';
import CartFilter from './CartFilter';
import getItemFromCartId from '../../functions/getItemFromId';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import './Cart.scss';
import CartSelection from './CartSelection';

const Cart = (props) => {
  const { data } = props;
  const [cart, setCart] = useStateWithLocalStorage('bolsasCart');
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(cart);
  }, [cart]);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) return setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Cart Controls
  const addToCart = (id) =>
    setCart([...cart, allItems.find((item) => item.id === parseInt(id))]);

  const removeFromCart = (id) =>
    setCart([...cart.filter((item) => item.id !== parseInt(id))]);

  // Filter by semester
  const semesters = [
    ...new Set(data.map((item) => item.enrollment_semester)),
  ].sort();

  const formatSemesterName = (name) =>
    name.slice(-1) + 'o semestre de ' + name.slice(0, 4);

  const [activeSemester, setActiveSemester] = useState('all');
  useEffect(() => {
    setActiveSemester('all');
  }, [cart]);

  // Card Selection filters
  const filterCart = (e) => {
    const target = e.target;
    const value = target.value;
    if (value === 'all') {
      setActiveSemester('all');
      return setCartList([...cart]);
    }
    const result = cart.filter((item) => item.enrollment_semester === value);
    setActiveSemester(value);
    return setCartList([...result]);
  };

  // localStorage.clear();
  // TODO: add filter object and make filter resusable
  const [allItems, setAllitems] = useState(data);
  const [selectedCity, setSelectedCity] = useState('all');

  const filterByCity = (city) => {
    if (city === 'all') return setAllitems(data);
    const result = data.filter((item) => item.campus.city === city);
    setSelectedCity(city);
    return setAllitems(result);
  };

  const allCities = [...new Set(data.map((item) => item.campus.city))].sort();
  const cityButtons = allCities.map((item, index) => (
    <option key={index}>{item}</option>
  ));

  const cartProps = {
    activeSemester,
    addToCart,
    allItems,
    cart,
    cartList,
    data,
    filterCart,
    formatSemesterName,
    getItemFromCartId,
    isModalOpen,
    removeFromCart,
    semesters,
    setCart,
    setIsModalOpen,
  };

  return (
    <Section name='cart'>
      <h2>Bolsas favoritas</h2>
      <p>
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>
      <Modal {...cartProps}>
        <select
          className='filter__options'
          id='city'
          name='city'
          value={selectedCity}
          onChange={(e) => filterByCity(e.target.value)}
        >
          <option value='all'>Todas as Cidades</option>
          {cityButtons}
        </select>
        <br />
        <br />
        <CartSelection {...cartProps} />
      </Modal>
      <CartFilter {...cartProps} />
      <CartList {...cartProps} />
    </Section>
  );
};
export default Cart;
