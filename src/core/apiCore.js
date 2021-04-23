import {API} from '../config';

//-----------------------PRODUCTOS-------------------------//
//-----------------------PRODUCTOS-------------------------//
  export const getProductos = () => {
    return fetch(
      `${API}/producto/listar`,
      {
        method: 'GET'
      }
    )
      .then(response =>{ 
        console.log(response)
        return response.json()
      })
      .catch(err => console.log(err))
  }

  //---------------------NOTICIAS----------------------------//
  //---------------------NOTICIAS----------------------------//
  export const getNoticias = () => {
    return fetch(
      `${API}/noticia/listar`,
      {
        method: 'GET'
      }
    )
      .then(response =>{ 
        console.log(response)
        return response.json()
      })
      .catch(err => console.log(err))
  }

  //------------------------- INICIO DE SESION ----------------//

  export const signin = user => {
    return fetch(`${API}/auth/signin`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) // user: 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  };


  export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(data));
      next();
    }
  }

  export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('jwt')) {
      return JSON.parse(localStorage.getItem('jwt'));
      // return localStorage.getItem('jwt')
    }
      return false;
  }

  export const signout = (next) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
      next();
      return fetch(`${API}/auth/signout`, {
        method: 'GET',
      })
        .then(response => {
            console.log('signout',response);
        })
        .catch( err => console.log(err));
    }
  }

  export const signup = user => {
    return fetch(`${API}/auth/signup`, { 
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  };

  //--------------------------CREAR NOTICIA --------------------

  export const createNoticia = (userId, token, noticia) => {
    return fetch(`${API}/noticia/crear/`,
     {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: noticia
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }
  