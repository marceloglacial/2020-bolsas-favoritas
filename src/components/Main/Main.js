import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import './Main.scss';

const Main = (props) => {
  const { isLoading, isError, data, setData } = props;
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  // Close Modal on Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) return toggleModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Remove From Cart
  const removeFromCart = (id) => {
    const items = data.slice();
    items.map((item) =>
      item.id === parseInt(id) ? (item.isSelected = false) : item
    );
    return setData(items);
  };

  // Add to Cart
  const addToCart = (e) => {
    const id = parseInt(e.target.id);
    const items = data.slice();
    items.map((item) =>
      item.id === id ? (item.isSelected = !item.isSelected) : item
    );
    return setData(items);
  };

  // Global Props
  const globalProps = {
    data,
    setData,
    addToCart,
    removeFromCart,
    modalIsOpen,
    toggleModal,
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
        <ResultsGrid {...globalProps} />
      </Modal>
    </main>
  );
};
export default Main;
