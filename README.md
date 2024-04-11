# Capstone Starter

Starter files for Web Capstone - eCommerce App

## File Structure

### Directories

```text
.                 <--- root folder
└── src           <--- everything React lives here
   ├── components <--- reusable parts go here
   ├── contexts   <--- data contexts can go here if you build custom ones
   ├── pages      <--- different .jsx for pages live here
   └── utilities  <--- API fetching, calculation functions, etc.
```

### Files / Components

Everything will live inside the `src` folder. Here's the basic layout you'll be using going forward

```text
src
├── App.css
├── App.jsx
├── components
│  ├── MappedProduct.jsx     <-- Use in your product map in ProductsContainer (optional)
│  ├── ProductContainer.jsx  <-- Card / Container you can use in the MappedProduct (optional)
│  └── ProductsContainer.jsx <-- Container for mapping your products (optional)
├── contexts
│  ├── CartContext.jsx       <-- Holds cart function and state (optional)
│  └── UserContext.jsx       <-- holds User/Token function and state (optional)
├── index.css
├── main.jsx
├── pages
│  ├── Account.jsx      (required)
│  ├── Cart.jsx         (required)
│  ├── Confirmation.jsx (required)
│  ├── Login.jsx        (required)
│  ├── Products.jsx     (required)
│  ├── Register.jsx     (required)
│  └── SingleProduct.jsx(required)
└── utilities
   ├── fetches.js       (optional, but helpful)
   └── utils.js         (optional, but helpful)
```

## Running the App

For development:

```bash
# from the project root folder
npm i
npm run dev
```

For your deployment (drag and drop possible on host):

```bash
npm i
npm run build
```

Then it will bundle all js, css, and html into a `dist` folder. You can drop the dist folder into a host like Netlify or Render.com to deploy the front end only. Note: this will not be auto-deployable as in the case of sharing your GitHub repository.

To deploy from GH repository:

In the host, under "build step":
```bash
npm i && npm run build
```

In the host, under "deploy directory" or similar:
`dist`

## Documentation and Resource Links

APIs to Complete Project Without Custom API (Unit 4 Career Sim):

- Products: [Fake Store API](https://fakestoreapi.com)
- User and Token: [JWT API](https://fsa-jwt-practice.herokuapp.com/)
- Cart: localStorage (see MDN below for link)

Helpful Links:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[React](https://react.dev/)

- [createContext](https://react.dev/reference/react/createContext)
- [useContext](https://react.dev/reference/react/useContext)
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)

[React-Router](https://reactrouter.com/en/main)

- [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
- [RouterProvider](https://reactrouter.com/en/main/routers/router-provider)
- [Routes Object](https://reactrouter.com/en/main/routers/create-browser-router#routes)
- [Outlet](https://reactrouter.com/en/main/components/outlet)
- [useOutletContext](https://reactrouter.com/en/main/hooks/use-outlet-context)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
- [Link](https://reactrouter.com/en/main/components/link)
- [NavLink](https://reactrouter.com/en/main/components/nav-link)
