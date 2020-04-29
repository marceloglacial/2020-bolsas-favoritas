import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import './Main.scss';

const Main = (props) => {
  const { isLoading, isError, data, setData } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const nestedCopy = (array) => {
    return JSON.parse(JSON.stringify(array));
  };

  // Close Modal on Esc
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

  // Filter city
  const filterCity = (e) => console.log(e.target.value);

  // Filter Programs
  const filterPrograms = (e) => console.log(e.target.value);

  // Filter Price
  const filterPrice = (e) => console.log(e.target.value);

  // Filter How
  const filterHow = (e) => console.log(e.target.id);

  // Global Props
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
    filterHow,
  };

  // Loading States
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
