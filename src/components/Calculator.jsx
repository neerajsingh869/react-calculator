import styles from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.resultArea}>432</div>
      <div>C</div>
      <div>&plusmn;</div>
      <div>&#37;</div>
      <div>&divide;</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>&times;</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>&minus;</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>&#43;</div>
      <div className={styles.zero}>0</div>
      <div>.</div>
      <div>=</div>
    </div>
  );
};

export default Calculator;
