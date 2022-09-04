import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { BlitzPage } from "@blitzjs/next"
import { getLocaleProps, useI18n, useChangeLocale } from "locales"

export const getServerSideProps = getLocaleProps()

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const { t } = useI18n()
  const changeLang = useChangeLocale()

  return (
    <Layout title="Home">
      <div className="container">Translated Text: {t("translation_key")}</div>
      <br />
      <br />
      <button onClick={() => changeLang("en")}>Use EN as lang</button>
      <button onClick={() => changeLang("de")}>Use DE as lang</button>
    </Layout>
  )
}

export default Home
