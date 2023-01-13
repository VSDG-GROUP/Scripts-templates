import React from "react";
import styles from './control/style.module.css'
import {_dat} from './control/controller'
import {json} from './control/controller'

function App() {

  
  const [loadingInt, loaDer] = React.useState('')
  const [chapter, getChapters] = React.useState('')
  const [verses, getVerses] = React.useState(null) 


  React.useEffect(() => {
    _dat.url = `https://labs.bible.org/api/?books&type=json`;
    fetch(_dat.url).then(e => {
      return e.json()
    }).then(r => {
      _dat.booksResults = r
    }).then(() => {
      _dat.liBooks = []
      _dat.chapters = []

      _dat.booksResults.forEach(el => {
        _dat.liBooks.push(<li id={el.name} key={el.name} onClick={_dat.chapterNumber}>{el.name}</li>)

        if ('Genesis' === el.name) {

          for (let index = 0; index < el.chapters; index++) {
            _dat.chapters.push(<li id={'chapter-' + index + 1} key={index + 1} onClick={_dat.getVerse}>{index + 1}</li>)
          }
        }
      });
    }).then(() => {
      _dat.books = (<ul id="books" className={styles.list}>{_dat.liBooks}</ul>)
      _dat.ulChapers = (<ul id="chapters" className={styles.list}>{_dat.chapters}</ul>)

    }).finally(() => {
      loaDer(_dat.books)
      _dat.getVerse(_dat.chapters[0])
    })
  }, []);
  _dat.chapterNumber = (e) => {

    _dat.chapters = []
    _dat.ulVerses = []
    _dat.book = e.target.innerText
    _dat.booksResults.forEach(el => {
      if (e.target.innerText === el.name) {

        for (let index = 0; index < el.chapters; index++) {
          _dat.chapters.push(<li id={'chapter-' + index + 1} key={index + 1} onClick={_dat.getVerse}>{index + 1}</li>)
        }
        _dat.ulChapers = (<ul id="chapters" className={styles.list}>{_dat.chapters}</ul>)
        //removeNode('#books')
        getChapters(_dat.ulChapers)
      }
    })
  }
  _dat.getVerse = (e) => {
    if (e.target) {
      _dat.chapter = e.target.innerText
    } else {
      _dat.chapter = '1'
    }

    if (!_dat.book) {
      _dat.book = 'Genesis'
    }
    if (!_dat.chapter) {
      _dat.chapter = '1'
    }
    _dat.url = `https://labs.bible.org/api/?passage=` + _dat.book + ' ' + _dat.chapter + `&type=json`
    fetch(_dat.url).then((d) => {
      return d.json()
    }).then((s) => {
      _dat.liVerses = []
      s.forEach(el => {
        _dat.liVerses.push(<li id={'verse-' + el.verse} key={'verse-' + el.verse}>{el.verse + ' ' + el.text}</li>)
      })
      _dat.ulVerses = (<ul id="verses" className={styles.verses}>{_dat.liVerses}</ul>)
    }).then(() => {
      getVerses(_dat.ulVerses)
    })
  }
  return (
    <div className="App">
    
      <header className={styles.header}>
      <div className={styles.title}>
        <div className="tite">{_dat.book}</div>
        <div className="tite">{_dat.chapter}</div>
      </div>
        {_dat.books}
        {_dat.ulChapers}
      </header>
      <div className={styles.content}>
      {_dat.ulVerses}

      </div>
    </div>
  );
}


export default App;
