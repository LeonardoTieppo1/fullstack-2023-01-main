import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Login } from "./telas/login";
import { Cadastro } from "./telas/cadastro";

export const Rotas= () =>{
    const rotas= createBrowserRouter([
        {path: "/", element: <Login/>},
        {path:"/cadastro/:userid",element:<Cadastro/>}
    ]);

     return <RouterProvider router={rotas}/>
}