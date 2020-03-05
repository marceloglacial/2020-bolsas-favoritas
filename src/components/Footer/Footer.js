import React from 'react';
import './Footer.scss';

const Footer = props => {
  const footerItems = [
    {
      icon: 'fab fa-whatsapp',
      title: '0800 123 2222',
      description: 'Sex - Sex 8h-22h',
      titlemobile: 'Segunda a sexta de 8h às 22h',
      link: `tel:08001232222`
    },
    {
      icon: 'far fa-comments',
      title: 'Chat Ao Vivo',
      description: 'Sex - Sex 8h-22h',
      titlemobile: 'Chat',
      link: '#'
    },
    {
      icon: 'far fa-envelope',
      title: 'Mande um e-mail',
      description: 'Respondemos rapidinho',
      titlemobile: 'E-mail',
      link: 'mailto:email@email.com'
    },
    {
      icon: 'fas fa-info',
      title: 'Central de ajuda',
      description: 'Encontre todas as respostas',
      titlemobile: 'Ajuda',
      link: '#'
    }
  ];

  const FooterItems = props => {
    const items = props.data;
    return items.map((item, index) => {
      const { icon, title, description, titlemobile, link } = item;
      return (
        <a href={link} className='footer__item' key={index}>
          <div className='footer__item-header'>
            <i className={`${icon} footer__item-icon`} />
          </div>
          <div className='footer__item-info'>
            <h5 className='footer__item-title hidden-on-mobile'>{title}</h5>
            <h5 className='footer__item-title footer__item-title--mobile hidden-on-desktop'>
              {titlemobile}
            </h5>
            <p className='footer__item-description hidden-on-mobile'>
              {description}
            </p>
          </div>
        </a>
      );
    });
  };

  return (
    <footer className='footer'>
      <div className='footer_container container'>
        <FooterItems data={footerItems} />
      </div>
      <h6 className='footer__made'>
        Feito com <i class='far fa-heart' /> pela Quero Educação
      </h6>
    </footer>
  );
};
export default Footer;
