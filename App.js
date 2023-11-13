import { StyleSheet,Platform, Text, View, Button, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {useState} from "react";
import Header from './src/components/Header';
import { audio } from "expo-av";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsworking]= useState(false);
  const [time, setTime]= useState(25 * 60);
  const [currentTime, setCurrentTime]= useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);
}
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking(!isWorking);
      setTime(isWorking ? 300 : 1500); // 5 minutes for short break, 25 minutes for pomodoro
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  function handleStartStop() {
    playsound();
    setIsActive(!isActive);
    
  }

  async function playsound() {
    const { sound } = await Audio.sound.createasync(
      require("./assets/click.mp3")
    )
    await sound.playsound();

 return (
    <SafeAreaView 
    style={[styles.container, {backgroundColor: colors[currentTime]}]}> 
      <View 
      style={{
         flex: 1,
         paddinghoriontal:15,
         paddingTop: Platform.os === "android" && 30,
         }}>

        <Text style={styles.text}>Pomodoro</Text> 
        <Text style={styles.text}>{time}</Text> 
        <Header currentTime={currentTime} 
                setCurrentTime={setCurrentTime}
                setTime={setTime}/> 
        <Timer time={time}/>
        <TouchableOpacity onPress={handleStartStop} style={styles.Button}>
        <text style={{color: 'white', fontWeight: "bold" }}> 
        {isActive ? "STOP" : "START"}
        </text>
          </TouchableOpacity>       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
},
Button: {
  alignItems: "center",
  backgroundColor: "#333333",
  padding: 15,
  marginTop: 15,
  borderRadius: 15,
},

});