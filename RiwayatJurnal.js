import React, { Component } from 'react';
import {ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { Button, Title, Container, Header, Content, Card, CardItem, Text, Body, View ,Icon,Item,Input} from 'native-base';
export default class CardHeaderFooterExample extends Component {
  constructor(props){
    super(props);
    this.state={
      cari: '',
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false,
      loading: 'true'
    };
  }
  componentDidMount(){
    this.setState({ActivityIndicator_Loading: true}, () => {
      this.setState({refreshing: true});
      const url = 'https://cleidoic-officers.000webhostapp.com/getData.php';

      fetch(url)
      .then((response)=>response.json())
      .then((responseJson)=>{
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false,
          ActivivtyIndicator_Loading: false,
        });
      });
    });
  }
  async componrntWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({loading:false});
  }
  
  render() {
    if(this.state.loading){
      return <Expo.AppLoading />
    }

    return (
      <Container>
        <Header>
            <Body>
              <Button >
                <Title>JurnalKu</Title>
              </Button>
            </Body>
          </Header>        
          <Content
            refreshControl={
              <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.componentDidMount.bind(this)}
              />
            }
          >
          <View>
      
        <FlatList
        data={this.state.data}
        renderItem={({item}) =>
        <Card>
            <CardItem>
              <Body>
              <Text style={{fontWeight:'bold'}} > Judul Jurnal : {item.judul_jurnal}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Text>NIM : {item.nim}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Nama : {item.nama}
                </Text>
              </Body>
            </CardItem>
            
         </Card>
        }
        
        keyExtractor={item=>item.nama}
        />
        </View>
        </Content>
      </Container>
    );
  }
}