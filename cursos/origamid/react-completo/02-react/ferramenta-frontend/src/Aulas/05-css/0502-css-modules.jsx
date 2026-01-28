import styles from "./Produto.module.css";

export default function App() {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
}
