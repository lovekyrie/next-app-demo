import { use } from 'react'

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return {
    message: 'Hello, About!',
  }
}
export default function Page() {
  const { message } = use(getData())
  return <h1 className="mt-2.5">{message}</h1>
}
