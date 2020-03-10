import React, { useState } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import './Main.scss';
import ContentHeader from '../ContentHeader/ContentHeader';
import NavTab from '../NavTab/NavTab';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';
import ResultsGrid from '../ResultsGrid/ResultsGrid';

const Main = props => {
  const [cardGridFilter, setCardGridFilter] = useState('Todos os Semestres');
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const toggleModal = () => setmodalIsOpen(!modalIsOpen);

  const modalProps = {
    modalIsOpen,
    toggleModal
  };

  const cardGridProps = {
    filter: cardGridFilter,
    setCardGridFilter,
    toggleModal
  };

  const resultProps = {
    modalIsOpen,
    toggleModal
  };

  return (
    <>
      <main className='main'>
        <BreadCrumbs />
        <ContentHeader />
        <NavTab {...cardGridProps} {...props} />
        <CardGrid {...cardGridProps} {...props} />
        <Modal {...modalProps}>
          <Filters {...props} />
          <ResultsGrid {...resultProps} {...props} />
        </Modal>
      </main>
    </>
  );
};
export default Main;
