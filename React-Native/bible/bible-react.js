import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createRoot } from 'react-dom/client';
import './App.css';

var _dat = {};


export default function App() {

const [loading, books] = React.useState('')
const [chap, chapterL] = React.useState('')
const [ver, verseL] = React.useState('')

React.useEffect(()=>{
_dat.url = `https://labs.bible.org/api/?books&type=json`;
fetch(_dat.url).then((d)=>{
  return d.json()
}).then((r)=>{
  _dat.r = r
_dat.books = []

r.forEach(el => {
  _dat.books.push(<li style={_dat.styles.li} id={el.name} key={el.name} onClick={getChapters}>{el.name}</li>)
});
  _dat.booksUl = (<ul style={_dat.styles.books} >{_dat.books}</ul>)

}).then(()=>{
  books(_dat.booksUl)
})




}, []);



const getChapters = (e) =>{
  _dat.book = e.target.innerText
  _dat.chapters = []
_dat.r.forEach(el =>{
  if(e.target.innerText === el.name){
    for (let index = 0; index < el.chapters; index++) {
      _dat.chapters.push(<li style={_dat.styles.li} id={'chapter-' + index} key={index +1} onClick={_dat.verse}>{index + 1}</li>)
      
    }
  }
  _dat.chapter = (<ul style={_dat.styles.books}>{_dat.chapters}</ul>)
  chapterL(_dat.chapter)
})





}
_dat.verse = (e) => {
_dat.chapter = e.target.innerText
_dat.verseUrl = 'https://labs.bible.org/api/?passage='+ _dat.book + ' '+ _dat.chapter+ '&type=json'

fetch(_dat.verseUrl).then((d)=>{
  return d.json()
}).then((r)=>{
  _dat.verse = []
  _dat.Verses = r
  }).then(()=>{

    _dat.Verses.forEach(el =>{
      _dat.verse.push(<li style={_dat.styles.li} id={'verse-'+el.verse} key={el.verse}>{el.verse + ' '+el.text}</li>)
  })
}).then(()=>{
  _dat.verseL = (<ul id='verses'>{_dat.verse}</ul>)
  verseL(_dat.verseL)

})

}










  return (
    <View style={_dat.styles.container}>
      <div style={_dat.styles.title} >{_dat.book}</div>
      <StatusBar />
        <div style={_dat.styles.list}>
      {_dat.booksUl}
      {!!(_dat.chapter)?_dat.chapter:chap}
      {!!(_dat.verseL)?_dat.verseL:ver}
      </div>
    </View>
  );
}






_dat.mobile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  books:{
    display: 'flex',
    maxWidth: '90vw',
    overflow: 'hidden',
    overflowX: 'scroll',
    },
  li:{
padding: '6rem',
minWidth: 'fit-content',
listStyle: 'none',
whiteSpace: 'nowrap'
    }
});



_dat.desktop = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  books:{
    overflow: 'hidden',
    maxHeight: '90vh',
    overflowY: 'scroll'
    },
    
  li:{
padding: '.5rem',
minWidth: 'fit-content',
listStyle: 'none',
whiteSpace: 'nowrap'
    },
    list:{
        display: 'flex'
       },
       title:{
        margin: 'auto'
       }


    
});












_dat.width = innerWidth
_dat.height = innerHeight
if(_dat.width < 500){
  _dat.styles = _dat.mobile
  console.log('Mobile')
} else {
 
  _dat.styles = _dat.desktop

}