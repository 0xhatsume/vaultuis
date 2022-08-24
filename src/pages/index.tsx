import type { NextPage } from 'next';
import { BasePage } from '../components/BasePage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "../../i18next";

const Home: NextPage = () => {
  return (
    <>
      <BasePage>
        Henlo
      </BasePage>
    </>
  )
}

export const getStaticProps = async({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], {
      i18n
    })),
    
  }
})

export default Home
