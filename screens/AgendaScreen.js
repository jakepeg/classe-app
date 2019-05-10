import React, { Component } from "react";
import styled from "styled-components";
import { Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Header from "../components/Header";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc."
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."]
};

LocaleConfig.defaultLocale = "fr";

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <RootView>
        <Header />
        <Agenda
          items={calendarItems}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          theme={{
            backgroundColor: "#ffffff"
          }}
          hideKnob={true}
          style={{ marginTop: -120 }}
        />
      </RootView>
    );
  }

  renderItem(item) {
    return (
      <Item>
        <Title>{item.title}</Title>
      </Item>
    );
  }

  renderEmptyDate() {
    return (
      <Empty>
        <Title style={{ color: "#666666", marginTop: 20 }}>
          pas d'évènement
        </Title>
      </Empty>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const Item = styled.Text`
  background-color: #bde4f7;
  flex: 1;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 17px;
`;

const Empty = styled.Text`
  padding: 10px;
  margin-right: 10px;
  margin-top: 27px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  /* text-transform: uppercase; */
  position: absolute;
  margin-left: 40px;
  margin-top: 13px;
`;

const RootView = styled.View`
  background: white;
  flex: 1;
`;

const calendarItems = {
  "2019-04-29": [],
  "2019-04-30": [{ title: "Gym", height: 100 }],
  "2019-05-01": [],
  "2019-05-02": [],
  "2019-05-03": [{ title: "Foret" }],
  "2019-05-04": [{ title: "20km de Lausanne" }],
  "2019-05-05": [],
  "2019-05-06": [],
  "2019-05-07": [],
  "2019-05-08": [],
  "2019-05-09": [],
  "2019-05-10": [],
  "2019-05-11": [],
  "2019-05-12": [],
  "2019-05-13": [{ title: "Ferme" }],
  "2019-05-14": [{ title: "Gym" }],
  "2019-05-15": [],
  "2019-05-16": [],
  "2019-05-17": [],
  "2019-05-18": [],
  "2019-05-19": [],
  "2019-05-20": [],
  "2019-05-21": [],
  "2019-05-22": [],
  "2019-05-23": [],
  "2019-05-24": [],
  "2019-05-25": [],
  "2019-05-26": [],
  "2019-05-27": [{ title: "Ferme" }],
  "2019-05-28": [],
  "2019-05-29": [],
  "2019-05-30": [],
  "2019-05-31": [],
  "2019-06-01": [],
  "2019-06-02": [],
  "2019-06-03": [{ title: "Ferme" }],
  "2019-06-04": [],
  "2019-06-05": [],
  "2019-06-06": [],
  "2019-06-07": [],
  "2019-06-08": [],
  "2019-06-09": [],
  "2019-06-10": [],
  "2019-06-11": [],
  "2019-06-12": [],
  "2019-06-13": [],
  "2019-06-14": [],
  "2019-06-15": [],
  "2019-06-16": [],
  "2019-06-17": [],
  "2019-06-18": [],
  "2019-06-19": [],
  "2019-06-20": [],
  "2019-06-21": [],
  "2019-06-22": [],
  "2019-06-23": [],
  "2019-06-24": [],
  "2019-06-25": [],
  "2019-06-26": [],
  "2019-06-27": [],
  "2019-06-28": [],
  "2019-06-29": [],
  "2019-06-30": [],
  "2019-07-01": [],
  "2019-07-02": [],
  "2019-07-03": [],
  "2019-07-04": [],
  "2019-07-05": []
};
