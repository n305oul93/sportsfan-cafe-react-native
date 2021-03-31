import React, {
  Component,
  useState,
  useRef,
  useCallback,
  useEffect
} from 'react'
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import { baseUrl } from '../shared/baseUrl'
import { BALCONYPICS } from '../shared/balconyPics'
import { GAMEROOMPICS } from '../shared/gameroomPics'
import { CAFEPICS } from '../shared/cafePics'

function Carousel({ picture }) {
  // console.log(picture)
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    const distance = Math.abs(roundIndex - index)

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }
  }, [])

  // Use the index
  // useEffect(() => {
  //   console.warn(index)
  // }, [index])

  return (
    <FlatList
      data={picture}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />
      }}
      keyExtractor={item => item.id.toString()}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  )
}

function Slide({ data }) {
  // console.log(data.image)
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

  return (
    <View
      style={{
        height: windowHeight * 0.7,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image
        source={{ uri: baseUrl + data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.6 }}
      ></Image>
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
    </View>
  )
}

class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balconyPics: BALCONYPICS,
      gameroomPics: GAMEROOMPICS,
      cafePics: CAFEPICS
    }
  }

  static navigationOptions = {
    title: 'Photos'
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.pictureTitle}>Balconies</Text>
        <Carousel picture={this.state.balconyPics} />
        <Text style={styles.pictureTitle}>Game Rooms</Text>
        <Carousel picture={this.state.gameroomPics} />
        <Text style={styles.pictureTitle}>Cafè</Text>
        <Carousel picture={this.state.cafePics} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  pictureTitle: {
    fontSize: 30,
    marginLeft: 20
  }
})

export default Photos
