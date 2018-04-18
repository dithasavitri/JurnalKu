import React, { Component } from 'react';
import { TextInput, Alert} from 'react-native';
import { Text, Button, Thumbnail, Container, Header, Content, Form, Item, Input, View, Title, Body } from 'native-base';
export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: '',
      nama: '',
      judul_jurnal: '',
      loading: 'true'
    }
  }

  InsertDataToServer = () => {
    const { nim } = this.state;
    const { nama } = this.state;
    const { judul_jurnal } = this.state;

    fetch('https://cleidoic-officers.000webhostapp.com/kirimData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nim: nim,
        nama: nama,
        judul_jurnal: judul_jurnal
      })

    }).then((response) => response.json())
      .then((responseJson) => {

        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Button >
                <Title>JurnalKu</Title>
              </Button>
            </Body>
          </Header>
          <Form style={{ flex: 1, paddingBottom: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
              <Thumbnail large source={require('./src/images/jurnal1.png')} />
            </View>

            <Item>
              <Input placeholder="NIM" onChangeText={nim => this.setState({ nim })} keyboardType="numeric" />
            </Item>
            <Item last>
              <Input placeholder="Nama" onChangeText={nama => this.setState({ nama })} />
            </Item>
            <Item last>
              <Input placeholder="Judul Jurnal" onChangeText={judul_jurnal => this.setState({ judul_jurnal })} />

            </Item>
          </Form>

          <View>
            <Button style={{ margin: 20 }} block success onPress={this.InsertDataToServer}>
              <Text>Simpan</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}