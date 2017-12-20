import React, { PropTypes } from 'react';
import update from 'react-addons-update';
import { TweenMax } from 'gsap';

import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      base: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rates: PropTypes.objectOf(PropTypes.number).isRequired,
    }),
    update: PropTypes.func,
  };

  state = {
    data: this.props.data,
    base: this.props.data.base,
    target: Object.keys(this.props.data.rates)[0],
    amount: '',
    result: '',
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  getCurrency(e) {
    e.preventDefault();

    const targetValue = this.state.data.rates[this.state.target];
    const culcAmount = this.state.amount * targetValue;
    this.setState({ result: culcAmount });
  }

  setTarget(e) {
    const value = e.target.value;
    this.setState({ target: value });
  }

  setBase(e) {
    const value = e.target.value;
    this.props.update(value).then((newData) => {
      this.setState({
        data: newData,
        base: newData.base,
      });
    });
  }

  updateAmount(e) {
    const value = e.target.value;

    if (isNaN(value)) {
      return;
    }

    this.setState({ amount: value });
  }

  render() {
    const data = this.state.data;
    return (
      <Layout className={s.content}>
        <main className={s.main} id="main" role="main">
          <article className={s.content} id="content">

            <p className={s.date}>{data.date}</p>

            <form className={s.form}>
              <div className={s.base}>
                <p>Base currency</p>
                <select
                  className={s.selectBase}
                  value={this.state.base}
                  onChange={e => this.setBase(e)}
                >
                  <option value={this.state.base}>{this.state.base}</option>,
                  {Object.keys(data.rates).map(key =>
                    <option value={key} key={key.toLowerCase()}>{key}</option>,
                  )}
                </select>
              </div>

              <div className={s.target}>
                <p>Target currency</p>
                <select
                  className={s.selectTarget}
                  value={this.state.target}
                  onChange={e => this.setTarget(e)}
                >
                  {Object.keys(data.rates).map(key =>
                    <option value={key} key={key.toLowerCase()}>{key}</option>,
                  )}
                </select>
              </div>

              <div className={s.amount}>
                <input
                  type="text"
                  value={this.state.amount}
                  placeholder="enter the amount"
                  onChange={e => this.updateAmount(e)}
                />

                <button
                  disabled={!this.state.amount}
                  onClick={e => this.getCurrency(e)}
                >
                  Convert
                </button>
              </div>

              <p className={s.result}>{this.state.result}</p>
            </form>

            <div className={s.rates}>
              {Object.keys(data.rates).map(key =>
                <div className={s.rate} key={key.toLowerCase()}>
                  <p className={s.country}>{key}</p>
                  <p className={s.rate}>{this.state.data.rates[key]}</p>
                </div>,
              )}
            </div>
          </article>
        </main>
      </Layout>
    );
  }

}

export default HomePage;
