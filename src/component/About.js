import React from 'react'
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();

  return (
    <>
         <div className='container mt-4 p-4'>
           <h1 className='text-center p-4 text-dark'>{t('about_heading')}</h1>
           <p className='p-4'>
           {t('about_content')}
           </p>
           
        </div>
    </>
  )
}

export default About