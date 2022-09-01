import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class NoPage extends PureComponent {

  render() {
    return (<div>
      <h1>404</h1>
      <p>No page found</p>
      <p>Go back to <Link to="/" style={styles.nopage}>Homepage</Link></p>
    </div>);
  }
  
};

const styles = {
  nopage: {
    textDecoration: 'none'
  }
}

export default NoPage;