import React, { useState } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import ContentHeader from '../ContentHeader/ContentHeader';
// import NavTab from '../NavTab/NavTab';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import './Main.scss';

const Main = props => {
  const [cardGridFilter, setCardGridFilter] = useState('Todos os Semestres');
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const toggleModal = () => setmodalIsOpen(!modalIsOpen);

  // Cart
  const database = props.data.map((item, index) => {
    item.id = index;
    return item;
  });
  const [cart, setCart] = useState([]);
  const addToCart = items => setCart(items);
  const removeFromCart = id => {
    const result = cart.filter(item => item.id !== id);
    setCart(result);
  };
  const cardGridProps = {
    cardGridFilter,
    setCardGridFilter,
    toggleModal,
    cart,
    addToCart,
    removeFromCart
  };

  // Modal
  const modalProps = {
    modalIsOpen,
    toggleModal
  };
  const resultProps = {
    modalIsOpen,
    toggleModal,
    cart,
    addToCart,
    removeFromCart,
    database
  };

  // Filter
  const filterProps = {
    cart,
    addToCart,
    removeFromCart,
    database
  };

  return (
    <>
      <main className='main'>
        <BreadCrumbs />
        <ContentHeader />
        {/* <NavTab {...cardGridProps} {...props} /> */}
        <CardGrid {...cardGridProps} />
        <Modal {...modalProps}>
          <Filters {...filterProps} />
          <ResultsGrid {...resultProps} />
        </Modal>
      </main>
    </>
  );
};
export default Main;
