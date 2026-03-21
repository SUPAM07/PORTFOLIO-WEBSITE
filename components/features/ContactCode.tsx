import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'supamroy.dev',
    href: 'https://portfolio-website-vueh.vercel.app/contact',
  },
  {
    social: 'email',
    link: 'supamroy108@gmail.com',
    href: 'mailto:supamroy108@gmail.com',
  },
  {
    social: 'github',
    link: 'SUPAM07',
    href: 'https://github.com/SUPAM07',
  },
  {
    social: 'linkedin',
    link: 'Supam Roy',
    href: 'https://www.linkedin.com/in/supamroy2003/',
  },
  {
    social: 'twitter',
    link: 'SupamRoy4',
    href: 'https://x.com/SupamRoy4',
  },
  {
    social: 'instagram',
    link: 'supam021',
    href: 'https://www.instagram.com/supam021/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
