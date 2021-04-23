import React ,{useEffect, useState}from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import { isAuthenticated, createNoticia } from '../apiCore';


const AddNoticia = () =>{
const [values, setValues] = useState({
    titulo:'',
    subtitulo:'',
    fuente:'',
    photo:'',
    contenido:'',
    loading:false,
    error:'',
    createdNoticia:'',
    redirectToProfile:false,
    formData:''
})

const {user, token} = isAuthenticated(); //para que no cualquiera pueda crear
 
const {
    titulo, subtitulo, fuente, photo,
    contenido, loading, error, createdNoticia,
    redirectToProfile, formData
} = values
//   Destructuracion de los campos, necesario para mas adelante

// useEffect(()=>{
    
// })

const handleChange = name => event =>{
    const value = name = 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({...values, [name]:value})
}

const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  )

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdNoticia ? '' : 'none' }}
    >
      <h2>{`${createdNoticia} was succesfully created`}</h2>
    </div>
  )

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading ...</h2>
      </div>
    )


    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: '', loading: true })
        createNoticia(user._id, token, formData).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error })
          } else {
            setValues({
              ...values,
              titulo: '',
              subtitulo: '',
              fuente: '',
              photo: '',
              contenido: '',
              loading: false,
              createdNoticia: data.name
            })
          }
        })
      }


  const newNoticiaForm = () => (
    <form className='mb-3' onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className='form-group'>
        <label className='btn btn-secondary'>
          <input
            onChange={handleChange('photo')}
            type='file'
            name='photo'
            accept='image/*'
          />
        </label>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Titulo</label>
        <input
          onChange={handleChange('titulo')}
          type='text'
          className='form-control'
          value={titulo}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Subtitulo</label>
        <input
          onChange={handleChange('subtitulo')}
          type='text'
          className='form-control'
          value={subtitulo}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Fuente</label>
        <input
          onChange={handleChange('fuente')}
          type='text'
          className='form-control'
          value={fuente}
        />
      </div>
      
      <div className='form-group'>
        <label className='text-muted'>Contenido</label>
        <input
          onChange={handleChange('contenido')}
          type='text'
          className='form-control'
          value={contenido}
        />
      </div>
      <button className='btn btn-outline-primary'>Crear noticia</button>
    </form>
  )

  return (
    <>
      <Navbar/>
      <div className="conatiner mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Agregar noticia</h2>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newNoticiaForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNoticia;