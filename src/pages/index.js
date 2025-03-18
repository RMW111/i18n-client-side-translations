import styles from "@/styles/Page.module.css";
import { GSSP } from "@/utils/gssp";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const translationKeys = {
  title: 'index.title',
  description: 'index.description',
  common: 'common',
};

export const getServerSideProps = GSSP(Object.values(translationKeys));

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <p>Index page title: {t(translationKeys.title)}</p>
      <p>Index page description: {t(translationKeys.description)}</p>
      <p>Index page common translation: {t(translationKeys.common)}</p>
      <Link href="/page1" className={styles.button}>Go to Page1</Link>
    </div>
  );
}
