import Head from 'next/head'
import Link from 'next/link'

const SignIn = () => {
    return(
        <div>
            <Head>
                <title>Iniciar Sesión</title>
            </Head>

      <div class="w-full max-w-xs">

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Usuario</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
         </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Contraseña</label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p class="text-red-500 text-xs italic">Por favor ingrese su constraseña</p>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Iniciar Sesión
            </button>
            <Link href="/register"><a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Registrarse</a></Link>
          </div>
          
        </form>
    </div>

        </div>
    )
}

export default SignIn