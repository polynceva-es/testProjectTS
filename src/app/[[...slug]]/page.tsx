import '../../index.css';
import { ClientOnly } from './client';
 
export function generateStaticParams() {
  return [{ slug: ['/testProjectTS'] }]
}
 
export default function Page() {
  return <ClientOnly/>  
}