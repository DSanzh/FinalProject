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
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';

const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      root: {
        width: 320,
        height: '100%',
      },
      search: {
        width: 320,
      }
    };
    return (
      <div style={styles.root}>
        <AppBar title="Dictionary" />
        <TextField  hintText="Search" style={styles.search}/>

        <List>
          <Card initiallyExpanded={false}>
           <CardHeader
              title="Красный"
              subtitle="Вид цвета"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Red</h3>Red Color
              <h3>Қылыз</h3>Қызыл түс
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false}>
           <CardHeader
              title="Планшет"
              subtitle="На вид как смартфон но размером больше"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Tablet</h3>Looks like smartphone but bigger
              <h3>Планшет</h3>Смартфон сияқты бірақ үлкендеу
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false}>
           <CardHeader
              title="Көлік"
              subtitle="Жүру құралы"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Автомобил</h3>Транспортное средвство
              <h3>Car</h3> Vehicle machine
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>
          

        </List>
      </div>

    );
  }
}

export default App;