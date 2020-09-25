// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import MarketContextActions from "../redux/actions/MarketContextActions";

// END IMPORT ACTIONS

/** APIs

* actionsMarketContext.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class MarketContextEdit extends Component {
  // Init marketcontext
  constructor(props) {
    super(props);
    this.state = {
      marketcontext: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMarketContext.loadMarketContext(this.props.match.params.id);
    }
    
  }

  // Insert props marketcontext in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      marketcontext: props.marketcontext
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.marketcontext._id) {
      this.props.actionsMarketContext.saveMarketContext(this.state.marketcontext).then(data => {
        this.props.history.push("/marketcontexts/");
      });
    } else {
      this.props.actionsMarketContext.createMarketContext(this.state.marketcontext).then(data => {
        this.props.history.push("/marketcontexts/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>MarketContext Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="tvalue"
            label="Tvalue"
            value={this.state.marketcontext.tvalue || ""}
            onChange={Utils.handleChange.bind(this, "marketcontext")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/marketcontexts/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMarketContext: bindActionCreators(MarketContextActions, dispatch),
  };
};

// Validate types
MarketContextEdit.propTypes = { 
  actionsMarketContext: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    marketcontext: state.MarketContextEditReducer.marketcontext
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketContextEdit);
