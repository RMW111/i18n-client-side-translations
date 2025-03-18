import styles from "@/styles/Page.module.css";
import { GSSP } from "@/utils/gssp";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const translationKeys = {
  title: 'page1.title',
  description: 'page1.description',
};

export const getServerSideProps = GSSP(Object.values(translationKeys));

export default function Page1() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <p>Page1 title: {t(translationKeys.title)}</p>
      <p>Page1 description: {t(translationKeys.description)}</p>
      <Link href="/" className={styles.button}>Go to IndexPage</Link>
    </div>
  );
}
