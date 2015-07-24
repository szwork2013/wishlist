import React from 'react';
import SkuStore from '../stores/SkuStore';

let List = React.createClass({
  getInitialState() {
    return {
      skuList: SkuStore.getState().skus
    };
  },

  componentDidMount() {
    SkuStore.listen(this.onChange);
  },

  componentWillUnmount() {
    SkuStore.listen(this.onChange);
  },

  onChange(state) {
    this.setState({skuList: state.skus});
  },

  render() {
    console.log(this.state.skuList);

    return (
      <ul>
        {this.state.skuList.map( (sku, index) => {
          return (<li key={index}>{sku}</li>);
        })}
      </ul>
    );
  }
});
export default List;
