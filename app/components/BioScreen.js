import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  SafeAreaView,
  View,
  Text
} from "react-native";
import { Icon } from "native-base";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

const images = [{ id: 1, src: require("../../assets/images/bio.jpg") }];

export default class BioScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      activeImage: null
    };
  }
  componentWillMount() {
    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
    this.animation = new Animated.Value(0);
  }
  openImage = index => {
    this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
      this.oldPosition.x = pageX;
      this.oldPosition.y = pageY;
      this.oldPosition.width = width;
      this.oldPosition.height = height;

      this.position.setValue({
        x: pageX,
        y: pageY
      });
      this.dimensions.setValue({
        x: width,
        y: height
      });
      this.setState(
        {
          activeImage: images[index]
        },
        () => {
          this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
            Animated.parallel([
              Animated.timing(this.position.x, {
                toValue: dPageX,
                duration: 300
              }),
              Animated.timing(this.position.y, {
                toValue: dPageY,
                duration: 300
              }),
              Animated.timing(this.dimensions.x, {
                toValue: dWidth,
                duration: 300
              }),
              Animated.timing(this.dimensions.y, {
                toValue: dHeight,
                duration: 300
              }),
              Animated.timing(this.animation, {
                toValue: 1,
                duration: 300
              })
            ]).start();
          });
        }
      );
    });
  };
  closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        duration: 300
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 300
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 300
      }),
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 300
      })
    ]).start(() => {
      this.setState({
        activeImage: null
      });
    });
  };
  render() {
    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x,
      right: this.position.y
    };

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    });
    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    });

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [
        {
          translateY: animatedContentY
        }
      ]
    };

    const animatedCrossOpacity = {
      opacity: this.animation
    };

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {images.map((image, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => this.openImage(index)}
                key={image.id}
              >
                <Animated.View
                  style={{
                    height: SCREEN_HEIGHT - 150,
                    width: SCREEN_WIDTH,
                    padding: 15
                  }}
                >
                  <Image
                    ref={image => (this.allImages[index] = image)}
                    source={image.src}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 20
                    }}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
          <View>
            <Text
              style={{
                fontSize: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingTop: -5,
                textShadowColor: "#585858",
                textShadowOffset: { width: 2, height: 5 },
                textShadowRadius: 10,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Tap On Picture For Details{" "}
            </Text>
          </View>
        </ScrollView>
        <View
          style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
          <View
            style={{ flex: 2, zIndex: 1001 }}
            ref={view => (this.viewImage = view)}
          >
            <Animated.Image
              source={
                this.state.activeImage ? this.state.activeImage.src : null
              }
              style={[
                {
                  resizeMode: "cover",
                  top: 0,
                  left: 0,
                  height: null,
                  width: null
                },
                activeImageStyle
              ]}
            />

            <TouchableWithoutFeedback onPress={() => this.closeImage()}>
              <Animated.View
                style={[
                  { position: "absolute", top: 30, right: 30 },
                  animatedCrossOpacity
                ]}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 40
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      paddingLeft: 10,
                      paddingRight: 10,
                      textShadowColor: "#585858",
                      textShadowOffset: { width: 2, height: 5 },
                      textShadowRadius: 10,
                      fontWeight: "bold",
                      color: "black"
                    }}
                  >
                    Close
                  </Text>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                zIndex: 1000,
                backgroundColor: "white",
                padding: 20,
                paddingTop: 50
              },
              animatedContentStyle
            ]}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}
            >
              ABOUT JERMAINE LAMAR COLE
            </Text>
            <ScrollView>
              <Text style={{ justifyContent: "center" }}>
                {`Jermaine Lamar Cole (born January 28, 1985), known professionally as J. Cole, is an American rapper, singer, songwriter and record producer. Born on a military base in Germany but raised in Fayetteville, North Carolina.`}
              </Text>

              <Text>
                {`
						`}
              </Text>
              <Text style={{ fontWeight: "bold" }}>Early Life</Text>

              <Text>
                {`His father, an African-American soldier, left his mother, a white German postal worker, when Cole was a baby. She moved with him and his older brother, Zach, to Fayetteville, North Carolina, where the family lived in trailer parks as she struggled to make ends meet. 

His mom eventually remarried — Cole's stepfather was also in the Army — and the family relocated to a nicer home. However, the marriage crumbled and the family lost the house as Cole was about to leave for college. His stepfather had become abusive, particularly toward Zach; after the marriage ended, Cole's mother became addicted to crack under the influence of a new boyfriend. It was in Fayetteville that Cole's passion for music found an early outlet when he joined the Terry Sanford Orchestra as a violinist. 

He also began to teach himself rapping and production, rapping first as Blaza, then as Therapist — “We used to look through the dictionary for rap names,” he recalled later — before hooking up with a local group called Bomm Sheltuh. 

He held down a number of part-time jobs as a teenager while he honed his production skills, including a stint at an ice hockey rink where he had to dress up as a kangaroo mascot. After graduating from high school, Cole moved to New York and attended St John’s University, graduating magna cum laude in 2007 with a degree in communications.`}
              </Text>

              <Text>
                {`
								`}
              </Text>

              <Text style={{ fontWeight: "bold" }}>Career</Text>

              <Text>
                {`His debut mixtape, The Come Up, also came out in 2007. It was largely self-produced, but also saw him rapping over beats from Kanye West, Large Professor and Just Blaze. A track called "Lights Please" from his second mixtape, The Warm Up (2009), came to the attention of the producer and music exec Mark Pitts, who played it to Jay Z. 
								
Ironically, Cole had attempted to give Jay Z a copy himself, after waiting outside a studio to meet his idol for three hours — only to be rebuffed with the line “Man, I don't want that shit.” But Pitts had Jay Z's ear, and the mogul was impressed with what he heard. Cole signed to Roc Nation and started to appear as a guest on tracks by Wale, Jay Z and Talib Kweli.
								
A third mixtape in 2010, Friday Night Lights, consisted of songs rejected from Cole’s debut studio album. That album, Cole World: The Sideline Story, finally saw the light of day in 2011 and would go on to be certified platinum. Critics hailed a promising artist, with the L.A. Times praising the “satisfying confidence” of his rhymes and the “slickly inventive beats.”
								
								`}
              </Text>
              <Text style={{ fontWeight: "bold" }}>
                Going No. 1: '2014 Forest Hills Drive' and '4 Your Eyez Only'
              </Text>
              <Text>
                {`Cole's sophomore album, Born Sinner, had its release date moved numerous times so as not to clash with other big releases. When it eventually came out in June 2013, it was another success. Kendrick Lamar and 50 Cent were among the guests, on an album that was warmly, but not ecstatically, received.

With momentum building, 2014 Forest Hills Drive came out in December 2014 and premiered at No. 1 on the Billboard 200, despite a lack of advance singles or marketing. It won several awards, including Billboard Rap Album of the Year, and was later certified double platinum. This was impressive for an album that had no guest appearances, although some critics felt his political stances in real life were not reflected on an album that often strayed into sex rhymes. “It’s time for the Cole who marches in the streets to start showing up on record,” said Rolling Stone, referring to Cole’s visit to Ferguson in August 2014 to meet those protesting the shooting of Michael Brown.
								
His fourth studio album, 4 Your Eyez Only, came out just before Christmas 2016 and also went to No. 1. Despite a minor controversy over what some saw as lyrical barbs directed at Kanye West and Drake, it was another guest-free set that found favor. The New York Times suggested that by freeing himself of the shackles of big-name guest stars, Cole could take his own artistic path, noting that the album “feels as if it were made without the slightest concession to what’s happening elsewhere in the genre.”
								`}
              </Text>

              <Text style={{ fontWeight: "bold" }}>
                Making History With KOD
              </Text>

              <Text>
                {`On April 16, 2018, J. Cole announced a surprise free event for fans at the Gramercy Theatre in New York City. The event turned out to be a listening session for his forthcoming album, titled KOD, which was released on April 20, 2018. Cole held a second listening session in London the next day. The album's cover and tracklist show twelve tracks and two features, both by Cole's alter ego, Kill Edward. Cole had mentioned that KOD has 3 meanings, Kids on Drugs, King Overdosed, and Kill Our Demons. The cover art for KOD was done by a Detroit artist named Kamau Haroon who goes by the name Sixmau. The album touches on many topics including drug abuse, addiction, depression, and greed.

In the United States, on the day of its release, KOD broke the previous record for Views by Drake in 2016 by receiving 64.5 million streams on Apple Music. It accumulated 36.7 million streams on Spotify in its first 24 hours as well. Additionally, the titled track also surpassed Taylor Swift's "Look What You Made Me Do" by 0.4 million streams on its first day. The album debuted at number one on the US Billboard 200, earning 397,000 album-equivalent units, including 174,000 in pure sales, making it Cole's fifth number one album. J. Cole also became the first act to simultaneously debut three songs in the top 10 of the Billboard Hot 100, with "ATM" (at 6), "Kevin's Heart" (8), and "KOD" (10). The remainder of the album also debuted in the Hot 100, totaling to twelve songs on the chart. "KOD" was released as the album's first single, on May 8, 2018. Cole released music videos for the songs "ATM" and "Kevin's Heart", both videos was directed by Cole and Scott Lazer. "ATM" impacted US rhythmic contemporary radio on July 31, 2018, as the album's second single. Songs from the album were featured in the official 2018 NBA Playoffs and the NBA Finals promotion for ESPN. On April 27, 2018 it was announced that Cole was working on another project titled The Fall Off, Cole said that he planned to release The Fall Off before he recorded KOD. Cole also confirmed that he is working on a Kill Edward album. On May 14, 2018, KOD was certified Gold by the Recording Industry Association of America (RIAA) for sales of over 500,000 album-equivalent units in the US. The album has since been certified Platinum by the Recording Industry Association of America (RIAA) with one million album-equivalent units in the United States.

Cole announced the KOD Tour on May 8, 2018, Young Thug, Jaden Smith, EarthGang and Kill Edward served as the supporting acts. The tour will include 34 North American dates, starting in Miami, on August 9 and concluding in Boston, on October 10, 2018. Cole performed "Intro" and "Friends" at the 2018 BET Awards on June 24, 2018. Singer Daniel Caesar performed part of "Intro" and the chorus to "Friends", rapper Wale was also part of the set.

On August 7, 2018, Cole released a single titled, "Album of the Year (Freestyle)". The single was accompanied by a music video, which premiered on WorldStarHipHop.[132] Cole also announced a new project titled, The Off Season,[131] which he plans to release ahead of his next studio album, The Fall Off. In the description to the video, it reads: "The Off Season coming soon... All roads lead to The Fall Off - Cole". In an interview for Billboard in September 2018, Cole said he plans to take off 2019 from touring to finish work on The Off Season, The Fall Off, and the Kill Edward project.`}
              </Text>

              <Text>
                {`
								`}
              </Text>

              <Text style={{ fontWeight: "bold" }}>
                Establishing His Own Label, Nonprofit Work
              </Text>

              <Text>
                {`As a thoughtful, contemplative rapper, J. Cole generally stays away from beefing with other artists or living a gaudy, front-page lifestyle. He runs the Dreamville Records label with his former St. John's University classmate Ibrahim Hamad, releasing music by up-and-coming artists including Omen, Bas and Cozz. 
 
The label shares a name with his Dreamville Foundation, a non-profit Cole established in his hometown. Set up to “bridge the gap between the worlds of opportunity and the urban youth of Fayetteville, NC,” it runs a series of events and programs, including a reading club and essay contests.`}
              </Text>
              <Text>
                {`
								`}
              </Text>
              <Text>
                {`Cole is married to Melissa Heholt, with whom he has a child. He recently purchased the childhood home after which he named his 2014 Forest Hills Drive album, with the intention of developing it into temporary rent-free accommodation for single mothers.

It's actions like this that have made him a rapper that even presidents can praise. Cole was invited to the White House to meet with Barack Obama in spring 2016, something he rapped about on the track "High for Hours." Obama later commented: “This is the benefit of having teenage daughters, I actually keep up… I love J. Cole.” 

Endorsements don’t come much bigger!!!`}
              </Text>
              <Text>
                {`
								
								
								`}
              </Text>
              <Text style={styles.footer}>
                Credits: Wikipedia, Biography.com
              </Text>
            </ScrollView>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 15,
    fontFamily: "Rubik-Regular"
  },
  footer: {
    flex: 1,
    textAlign: "right",
    marginRight: 20,
    color: "gray",
    borderTopColor: "lightgray"
  }
});
