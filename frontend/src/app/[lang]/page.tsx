import LangRedirect from './components/LangRedirect';
import { sectionRenderer } from './utils/section-renderer';
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";


export default async function RootRoute({ params }: { params: { lang: string } }) {
  return (<span className='text-lg'>
    Home page
  </span>)
}
