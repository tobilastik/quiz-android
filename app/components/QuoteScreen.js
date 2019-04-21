import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View
} from "react-native";
import { Font } from "expo";

const quotes = [
  {
    message: `I put a lot of pressure on myself. I think something’s not good enough, and I won’t stop until I feel like I’ve made it. I’m never satisfied.`,
    author: `J Cole`
  },
  {
    message: `Rhyme patterns are nothing without meanings to the words. A lot of rappers can do those flows, but the raps aren't really about anything - which is cool sometimes, but to have the flow and the message is one of my favorite things.`,
    author: `J Cole`
  },
  {
    message: `The real ones be dyin,the fake ones be lit.`,
    author: `J Cole`
  },
  {
    message: `What good is the bread when my niggaz is broke...`,
    author: `J Cole`
  },
  {
    message: `So ahead of my time even when I rhyme about my future I be reminiscing.`,
    author: `J Cole`
  },
  {
    message: `We ain't picture perfect but we worth the picture still.`,
    author: `J Cole`
  },
  {
    message: `She deserves that, she a bird, it's a bird trap, you think if I didn't rap she would flirt back, taking off her skirt let her wear my shirt, before she leaves i'mma need my shirt back.`,
    author: `J Cole`
  },

  {
    message: `Usually I start with a beat, I start making a beat, and my producer side is making the beat. And on a good day, my rapper side will jump in and start the writing process - maybe come up with a hook or start a verse. Sometimes it just happens like that. A song like 'Lights Please' happens like that.`,
    author: `J Cole`
  },
  {
    message: `Things change, rearrange, or so do I. It ain't always for the better dawg, I can't lie, I get high 'cause the lows can be so cold.. I might bend a little bit but I don't fold.`,
    author: ` J Cole`
  },
  {
    message: `Every loser gotta win and every winner gotta lose someday `,
    author: `J cole`
  },
  {
    message: `Always gon be a whip that’s better than the one you’ve got, always gon be some clothes that’s better than the ones you rock, always gon be a bitch that’s badder out there on the tours but you ain’t never gon' be happy till you love yourz.`,
    author: `J Cole`
  },
  {
    message: `Life can bring you so much pain, there are many ways to deal with this pain, CHOOSE WISELY!`,
    author: `J Cole`
  },
  {
    message: `Fool me one time, Shame on you. Fool me twice, can't put the blame on you. Fool me 3 times, fuck the peace sign, Load the chopper, let it rain on you.`,
    author: `J Cole`
  },
  {
    message: `Money in your palm, don’t make you real.`,
    author: `J Cole`
  },
  {
    message: `I guess the light I see in you is what you see in me.`,
    author: `J Cole`
  },
  {
    message: `I'll be around forever cuz my skills is tip-top. To any amateur niggas that wanna get rocked. Just remember what I told you when your shit flop. In five years you gon be on Love & Hip-Hop.`,
    author: `J Cole`
  },

  {
    message: `I struggled with being a broke college graduate, and while all my friends were getting career jobs, I was working horrible part-time jobs. That's why now, even when I get tired, I think, ‘This is what I asked for’.`,
    author: `J cole`
  },
  {
    message: `Barack Obama would not be President if he were dark skin. You know what I mean? That's just the truth. I might not be as successful as I am now if I was dark skin.`,
    author: `J Cole`
  },
  {
    message: `I'm the same kid who used to hop the trains with headphones and just go to downtown Manhattan, walk around and listen to music or walk through the city. The fame restricts that. It's a small complaint in comparison to the benefits I get from it, but the restrictive part is what I don't like - and the fact that it's not reversible.`,
    author: `J Cole`
  },
  {
    message: `I have a little bit of that gamer spirit in me. I just don't have the time to be a gamer. But in another life, I would be one.`,
    author: `J Cole`
  },
  {
    message: `I’mma be here for a while. None of these clowns can hurt me.`,
    author: `J Cole`
  },
  {
    message: `I might bend a little bit but I don't fold, If you see my tear fall, just let me be, move along nothing to see, it never felt better.`,
    author: `J Cole`
  },
  {
    message: `I've been wanting something I can feel.`,
    author: `J Cole`
  },
  {
    message: `I guess they say my dollars supposed to build roads and schools, But my niggas barely graduate, they ain't got the tools.`,
    author: `J Cole`
  },
  {
    message: `  
        The real is back, the ville is back, flow bananas here, peel this back, And what you'll find is, your highness, Can paint a picture that is vivid enough to cure blindness, Carolina's finest. You knew that already. And turned to the greatest, I proved that already.`,
    author: `J Cole`
  },
  {
    message: `But all good Jokes contain true shit.`,
    author: `J Cole`
  },
  {
    message: `Hey, for you I always had an admiration. We lost touch but you never left my imagination. Congratulations on your graduation. Oh now it's time to hit the real world, filled with all them résumés and applications. Man, but ain't nobody calling you back.`,
    author: `J Cole`
  },
  {
    message: `What's the price for a black man life? I check the toe tag, not one zero in sight • I turn the TV on, not one hero in sight. Unless he dribble or he fiddle with mics.`,
    author: `J Cole`
  },
  {
    message: `Paint a picture to show the deaf what it's like to listen, And speak the words and tell a blind man what he missin' For all my niggas doin' time man up in prison, Felt you had to resort to crime, man fuck the system.`,
    author: `J Cole`
  },
  {
    message: `I got smart, I got rich and I got bitches still. And they all look like my eyebrows: thick as hell.`,
    author: `J Cole`
  },
  {
    message: `For what's money without happiness, or hard times without the people you love.`,
    author: `J Cole`
  },
  {
    message: `Love yourself girl, or nobody will.`,
    author: `J Cole`
  },
  {
    message: `On the road to riches, listen, this is what you find, the good news is nigga you came a long way, the bad news is nigga you went the wrong way.`,
    author: `J Cole`
  },
  {
    message: `Some niggas make millions, other niggas make memes.`,
    author: `J Cole`
  },
  {
    message: `  I'm loving your light, vulnerable, Letting your guard down is honorable, 'Specially when the past ain't been that friendly to you, but there's magic in that. You the flower that I gotta protect.`,
    author: `J Cole`
  },
  {
    message: ` I can see behind the smoke and mirrors. Niggas ain't really big as they seem.`,
    author: `J Cole`
  },
  {
    message: `She my number one I don't need nothing on the side.`,
    author: `J Cole`
  },
  {
    message: `They let a brother steer a ship but never told him that the ship was sinking.`,
    author: `J Cole`
  },
  {
    message: `Right now I'm starin' out the window of my Range and contemplating, am I sane? Have I sacrificed for fame? Thought that I could change it all if I had change. But the niggas that I came up with way back is still the same`,
    author: `J Cole`
  },
  {
    message: `Well this has gotta be the longest crush ever. If I ever get to fuck, it'd be the longest bust ever.`,
    author: `J Cole`
  },
  {
    message: `Writin' words, hopin' people observe the dedication, That stirs in you constantly, but intentions get blurred. Do I do it for the love of the music or is there more to me? Do I want these niggas to worship me? False prophets…`,
    author: `J Cole`
  },
  {
    message: `I hope you know money won't erase the pain.`,
    author: `J Cole`
  },
  {
    message: `Done did a lot of dirt I’ll bury with me when I’m gone, When my story’s told, how will they tell it? Will they say I was a giver or remember I was selfish? Will they say I was a sinner or pretend I was a saint? Will I go down as a winner, what's the picture they gon' paint? Wouldn’t say that I’m a quitter, that's one thing I know I ain't.`,
    author: `J Cole`
  },
  {
    message: `I grew up in the city and though sometimes we had less. Compared to some of my niggas down the block, man, we were blessed.`,
    author: `J Cole`
  },

  {
    message: `Spinning in circles, live my life without rehearsal. If I die today my nigga was it business? Was it personal? Should this be my last breath I'm blessed because it was purposeful.`,
    author: `J Cole`
  },
  {
    message: `Sometimes I think pain is just a lack of understanding, If we could only understand it all, would we feel no pain? God must feel no pain.`,
    author: `J Cole`
  },

  {
    message: `The music becomes more pure and soulful when it’s true, and it has to be true these days with the way the internet works, and the way the game works, everyone wants authentic raps.`,
    author: `J Cole`
  },
  {
    message: `There’s a story behind every person, a reason why they are the way they are. So, think about that before you judge someone.`,
    author: `J Cole`
  },
  {
    message: `I had a lot of resistance, and not just to fame. I was always conscious of not changing.`,
    author: `J cole`
  },
  {
    message: `I keep my head high, I got my wings to carry me. I don’t know freedom, I want my dreams to rescue me.`,
    author: `J Cole`
  },
  {
    message: `Believe in God like the sun up in the sky, see science can tell us how but it can’t tell us why. I seen a baby cry then seconds later she laughed, the beauty of life the pain never lasts.`,
    author: `J Cole`
  },
  {
    message: `So here we are… it’s funny how so close can seem so far.`,
    author: `J Cole`
  },
  {
    message: `Either you play the game or let the game play you and be that broke sucka talkin ‘bout I stayed true.`,
    author: `J Cole`
  },
  {
    message: `I walk along this long harbor of life and sit on the piers, reflect on my pain and shit on my fears.`,
    author: `J Cole`
  },
  {
    message: `Tables do turn and labels do burn, The second they ask you to sell your soul, Don’t you do it, don’t you fold, Say fuck that shit and be bold`,
    author: `J Cole`
  },
  {
    message: `Things change, rearrange, or so do I, It ain’t always for the better, dawg, I can’t lie, I get high ’cause the lows can be so cold, I might bend a little bit but I don’t fold.`,

    author: `J Cole`
  },
  {
    message: `Cause this life get hard on this road, yeah it’s true, I don’t ever tell you how much I be stressin’, but I do, But I suck it up for who? My fans, and my mans, Who probably never ever had this type of lifestyle in the plans.`,
    author: `J Cole`
  },
  {
    message: `The truth is, we all the same. On different teams, but it’s all a game.`,
    author: `J Cole`
  },
  {
    message: `You are perfect exactly as you are.`,
    author: `J Cole`
  },
  {
    message: `Always smile in the morning it makes people wonder what you did last night.`,
    author: `J Cole`
  },
  {
    mesage: `Free your mind and everything follow.`,
    author: `J Cole`
  },
  {
    message: `Money can’t buy you love cause it’s overpriced.`,
    author: `J Cole`
  },
  {
    message: `Gotta learn when you get hurt.`,
    author: `J Cole`
  },
  {
    message: `I dedicate these words to you and all the other children affected by the mass incarceration in this nation. That sent your pops to prison when he needed education, Sometimes I think that segregation would've done us better, Although I know that means that I would never be brought into this world 'cause my daddy was so thrilled when he found him a white girl to take back to Jonesboro`,
    author: `J Cole`
  },
  {
    mesage: `And the drought got me prayin' for a Carl Thom vibe "Summer Rain" come again, Numb the pain 'cause it's hard for a felon`,
    author: `J Cole`
  },
  {
    message: `Yeah, my intuition is telling me there'll be better days, I sit in silence and find whenever I meditate. My fears alleviate, my tears evaporate. My faith don't deviate, ideas don't have a date.`,
    author: `J Cole`
  },
  {
    message: `  Yeah, I don't want no picture with the President, I just wanna talk to the man. Speak for the boys in the bando, And my niggas never walkin’ again.`,
    author: `J Cole`
  },
  {
    message: `  I wanna cry, and I ain't even tryna fight it, Don't wanna die, cause now you're here. And I just wanna be right by your side .`,
    author: `J Cole`
  },
  {
    message: `Niggas from the hood is the best actors, We the ones that got to wear our face backwards. Put your frown on before they think you soft, Never smile long or take your defense off.`,
    author: `J Cole`
  },
  {
    message: `My 16 should've came with a coffin. Fuck the fame and the fortune—well, maybe not the fortune. But one thing is for sure though, the fame is exhausting.`,
    author: `J Cole`
  },
  {
    message: `Yeah, my chosen religion: Jesus piece frozen from sinnin' Doin' dirt hoping to God, He know my intentions.`,
    author: `J Cole`
  },
  {
    message: `'Cause you a star—no, not the type that snort the white lines, I mean the type to light the night time, I heard you got a man.`,
    author: `J Cole`
  },

  {
    message: `See, I believe if God is real, he'd never judge a man, Because he knows us all and therefore he would understand. The ignorance that make a nigga take his brother's life, The bitterness and pain that got him beating on his wife.`,
    author: `J Cole`
  },
  {
    message: `You call it runnin', I call it escapin'. Start a new life in a foreign location. Similar to my niggas duckin' cases. Can't take the possible time that it faces.`,
    author: `J Cole`
  },
  {
    message: `This is hell and I don't mean that hyperbolic, I try to find employment even if it's wiping toilets. But these felonies be making life the hardest. Resisting the temptation to run up and swipe a wallet.`,
    author: `J Cole`
  },
  {
    message: `I catch your eye then look away as if it never happened. At times I feel as though I'm caught up in a strange dream. If eyes could talk then mines would tell you that I'm feeling you. Sometimes I swear your eyes be telling me the same thing.`,
    author: `J Cole`
  },
  {
    message: `Have you ever heard the screams when the body hit the floor? Flashbacks to the pain, wakin' up, cold sweats. Six o'clock in the mornin', gotta hit the Bowflex.`,
    author: `J Cole`
  },

  {
    message: `Love is a drug, like the strongest stuff ever.`,
    author: `J cole`
  },
  {
    message: `I feel like this: Whatever is in your path and in your heart, you need to do.`,
    author: `J Cole`
  },
  {
    message: `Follow your heart. Don’t follow what you’ve been told you’re supposed to do.`,
    author: `J Cole`
  },
  {
    message: `We got dreams and we got the right to chase ’em.`,
    author: `J Cole`
  },
  {
    message: `I keep my head high, I got my wings to carry me. I don’t know freedom, I want my dreams to rescue me.`,
    author: `J Cole`
  },
  {
    message: `Never give up until you’ve given out all your very best. It’s better to fail trying, than wondering what could have happened if you tried.`,
    author: `J Cole`
  },
  {
    message: `It’s beauty in the struggle, ugliness in the success.`,
    author: `J Cole`
  },
  {
    message: `To appreciate the sun, you gotta know what rain is.`,
    author: `J Cole`
  },
  {
    message: `Anything’s possible, you gotta dream like you never seen obstacles.`,
    author: `J Cole`
  },
  {
    message: `If you ain’t aim too high, then you aim too low!`,
    author: `J Cole`
  },
  {
    message: `Take a chance, because you never know how perfect something can turn out.`,
    author: `J Cole`
  },
  {
    message: `They say time is money but really, it’s not. If we ever go broke, time is all we got.`,
    author: `J Cole`
  },
  {
    message: `Sometimes our dreams come true, sometimes our fears do too.`,
    author: `J Cole`
  },
  {
    message: `You are perfect exactly as you are. With all your flaws and problems, there’s no need to change anything. All you need to change is the thought that you aren’t good enough.`,
    author: `J Cole`
  },
  {
    message: `I’d rather be happy being myself than sad trying to please everyone else.`,
    author: `J Cole`
  },
  {
    message: `I’ve always been an underdog. I feel like I beat the odds.`,
    author: `J Cole`
  },
  {
    message: `I always feel like it’s two key ingredients when it comes to following your dreams, making something happen that the average person deems difficult. If you truly believe it, that’s step one. Step two, is, you know, the hard work that goes along with it.`,
    author: `J Cole`
  },
  {
    message: `One thing you should know about me is I never play to lose. Always aim high and rarely obey the rules.`,
    author: `J Cole`
  },
  {
    message: `Niggas congratulate me. I just tell them God is good.`,
    author: `J Cole`
  },
  {
    message: `Keep grindin’ boy, your life can change in one year, And even when it’s dark out, the sun is shining somewhere.`,
    author: `J Cole`
  },
  {
    message: `You have to hurt in order to know. Fall in order to grow. Lose in order to gain. Because most of life’s lessons are learned in pain.`,
    author: `J Cole`
  },
  {
    message: `If they don’t know your dreams, they can’t shoot them down.`,
    author: `J Cole`
  },
  {
    message: `Anything I do, I want to do it well.`,
    author: `J Cole`
  },
  {
    message: `I’m here to spread a message of hope. Follow your heart. Don’t follow what you’ve been told you’re supposed to do.`,
    author: `J Cole`
  },
  {
    message: `I want people to follow their dreams, yes… but I’m not interested in telling young black kids how to be rappers… I want to show them that there’s so many other paths you can take, besides a rapper or basketball player.`,
    author: `J Cole`
  },
  {
    message: `My life accelerated, but had to wait my turn. But then I redecorated, that means my tables turn.`,
    author: `J Cole`
  },
  {
    message: `No such thing as a life that’s better than yours, no such thing – no such thing…`,
    author: `J Cole`
  },
  {
    message: `Hard to move on when you always regret one.`,
    author: `J Cole`
  },
  {
    message: `If I was to go to sleep before midnight, I would feel weird about myself, like I wasted a day. My most productive hours are between midnight and five.`,
    author: `J Cole`
  },
  {
    message: `In this life ain’t no happy endings. Only pure beginnings followed by years of sinning and fake repentance.`,
    author: `J Cole`
  },
  {
    message: `The same ones you love will bring you pain.`,
    author: `J Cole`
  },
  {
    message: `I’m a super-duper over-analyzer. You mix that with self-doubt and pressure, and that’s never healthy.`,
    author: `J Cole`
  },
  {
    message: `In a game full of liars it turns out that I’m the truth. Some say that rap’s alive. It turns out that I’m the proof.`,
    author: `J Cole`
  },
  {
    message: `People think because I’ve got some success, I’ve made it, but in my eyes it’s like, ‘How long has Jay Z been in the business? How many albums has he got?’ Not that I’m trying to be Jay Z, but I am trying to be around for a long time.`,
    author: `J Cole`
  },
  {
    message: `Life is a movie, pick your own role, Climb your own ladder or you dig your own hole.`,
    author: `J Cole`
  },
  {
    message: `Nothing lasts forever, but at least we’ve got these memories.`,
    author: `J Cole`
  },
  {
    message: `Am I about dollars or about change? Am I about knowledge or brains? Freedom or big chains? They don’t feel my pain.`,
    author: `J Cole`
  },
  {
    message: `I’m half-black, half-white, so I basically put it like this: I can fit in anywhere. That’s why I write so many stories from so many different perspectives, because I’ve seen so many.`,
    author: `J Cole`
  },
  {
    message: `I just feel like, with rappers, there’s so much complacency. It’s like, ‘Oh, I’m a rapper. I’m successful. I make money. That’s all that matters. But there’s a lot of stuff going on in the world. Whether or not you’re aware of it, it’s happening.`,
    author: `J Cole`
  },
  {
    message: `No rapper in the world from Jay-Z to Tupac to Biggie has 100 percent love on everything they do.`,
    author: `J Cole`
  },
  {
    message: `I had a lot of resistance, and not just to fame. I was always conscious of not changing.`,
    author: `J Cole`
  },
  {
    message: `I’m not gonna be bad at anything, and I want to actually be the best at anything I’m doing. So if I’m playing basketball, if I’m taking the SATs, like, there’s a competitive spirit behind it. With production, it’s the same thing.`,
    author: `J Cole`
  },
  {
    message: `I do put a lot of God in my music, but not because I’m super religious. There are a lot of demons in my music, too. I acknowledge both.`,
    author: `J Cole`
  },
  {
    message: `There was the time I bought three cars in the span of three or four weeks. It was crazy; it wasn’t greedy. It was mine, my girl’s, my mom’s. I got Benzes for my ladies. But I felt crazy. You have to understand I come from a world where we’re very modest. But that’s not greedy. That’s nice, right?`,
    author: `J Cole`
  },
  {
    message: `You can’t reverse fame. You can lose all the money, but you’ll never lose people knowing you.`,
    author: `J Cole`
  },
  {
    message: `I actually started off majoring in computer science, but I knew right away I wasn’t going to stay with it. It was because I had this one professor who was the loneliest, saddest man I’ve ever known. He was a programmer, and I knew that I didn’t want to do whatever he did.`,
    author: `J Cole`
  },
  {
    message: `I struggled with being a broke college graduate, and while all my friends were getting career jobs, I was working horrible part-time jobs. That’s why now, even when I get tired, I think, ‘This is what I asked for’.`,
    author: `J Cole`
  },
  {
    message: `As much as it might look like, to someone else, that I’m successful, I never feel like I’m anywhere. The further I go, I still feel equally further from my eventual goal. Because as I grow, I get more goals. I’m never content.`,
    author: `J Cole`
  },
  {
    message: `When I was in college my girl got me a job at the doctor’s office she was working at. I was a file clerk. No disrespect but I don’t think a man can do that job. It takes so much meticulous and precise file-keeping.`,
    author: `J Cole`
  },
  {
    message: `I have a little bit of that gamer spirit in me. I just don’t have the time to be a gamer. But in another life, I would be one.`,
    author: `J Cole`
  },
  {
    message: `College isn’t in everyone’s hearts. I am living proof, though, that school doesn’t mess up your plans. It gives you more experiences to write about.`,
    author: `J Cole`
  },
  {
    message: `I pay attention to lyrics and I know what rap fans care about. I try to write for the average listener and I’m conscious of the mainstream without selling out.`,
    author: `J Cole`
  },
  {
    message: `The thing about being an artist today is you get to develop right in front of people’s eyes before you even put out an album.`,
    author: `J Cole`
  },
  {
    message: `I worked in ad sales. I would call up local businesses and try to get them to buy ads in the paper. The whole time, I felt like I was just scamming people.`,
    author: `J Cole`
  },
  {
    message: `There’s still value in a CD, even if it’s just nostalgic. People are still willing to pay. But it can’t compare to a digital-only release where you can control the exact time that it’ll come out, you know what I mean? So whoever finds how to bridge that gap is gonna make a lot of money.`,
    author: `J Cole`
  },
  {
    message: `There’s always people out there that’s like, doubting me, you know what I mean? Even though I do embrace the people that embrace me and I’m grateful for them. But I always feel like, man, there’s still people out there that’s not giving it up. And I feel like I’m doing everything the right way, you know what I mean? I’m really going out of my way to do it the right way. I’m taking very few cheats – very few cheat codes that I’m using.`,
    author: `J Cole`
  },
  {
    message: `Producing all my own songs and refusing to go to the hot producer. That’s the biggest risk I’ve taken so far.`,
    author: `J Cole`
  },
  {
    message: `It’s no coincidence that all the greatest rappers – whoever you put in your top five – I guarantee you they are great storytellers.`,
    author: `J Cole`
  },
  {
    message: `One day, I’ll be listening to a bunch of Ray Charles, the next day it’s nothing but Red Hot Chili Peppers. The next day it might be Tupac all day.`,
    author: `J Cole`
  },
  {
    message: `Tupac was just so passionate about what he believes in and not afraid to say anything.`,
    author: `J Cole`
  },
  {
    message: `The thing about being an artist today is you get to develop right in front of people’s eyes before you even put out an album.`,
    author: `J Cole`
  },
  {
    message: `When you’re a rapper, just a rapper, you have to kind of settle for whatever comes your way – if a beat is hot, you wanna rap on it, period.`,
    author: `J Cole`
  },
 
 {
    message: `My parents were divorced by the time I was even conscious – like, I don’t remember them ever being together.`,
    author: `J Cole`
  },
  {
    message: `I met Will Smith twice. I didn’t talk to him for too long but I was trying to let him know that my age group grew up watching him – he was the coolest guy on television and the coolest guy in movies.`,
    author: `J Cole`
  },
  {
    message: `I don’t like to think of it as being fired. Instead, I prefer to think of it as being on indefinite leave with a sabbatical flair.`,
    author: `J Cole`
  },
  {
    message: `I’m not a conscious rapper, all those things we talk about, the struggle, the pain, the outlook to the future, keep your head up. I try to put all those positive things into a regular human character, which is myself.`,
    author: `J Cole`
  },
  {
    message: `I still wanna rap better than everybody else, and I wanna say important things.`,
    author: `J Cole`
  },
 
 {
    message: `Life can bring much pain. There are many ways to deal with this pain. Choose wisely.`,
    author: `J Cole`
  },
  {
    message: `You coulda bought a crib with all that bread that you done blew, I know you think this type of revenue is never endin’ But I wanna take a minute just to tell you that ain’t true.`,
    author: `J Cole`
  },
  {
    message: `Every loser gotta win and every winner gotta lose someday`,
    author: `J Cole`
  },
  {
    message: `Life is all about the evolution.`,
    author: `J Cole`
  },
  {
    message: `My life is too crazy, no actor could play me.`,
    author: `J Cole`
  },
  {
    message: `But see I’m growing and getting stronger with every breath.`,
    author: `J Cole`
  },
  {
    message: `Time will tell who is on my side.`,
    author: `J Cole`
  },
  {
    message: `Every time you go to sleep you look like you in Heaven.`,
    author: `J Cole`
  },
  {
    message: `  And the strongest drug of them all – Love.`,
    author: `J Cole`
  },
  {
    message: `Fell in love through photograph I don’t even know your name.`,
    author: `J Cole`
  },
  {
    message: `Love today’s gone digital...and it’s messing with my health.`,
    author: `J Cole`
  },
  {
    message: `Don’t wanna die, ’cause now you’re here, And I just wanna be right by your side.`,
    author: `J Cole`
  },
  {
    message: `I fell in love with you before I ever even knew, I catch your eye then look away as if it never happened.`,
    author: `J Cole`
  },
  {
    message: `Catch me, I’ve fallen in love for the first time.`,
    author: `J Cole`
  },
  {
    message: `You are now the reason that I fight, I ain’t never did nothing this right in my whole life. `,
    author: `J Cole`
  },
  {
    message: `I know Heaven is a mind state, I’ve been a couple times.`,
    author: `J Cole`
  },
  {
    message: `I put my hand to the sky, I sing Grateful for the blessings you bring. Thank you for the ones I love, Forgive me for the times I was Down and confused, I know What I reap is what I will sow.
    `,
    author: `J Cole`
  },
  {
    message: `I know that vengeance is the Lord’s and it’s not for me.`,
    author: `J Cole`
  },
  {
    message: `See I believe if God is real, He’d never judge a man, Because He knows us all and therefore He would understand. The ignorance that make a nigga take his brother life. The bitterness and pain that got him beating on his wife.
    `,
    author: `J Cole`
  },
  {
    message: `I know I’m blessed because yo’ stress is realer than anything I done been through.`,
    author: `J Cole`
  },
  {
    message: `As we speak I’m at peace, no longer scared to die.`,
    author: `J Cole`
  },
  {
    message: `Sometimes I think pain is just a lack of understanding, If we could only understand it all, would we feel no pain? God must feel no pain.`,
    author: `J Cole`
  },
  {
    message: `I no longer bury demons, I be a vessel for the truth until I’m barely breathing, I’m singing.`,
    author: `J Cole`
  },
  {
    message: `One thing about your demons they bound to catch up one day, I’d rather see you stand up and face them than run away.`,
    author: `J Cole`
  },
  {
    message: `I understand this message is not the coolest to say, But if you down to try it I know of a better way - Meditate.`,
    author: `J Cole`
  },
  {
    message: `Feels so right to let things go.`,
    author: `J Cole`
  },
  {
    message: `My intuition is telling me there’ll be better days.`,
    author: `J Cole`
  },
  {
    message: `I sit in silence and find whenever I meditate.`,
    author: `J Cole`
  },
  {
    message: `My fears alleviate, my tears evaporate, My faith don’t deviate, ideas don’t have a date.`,
    author: `J Cole`
  },
  {
    message: `I flip my misfortune and grow me a fortune.`,
    author: `J Cole`
  },
  {
    message: `If the pressure get too much for me to take and I break, Play this tape for my daughter and let her know my life is on it.`,
    author: `J Cole`
  },
  {
    message: `I was a fool, spent all my time ducking school, ducking cops, ducking rules, hugging blocks that don’t love you.`,
    author: `J Cole`
  },
  {
    message: `You can dream but don’t neglect the execution.`,
    author: `J Cole`
  },
  {
    message: `Time is short that’s what somebody told me.`,
    author: `J Cole`
  },
  {
    message: `I’m searching and praying and hoping for something, I know I’m gon’ see it, I know that it’s coming.`,
    author: `J Cole`
  },
  {
    message: `I had to cut some people off ’cause they was using me.`,
    author: `J Cole`
  },
  {
    message: `If practice made perfect, I’m practice’s baby.`,
    author: `J Cole`
  },
  {
    message: `At the bottom of the hourglass, Lies sand that represents the past. In which all of my demons rest. I’m calling out for help.`,
    author: `J Cole`
  },
  {
    message: `How ’bout you listen and never forget?.`,
    author: `J Cole`
  },
  {
    message: `What’s done in the dark will always find a way to shine.`,
    author: `J Cole`
  },
  {
    message: `My heart is big, I want to give too much.`,
    author: `J Cole`
  },
  {
    message: `I’m controlling my mind, the days are warm, The nights are cold, the lost is found, I’m found.`,
    author: `J Cole`
  },
  {
    message: `One thing about the men that’s controlling the pen that write history, they always seem to white-out they sins.`,
    author: `J Cole`
  },
  {
    message: `Just because yo’ dick can spray semen, it don’t mean that you ready to let go of yo’ childish ways.`,
    author: `J Cole`
  },
  {
    message: `I try to find employment even if it’s wiping toilets.`,
    author: `J Cole`
  },

  {
    message: `But the only real change come from inside.`,
    author: `J Cole`
  },
  {
    message: `I know that everything that glitters ain’t gold. I know the shit ain’t always good as it seems. But tell me till you get it how could you know?`,
    author: `J Cole`
  },
  {
    message: `One day y’all have to decide, who you gon’ be - A scary nigga or a nigga that’s gon’ rule like me.`,
    author: `J Cole`
  },
  {
    message: `Rejection makes you defensive, So you protect your pride with your reflexes. But life is a game with no reset on the end.`,
    author: `J Cole`
  },
  
  {
    message: `I put a lot of pressure on myself. I think something’s not good enough, and I won’t stop until I feel like I’ve made it. I’m never satisfied.`,
    author: `J Cole`
  },

  {
    message: `I’mma be here for a while. None of these clowns can hurt me.`,
    author: `J Cole`
  },

  
 {
    message: `You keep falling victim ‘cause you’re insecure, and when I tell you you’re beautiful you can’t be sure.`,
    author: `J Cole`
  },
  {
    message: `I don’t live for the accolades. I’m more so about the music. Making it, and putting it out. Those are the two best feelings.`,
    author: `J Cole`
  },
  {
    message: `I’ve got two Rolexes that I’m very proud of – a gold Presidential that was a gift and a white gold one I gifted myself. I’m trying to step my game up and get a few more of those.`,
    author: `J Cole`
  },
  {
    message: `Take a chance, because you never know how perfect something can turn out.`,
    author: `J Cole`
  },
  {
    message: `My fans love me for me, my beats, my rhymes.`,
    author: `J Cole`
  },
  {
    message: `In this life ain’t no happy endings; Only pure beginnings followed by years of sinning and fake repentance.`,
    author: `J Cole`
  },
  {
    message: `College isn’t in everyone’s hearts. I am living proof, though, that school doesn’t mess up your plans. It gives you more experiences to write about.`,
    author: `J Cole`
  },
  {
    message: `I feel like I’m a New Yorker because I really know the city. I actually tell the drivers where to go – I have this bad habit, I always question the drivers. I do that all the time because. I feel like I know the best way, when really it’s like, ‘Yo, man, shut up. This dude does this every day of his life.`,
    author: `J Cole`
  },
  {
    message: `If they don’t know your dreams, they can’t shoot them down.`,
    author: `J Cole`
  },
  {
    message: `There’s a story behind every person, a reason why they are the way they are. So, think about that before you judge someone.`,
    author: `J Cole`
  },
  {
    message: `No need to fix what God already put his paint brush on.`,
    author: `J Cole`
  },
  {
    message: `They say time is money but really, it’s not. If we ever go broke, time is all we got.`,
    author: `J Cole`
  },
  {
    message: `Promise to my momma I’ma make it to the Top… So I’ma keep climbing till my heartbeat drop.`,
    author: `J Cole`
  },
  {
    message: `I swear I walk with God, but the devil keeps following.`,
    author: `J Cole`
  },
  {
    message: `My real dream is to have a whole, like, buy a whole piece of land. Imagine, like, a long driveway. Like, a cul de sac-type street, with maybe, like, seven houses. Me be right here. Have my mom be able to be right here. My brother over here. My girl’s grandmother and family right here. Friends over there. That’s my real dream.`,
    author: `J Cole`
  },
  {
    message: `We got dreams and we got the right to chase ’em.`,
    author: `J Cole`
  },
  
  
  {
    message: `I want people to follow their dreams, yes… but I’m not interested in telling young black kids how to be rappers… I want to show them that there’s so many other paths you can take, besides a rapper or basketball player.`,
    author: `J Cole`
  },
  {
    message: `I seen a baby cry seconds later he laughs… the beauty of life, the pain never lasts.`,
    author: `J Cole`
  },
  {
    message: `I keep my head high, I got my wings to carry me. I don’t know freedom, I want my dreams to rescue me.`,
    author: `J Cole`
  },
  {
    message: `As we grow up, we realize it becomes less important to have a ton of friends and more important to have real ones.`,
    author: `J Cole`
  },
  {
    message: `I was just a goofy little funny kid, who was always getting sent to the principal. It wasn’t serious because I was smart. I wasn’t like a true troublemaker, just rambunctious – like, talkative and trying to be funny. That was me in middle-school.`,
    author: `J Cole`
  },
  {
    message: `One thing you should know about me is I never play to lose, Always aim high and rarely obey the rules.`,
    author: `J Cole`
  },
  {
    message: `For a few minutes you made me feel as if I actually meant something to someone.`,
    author: `J Cole`
  },
  {
    message: `If you place your importance on appreciation and love, that’s enough.`,
    author: `J Cole`
  },
  {
    message: `Get to know somebody and you really learn a lot about ‘em. Won’t be long before you start to doubt ‘em. Tell yourself you better off without ‘em. Then in time you will find can’t walk without ‘em.`,
    author: `J Cole`
  },
  {
    message: `You are perfect exactly as you are. With all your flaws and problems, there’s no need to change anything. All you need to change is the thought that you aren’t good enough.`,
    author: `J Cole`
  },
  {
    message: `Damn, cold world. I never thought I’d see the day that you’re my old girl.`,
    author: `J Cole`
  },
  {
    message: `I’m here to spread a message of hope. Follow your heart. Don’t follow what you’ve been told you’re supposed to do.`,
    author: `J Cole`
  },
  {
    message: `I think if I did something in the pop world right now, it would be for Rihanna. I’d love to do something production wise for her.`,
    author: `J Cole`
  },
  {
    message: `To appreciate the sun, you gotta know what rain is.`,
    author: `J Cole`
  },
  {
    message: `I pay attention to lyrics and I know what rap fans care about. I try to write for the average listener and I’m conscious of the mainstream without selling out.`,
    author: `J Cole`
  },
  {
    message: `So here we are… it’s funny how so close can seem so far.`,
    author: `J Cole`
  },
  {
    message: `Don’t let them taint your soul.`,
    author: `J Cole`
  },
  {
    message: `College had a great deal to do with my development as a person. I don’t know if I’d be the artist I was if it wasn’t for goin’ to school like that. School is a good place – it ain’t for everybody, but I think it’s for most people`,
    author: `J Cole`
  },
  {
    message: `My life accelerated, but had to wait my turn. But then I redecorated, that means my tables turn.`,
    author: `J Cole`
  },
  {
    message: `It’s beauty in the struggle, ugliness in the success.`,
    author: `J Cole`
  },
  {
    message: `I walk along this long harbor of life and sit on the piers, reflect on my pain and shit on my fears.`,
    author: `J Cole`
  },
  {
    message: `A little jealousy in a relationship is healthy. It’s always nice to know someone is afraid to lose you.`,
    author: `J Cole`
  },
  {
    message: `As much as it might look like, to someone else, that I’m successful, I never feel like I’m anywhere. The further I go, I still feel equally further from my eventual goal. Because as I grow, I get more goals. I’m never content.`,
    author: `J Cole`
  },
  
  {
    message: `Life is a movie, pick your own role, Climb your own ladder or you dig your own hole.`,
    author: `J Cole`
  },
  {
    message: `I’d rather be happy being myself than sad trying to please everyone else.`,
    author: `J Cole`
  },

  {
    message: `Just got paid what Cochrane got paid to free OJ`,
    author: `J Cole`
  }
];

export default class QuoteScreen extends Component {
  static navigationOptions = {
    title: "Quotes"
  };
  state = {
    activeQuoteIndex: Math.floor(Math.random() * quotes.length),
    isFontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Tulpen: require("../../assets/fonts/TulpenOne-Regular.ttf"),
      Prata: require("../../assets/fonts/Prata-Regular.ttf")
    });
    this.setState({
      isFontLoaded: true
    });
  }

  nextQuote = () => {
    const { activeQuoteIndex } = this.state;

    if (activeQuoteIndex < quotes.length) {
      this.setState({
        activeQuoteIndex:
          Math.floor(Math.random() * (quotes.length - 1 - 0 + 1)) + 0
      });
    }
  };

  render() {
    const activeQuote = quotes[this.state.activeQuoteIndex];
    const { isFontLoaded } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/jcole.png")}
          style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '100%' }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            <Text
              style={[
                styles.message,
                { backgroundColor: "transparent" },
                isFontLoaded && { fontFamily: "Tulpen" }
              ]}
            >
              {activeQuote.message}
            </Text>
            <Text
              style={[styles.author, isFontLoaded && { fontFamily: "Prata" }]}
            >
              {activeQuote.author}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          block={true}
          onPress={this.nextQuote}
          style={styles.button}
        >
          <Text>Next Quote</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#a9a9a9",
    justifyContent: "space-around"
  },
  message: {
    fontSize: 40,
    marginBottom: 20,
    color: "white",
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "space-around",
    
  },

  author: {
    fontSize: 30,
    color: "white"
  },

  button: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#1DA1F2",
    color: "white",
    marginTop: 50,
    alignItems: "center",
    padding: 10
  }
});


