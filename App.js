import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Button, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, TouchableHighlight, Image, Modal, TextInput, Alert, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyScreen from './MyScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { FloatingAction } from "react-native-floating-action";
import Video from "react-native-video";
import ImagePicker from 'react-native-image-picker';
import BookItem from "./BookItem";
import tbn_1 from "./tbn_1.mp4"

const images = [{uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg"}, 
{uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg"},
{uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg"},
{uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg"},
{uri:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/little-cute-kitten-serhii-kucher.jpg"},
]
const mockBooks = [
  {
    rank: 1,
    title: "🌼🌸🌷",
    author: "النسخة التجريبية لتطبيق النشاط",
    book_image:
      "https://www.almowaten.net/wp-content/uploads/537101.jpg"
  },
  {
    rank: 2,
    title: "🙀🙀🙀",
    author: "👑👑👑👑",
    book_image:
      "https://i.pinimg.com/originals/e3/19/f4/e319f4aa4dae6880172c7e8542fcc002.jpg"
  }, { rank: 3,
  title: "🕊️🕊️🕊️",
  author: "🕊️🕊️🕊️🕊️",
  book_image:
    "http://free-hd-wall-papers.com/images/cat-hd-wallpaper/cat-hd-wallpaper-3.jpg"
},
];

const actions = [
  {
    text: "أضافة",
    name: "bt_accessibility",
    position: 2,
    color: "#EAB90B"
  },
  {
    text: "تعديل",
    name: "bt_language",
    position: 1,
    color: "#EAB90B"}
];

const numColumns = 1;


class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgSource: '',
      uploading: false,
      progress: 0,
      images: [],
      description: "",
      posts: [],
      loading: true,
      isModalVisible: true,
      isVisible: false, //state of modal default false
      photo: null,
      data: this._addKeysToBooks(mockBooks),
    }
    this.unsubscribe = null;
}

componentDidMount() {
  setTimeout(() => {
    this.setState({isModalVisible: false})
    }, 3000);

}

_renderItem = ({ item }) => {
  return (
    <BookItem style = {styles.row}
      coverURL={item.book_image}
      title={item.key}
      author={item.author}
    />
  );
};

_addKeysToBooks = books => {
  return books.map(book => {
    return Object.assign(book, { key: book.title });
  });
};

  handleChoosePhoto = () => {
    const options = { 
      noData: true,
    };
  
    ImagePicker.launchImageLibrary(options, response => {
      console.log("response", response);
      if (response.uri) {
        this.setState({image: response})}
    });
  };


 


  render() {
   
    
        return (
      
          <View style={styles.bookItem}>
      {
        
      <FlatList data={this.state.data} renderItem={this._renderItem} /> 
      }
          
  <FloatingAction
    actions={actions} color={'#EAB90B'}
    onPressItem={name => {
      this.setState({ isVisible:!this.state.isVisible})
    }}
  />

<Modal animationType = {"none"} transparent = {false} 
            visible = {this.state.isModalVisible}          onRequestClose={() => {
              console.log('Modal has been closed.');
            }}
            >
           <View style={styles.container}>
          <Video
          source={tbn_1}   // Can be a URL or a local file.
          resizeMode="cover"
          style={styles.backgroundVideo}
           />
    </View>

        </Modal>

        <TouchableWithoutFeedback onPress={() => {this.hideModal()}}>
      
<Modal animationType = {"slide"} transparent = {true} 
            visible = {this.state.isVisible}   
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            
            <View style={styles.modal}>
            <TouchableOpacity onPress={() =>this.setState({isVisible:false})}>
    <Text style={styles.exitButton}>Close</Text>
 </TouchableOpacity>
                          <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          placeholderTextColor= 'gray'
          returnKeyType="done"
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          multiline= {true}
          blurOnSubmit={true}
                    /> 

              <View style={styles.btnOrder}>
              <TouchableHighlight onPress={this.handleChoosePhoto}>
<Text style = {styles.button}>
               Attach
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.handlePost}>
<Text style = {styles.button}>
               Add Post
            </Text>
            </TouchableHighlight>


                </View>  
              
            </View>
        </Modal>
        </TouchableWithoutFeedback>

</View> 

)
      }
}
const scheduleData = [
 {key: "لقاء مع متدرب", icon: <Icon
 name="user"
 size={50}
color={'#32a852'} />, color: '#32a852'},
 {key: "سيرة النبي", icon: <Icon
 name="book"
 size={50}
 color={'#D98E1C'} />}, 
 {key: "يوم مفتوح", icon: <Icon
 name="building"
 size={50}
 color={'#3296a8'} />, color: '#32a852'},
 {key: "متنوع", icon: <Icon
 name="fort-awesome"
 size={50}
 color={'#a83232'} />, color: '#32a852'},
 {key: "الافطار الجماعي", icon: <Icon
 name="coffee"
 size={50}
 color={'#9E70C9'} />, color: '#32a852'},]

 const scheduleNumColum = 3

class SettingsScreen extends React.Component {
  renderItem = ({item, index}) => {
    return (
      <View style= {styles.schedItem}>
                <Text style={styles.schedIcon}>{item.icon}</Text>
                <Text style={styles.schedText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
      data={scheduleData}
      contentContainerStyle={styles.sched}
      renderItem={this.renderItem}
      numColumns={2}
    />);
  };

};


class ProfileScreen extends React.Component {
  render() {
    return (
       <View style={styles.bookItem}>

         <FlatList    
           data={[{key:1, uri:'https://www.cuteanimalnames.com/wp-content/uploads/2019/09/sleepingcats0.jpg'}, 
                 {key:2, uri:'https://i.pinimg.com/originals/e5/a9/e8/e5a9e877bcacdc5713d2a8f98412762d.png'},
                 {key:3, uri:'https://pbs.twimg.com/profile_images/602729491916435458/hSu0UjMC_400x400.jpg'}
            ]}
            renderItem={({item})=><Image source={{uri: item.uri}}/>}
      />

      </View>
   
  )}}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  row: { fontSize: 24, padding: 42, borderWidth: 1, borderColor: "#000000" },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    padding: 80,
    justifyContent: 'center',
    height: '80%',
    width: '80%',
    borderRadius: 12,
    backgroundColor: "black"
  }, 
    textInput: { 
    color: 'white',
    height: '60%',
    width: '60%'
       },  
    loginScreenButton:{
      position: 'absolute',
      top: 680,
      left: 300,
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#EAB90B',
      borderRadius:10,
    },
    loginText:{
        color:'#fff',
        paddingLeft : 10,
        paddingRight : 10
    }, 
    backgroundVideo: {
      position: 'relative',
      height: 300,
      width: 300,
    },
    text: {
      position: 'absolute', top: 20, left: 150, right: 0, bottom: 0, color: 'black',
    },
    cancelButton: {
      position: 'absolute', top: 700, left: 0, right: 0, bottom: 0,
    },
    previewImage: {
      width: "100%",
      height: "100%"
  },
  bookItem: {
    flexDirection: "column",
    backgroundColor: "#000000",
    borderBottomColor: "#000000",
    borderBottomWidth: 0,
    height: '100%',
  },
  cover: { flex: 1, height: 300, resizeMode: "contain" },
  info: {
    flex: 3,
    alignItems: "flex-end",
    flexDirection: "column",
    alignSelf: "center",
    padding: 20
  },
  author: { fontSize: 18 },
  title: { fontSize: 60, }, 
  itemColor: {backgroundColor: '#000000', borderBottomWidth: 0}, 
  button: {backgroundColor: '#EAB90B', padding: 15, borderRadius: 20, borderWidth: 0,
  borderColor: '#fff', overflow: 'hidden'
}, 
exitButton: {backgroundColor: '#EAB90B', padding: 15, borderRadius: 20, borderWidth: 0,
borderColor: '#fff', overflow: 'hidden'},
 btnOrder: {width: "100%", height: "100%", flexDirection: "row", flex: 1, justifyContent: 'flex-end'
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5
},
btn: {
  borderWidth: 1,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 20,
  borderColor: 'rgba(0,0,0,0.3)',
  backgroundColor: 'rgb(68, 99, 147)'
},
btnTxt: {
  color: '#fff'
},
image: {
  marginTop: 20,
  minWidth: 200,
  height: 200
}, slider: {width: 100, height: 100},
 photos: {flex:1, marginVertical: 20},
sched: {flex: 1, backgroundColor: "black"},
schedItem:{flex: 1, padding: 10, alignSelf: 'center'}, schedText:  { fontSize: 14, fontWeight: "bold", color: '#FFFFFF', alignSelf: 'center'}, schedIcon: {alignSelf:'center'}})


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  MyScreen: {screen: MyScreen},
});



const TabNavigator = createBottomTabNavigator({
  CPU: {
    screen: HomeScreen,
    navigationOptions: {
        title: "الرئيسية",
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="home"
                size={17}
                color={tintColor} />
        )
        
    }
},
Memory: {
    screen: SettingsScreen,
    navigationOptions: {
        tabBarLabel: "جدول النشاط", activeTintColor: "#14dbbd",
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="rocket"
                size={17}
                color={tintColor} />
        )
    }, 
    
}, 
ProfileScreen: {
  screen: ProfileScreen,
  navigationOptions: {
      tabBarLabel: "الارشيف", activeTintColor: "#14dbbd",
      tabBarIcon: ({ tintColor }) => (
          <Icon
              name="image"
              size={17}
              color={tintColor} />
      )
  }, 
  
},

},{tabBarOptions: { activeTintColor: '#EAB90B', style: {
  backgroundColor: '#000000', borderTopColor: "transparent"
}}
});

// var firebaseConfig = {
//   apiKey: "AIzaSyDpJNVAZ7Pj6-xhI5kEnHeW7DYO9zdwhmU",
//   authDomain: "alnashat.firebaseapp.com",
//   databaseURL: "https://alnashat.firebaseio.com",
//   projectId: "alnashat",
//   storageBucket: "alnashat.appspot.com",
//   messagingSenderId: "1061526219825",
//   appId: "1:1061526219825:web:7b4d628b9f56c3a6317910",
//   measurementId: "G-RFFMEMTNCZ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(config)
// }
// const db = firebase.firestore()
// export { db }

export default createAppContainer(TabNavigator, MainNavigator)

