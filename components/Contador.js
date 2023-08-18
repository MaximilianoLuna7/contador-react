// Creo el componente (se escribe con la primera letra en mayúsculas)
const Contador = () => {
  // Creo el controlador de estado del componente (usando destructuring para poder acceder al estado y al manejador)
  const [contador, setContador] = React.useState(0);

  // Creo las funciones que modifican el estado del componente
  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  // Retorno el componente en lenguaje JSX para que sea renderizado
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr />

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
