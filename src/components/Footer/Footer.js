import React from 'react';
import './Footer.scss';

const Footer = props => {
  const footerItems = [
    {
      icon: 'fab fa-whatsapp',
      title: '0800 123 2222',
      description: 'Sex - Sex 8h-22h'
    },
    {
      icon: 'far fa-comments',
      title: 'Chat Ao Vivo',
      description: 'Sex - Sex 8h-22h'
    },
    {
      icon: 'far fa-envelope',
      title: 'Mande um e-mail',
      description: 'Respondemos rapidinho'
    },
    {
      icon: 'fas fa-info',
      title: 'Central de ajuda',
      description: 'Encontre todas as respostas'
    }
  ];

  const FooterItems = props => {
    const items = props.data;
    console.log(items);

    return items.map((item, index) => {
      const { icon, title, description } = item;
      return (
        <div className='footer__item' key={index}>
          <div className='footer__item-header'>
            <i className={`${icon} footer__item-icon`} />
          </div>
          <div className='footer__item-info'>
            <h5 className='footer__item-title'>{title}</h5>
            <p className='footer__item-description'>{description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <footer className='footer'>
      <div className='footer_container container'>
        <FooterItems data={footerItems} />
      </div>
    </footer>
  );
};
export default Footer;
