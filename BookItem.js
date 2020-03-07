import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: "column",
    backgroundColor: "#000000",
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 1,
    width: '80%',
    alignSelf: 'center',
    padding: 10,
  },
  cover: { flex: 1, width: '90%', height: 300,alignSelf: 'center' },
  info: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "column",
    alignSelf: "center",
    padding: 20
  },
  author: { fontSize: 18, fontWeight: "bold", color: '#FFFFFF'},
  title: { fontSize: 14, fontWeight: "bold", color: '#FFFFFF' }
});

class BookItem extends Component {
  render() {
    return (
      
      <View style={styles.bookItem}>
        <View style={styles.info}>
          <Text style={styles.author}>{this.props.author}</Text>
        </View>
        <Image style={styles.cover} source= {{uri: this.props.coverURL}}/>
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

      </View>
    );
  }
}

export default BookItem;