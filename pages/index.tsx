import Head from 'next/head'
import Image from 'next/image'
import Edit from '../components/edit'
import Resume from '../components/resume'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Edit/>
        </div>
        <div>
          <Resume/>
        </div>
      </div>
    </>
  )
}
