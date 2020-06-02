import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import Filters from '../Filters/Filters';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import { sortAlpha } from '../../functions/sortArray';
import nestedCopy from '../../functions/nestedCopy';
import useStateWithLocalStorage from '../../functions/localStorage';
import './Main.scss';
import SemestersTab from '../SemestersTab/SemestersTab';

const Main = (props) => {
  // GLOBAL
  // =============================
  const { isLoading, isError, data, setData } = props;

  // Checkout
  const [checkout, setCheckout] = useStateWithLocalStorage(
    'bolsasCartCheckout'
  );

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
  const [cart, setCart] = useState(checkout);

  // Remove From Cart
  const removeFromCart = (id) => {
    const items = [...checkout];
    items.map((item) =>
      item.id === parseInt(id) ? (item.isSelected = false) : item
    );
    setCheckout(items);
    return setData(items);
  };
  // Open Cart
  const openCart = () => {
    setModalIsOpen(true);
    const initial = checkout.length === 0 ? data : checkout;
    setCart(sortAlpha(nestedCopy(initial)));
  };

  // Add to Cart
  const addToCart = () => {
    setModalIsOpen(false);
    setData(cart);
    setCheckout(cart);
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

  // Filter by semester
  const [filteredCheckout, setFilteredCheckout] = useState(checkout);

  useEffect(() => {
    setFilteredCheckout(checkout);
  }, [checkout]);

  const semesters = [
    ...new Set(data.map((item) => item.enrollment_semester)),
  ].sort();

  const formatSemesterName = (name) =>
    name.slice(-1) + 'o semestre de ' + name.slice(0, 4);

  const [activeSemester, setActiveSemester] = useState('all');

  useEffect(() => {
    setActiveSemester('all');
  }, [data]);

  // Card Selection filters
  const filterCart = (e) => {
    const target = e.target;
    const value = target.value;
    if (value === 'all') {
      setActiveSemester('all');
      return setFilteredCheckout([...cart]);
    }
    const result = checkout.filter(
      (item) => item.enrollment_semester === value
    );
    setActiveSemester(value);
    return setFilteredCheckout([...result]);
  };

  // localStorage.clear();

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
    setCart,
    filterCity,
    filterPrograms,
    filterPrice,
    filterKind,
    filters,
    checkout,
    setCheckout,
    semesters,
    formatSemesterName,
    activeSemester,
    setActiveSemester,
    filterCart,
    filteredCheckout,
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
      <Section>
        <h2>Bolsas Favoritas</h2>
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
        <SemestersTab {...globalProps} />
      </Section>
      <CardGrid {...globalProps} />
      <Modal {...globalProps}>
        <Filters {...globalProps} />
        <ResultsGrid {...globalProps} />
      </Modal>
    </main>
  );
};
export default Main;
