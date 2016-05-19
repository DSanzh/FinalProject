import React, {Component} from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="Dictionary" />
        <TextField  hintText="Search" />
        <Card initiallyExpanded={true}>



</Card>
        <List>
          <ListItem primaryText="Apple - яблоко."  />
          <ListItem primaryText="Bad - very bad." />
          <ListItem primaryText="Good - very." />
          <ListItem primaryText="Window - окно." />
          <ListItem primaryText="The Sun - Солнце." />
        </List>
      </div>

    );
  }
}

export default App;
