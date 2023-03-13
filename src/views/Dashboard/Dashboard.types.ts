import { IApi } from '~/api'

export interface IDashboardServerSideProps {
  hello: Awaited<ReturnType<IApi['hello']>>
}
