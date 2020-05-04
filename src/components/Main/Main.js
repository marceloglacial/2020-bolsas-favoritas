import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import './Main.scss';

const Main = (props) => {
  // GLOBAL
  // =============================
  const { isLoading, isError, data, setData } = props;
  const nestedCopy = (array) => {
    return JSON.parse(JSON.stringify(array));
  };
  console.log('ouch');

  // MODAL
  // =============================
  // Close Modal on Esc
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) return setModalIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // CART
  // =============================
  const [cart, setCart] = useState([]);

  // Remove From Cart
  const removeFromCart = (id) => {
    const items = [...data];
    items.map((item) =>
      item.id === parseInt(id) ? (item.isSelected = false) : item
    );
    return setData(items);
  };
  // Open Cart
  const openCart = () => {
    setModalIsOpen(true);
    setCart(nestedCopy(data));
  };

  // Add to Cart
  const addToCart = () => {
    setModalIsOpen(false);
    setData(cart);
  };
  const handleSelectedItem = (e) => {
    const id = parseInt(e.target.id);
    const items = [...cart];
    items.map((item) =>
      item.id === id ? (item.isSelected = !item.isSelected) : item
    );
    return setCart(items);
  };

  // Filters
  // =============================

  const [filters, setFilters] = useState({
    city: 'all',
    course: 'all',
    kind: ['Presencial', 'EaD'],
    price: 1000,
  });

  const filterCity = (e) => setFilters({ ...filters, city: e.target.value });
  const filterPrograms = (e) =>
    setFilters({ ...filters, course: e.target.value });
  const filterPrice = (e) => setFilters({ ...filters, price: e.target.value });
  const filterKind = (e) => {
    const result = filters.kind;
    const isChecked = e.target.checked;
    const kind = e.target.id;
    isChecked
      ? setFilters({ ...filters, kind: [...result, kind] })
      : setFilters({
          ...filters,
          kind: result.filter((item) => item !== kind),
        });
  };

  // Global Props
  // =============================
  const globalProps = {
    data,
    setData,
    openCart,
    addToCart,
    handleSelectedItem,
    removeFromCart,
    modalIsOpen,
    toggleModal,
    cart,
    filterCity,
    filterPrograms,
    filterPrice,
    filterKind,
    filters,
  };

  // Loading States
  // =============================
  if (isError)
    return (
      <Section>
        <h1>Something is wrong</h1>
      </Section>
    );

  if (isLoading)
    return (
      <Section>
        <h1>Loading ...</h1>
      </Section>
    );
  return (
    <main className='main'>
      <BreadCrumbs />
      <CardGrid {...globalProps} />
      <Modal {...globalProps}>
        <Filters {...globalProps} />
        <ResultsGrid {...globalProps} />
      </Modal>
    </main>
  );
};
export default Main;
