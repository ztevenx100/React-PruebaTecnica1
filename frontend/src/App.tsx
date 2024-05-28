import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import './App.css'
import { uploadFile } from './services/upload'
import { type Data } from './types'

const APP_STATUS = {
  IDLE: 'idle',
  ERROR: 'error',
  READY_UPLOAD: 'ready_upload',
  UPLOADING: 'uploading',
  READY_USAGE: 'ready_usage',
} as const

type AppStatusType = typeof APP_STATUS[keyof typeof APP_STATUS]

const BUTTON_TEXT = {
  [APP_STATUS.READY_UPLOAD]: 'Subir archivo',
  [APP_STATUS.UPLOADING]: 'Subiendo...',
}

function App() {
  const [appStatus, setUpStatus] = useState<AppStatusType>(APP_STATUS.IDLE);
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Data>([]);

  const showButton = appStatus === APP_STATUS.READY_UPLOAD || appStatus === APP_STATUS.UPLOADING
  const showInput = appStatus !== APP_STATUS.READY_USAGE

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target.files ?? []

    console.log(file);
    if (file) {
      setFile(file)
      setUpStatus(APP_STATUS.READY_UPLOAD)
    }
    
  }

  const handleSummit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (appStatus !== APP_STATUS.READY_UPLOAD || !file) {
      return
    }

    setUpStatus(APP_STATUS.UPLOADING)

    const [err, newData] = await uploadFile(file)

    console.log({newData});
    
    if (err) {
      setUpStatus(APP_STATUS.ERROR)
      toast.error(err.message)
      return
    }

    setUpStatus(APP_STATUS.READY_USAGE)
    if (newData) setData(newData)
    toast.success('Archvo subido correctamente')
  }

  return (
    <>
      <main>
        <Toaster/>
        <header>
          <h1>Prueba Tecnica React</h1>
          <h2>Challenge Upload CSV</h2>
        </header>
        <article>
          <section>
            {showInput && (
              <form action="" onSubmit={handleSummit}>
                <label htmlFor="archivo">
                  <input 
                    type="file" 
                    name="archivo" 
                    id="archivo" 
                    accept='.csv' 
                    onChange={handleInputChange}
                    disabled={appStatus === APP_STATUS.UPLOADING}
                    /> 
                </label>
                { showButton && (
                  <button disabled={appStatus === APP_STATUS.UPLOADING}>
                    {BUTTON_TEXT[appStatus]}
                  </button>
                )}
              </form>
            )}
          </section>
        </article>
      </main>
    </> 
  )
}

export default App
