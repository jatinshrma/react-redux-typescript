import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { State } from './state/reducers/index';
import * as actionCreators from './state/actionCreators';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.bank)
  const { deposit, withdraw, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>Bank Balance</h1>
      <h2 className={`${state ? state < 0 ? 'red' : 'green' : ''}`}>{state}.00 INR</h2>
      <button onClick={e => deposit(1000)}>Deposit</button>
      <button onClick={e => withdraw(1000)}>Withdraw</button>
      <button onClick={bankrupt}>Bankrupt</button>
    </div>
  );
}

export default App;