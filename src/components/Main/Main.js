import React, { useState } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import './Main.scss';
import ContentHeader from '../ContentHeader/ContentHeader';
import NavTab from '../NavTab/NavTab';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';

const Main = props => {
  const [cardGridFilter, setCardGridFilter] = useState('Todos os Semestres');
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const modalProps = {
    isOpen,
    toggleModal
  };

  const cardGridProps = {
    filter: cardGridFilter,
    setCardGridFilter,
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
        </Modal>
      </main>
    </>
  );
};
export default Main;
