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
        <AppBar title="Dictionary 2016" />
        <TextField  hintText="Search" style={styles.search}/>

        <List>
          <Card initiallyExpanded={false}>
           <CardHeader
              title="Апельсин"
              subtitle="Оранжевый фрукт"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Orange</h3>Orange fruit
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false}>
           <CardHeader
              title="Арбуз"
              subtitle="большой и зеленый"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Watermelon</h3>Big and tasty
              <h3>Карбыз</h3>Жийтин нарсе
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false}>
           <CardHeader
              title="Банан"
              subtitle="Желтый"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Banana</h3>Monkey likes bananas
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false}>
           <CardHeader
              title="Огурец"
              subtitle="овощ"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Cucumber</h3>Green vegetable
              <h3>Кияр</h3>Жийтин нарсе
            </CardText>
            <CardActions expandable={true}>
              <RaisedButton label="More"  />
            </CardActions>
          </Card>

          <Card initiallyExpanded={false} style={styles.root}>
           <CardHeader
              title="Яблоко" 
              subtitle="Фрукт на дереве"
              actAsExpander={true}
              showExpandableButton={true}>
            </CardHeader>
            <CardText expandable={true}>
              <h3>Apple</h3>Fruit that grows on trees
              <h3>Алма</h3>Жийтин нарсе
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