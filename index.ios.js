'use strict';

import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  NativeModules 
} from 'react-native';

var RNViewController = NativeModules.RNViewController;

class SearchMenuRadio extends React.Component {
  render(){
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.props.onPressTap}>
          <View style={styles.searchMenuRadio}> 
            <Image
              source={this.props.selected?require('./TestRN/radiobutton_check.png')
              :require('./TestRN/radiobutton_uncheck.png')}
            /> 
            <Text>{this.props.title}</Text> 
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  } 
}

class SearchResultCell extends React.Component {
  render(){
    return (
      <View style={styles.searchResultCell}>
        <View style={styles.searchResultCellTitle} >
          <Text style={styles.title} >
            Hello World!
          </Text>
        </View>
        <View style={styles.searchResultCellLine} >
        </View>
      </View>
    );
  }
}

class SearchViewComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchType: 1
    };

    this.onPressTap = this.onPressTap.bind(this);
  }
  close(){
    RNViewController.backAction();
  }
  onPressTap(){
    this.setState({searchType:this.state.searchType===1?0:1}) 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <TextInput style={styles.search} />
            <View  style={styles.cancel} >
              <Button 
                title="取消" 
                onPress={this.close}
                color='#ffffff'
              />
            </View>
          </View>
          <View style={styles.searchMenu}>
            <View  style={styles.searchNews}>
              <SearchMenuRadio 
                title="搜新闻" 
                selected={this.state.searchType===1?true:false}
                onPressTap={this.onPressTap}
              />
            </View>
            <View  style={styles.searchWeb}>
              <SearchMenuRadio 
                title="搜网页" 
                selected={this.state.searchType===0?true:false}
                onPressTap={this.onPressTap}
              />
            </View>
          </View>
        </View>
        <ScrollView 
          contentContainerStyle={styles.contentContainer}
          keyboardDismissMode="on-drag"
          automaticallyAdjustContentInsets={false}
        >
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
          <SearchResultCell />
        </ScrollView>
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_HEIGHT = 64;
const MENUBAR_HEIGHT = 44; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  header: {
    width: SCREEN_WIDTH,
    height: NAVIGATION_HEIGHT + MENUBAR_HEIGHT,
    backgroundColor: '#ffffff', // 粉
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    height:NAVIGATION_HEIGHT,
    backgroundColor: '#224b8f', // 蓝 
  },
  searchMenu: {
    height: MENUBAR_HEIGHT,
    backgroundColor: '#6950a1', // 紫
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - NAVIGATION_HEIGHT - MENUBAR_HEIGHT,
    backgroundColor: '#007947', // 绿 
  },
  search: {
    width: SCREEN_WIDTH - 70,
    height: 34,
    marginTop: 25,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderRadius: 17,
  },
  cancel: {
    alignItems: 'center',
    marginTop: 25,
    width: 60,
    height: 34,
  },
  searchNews: {
    marginLeft: 15,
  },
  searchWeb: {
    marginLeft: 35,
  },
  searchMenuRadio:{
    flexDirection: 'row',
  },
  searchResultCell:{
    height: 30,
  },
  searchResultCellTitle:{
    justifyContent: 'center',
    height: 29.5,
    marginLeft: 16,
    marginTop: 0,
  },
  searchResultCellLine:{
    backgroundColor: '#999999',
    marginLeft: 15,
    height: 0.5,
  },
  title:{

  }
});

AppRegistry.registerComponent('RNHighScores', () => SearchViewComponent);
