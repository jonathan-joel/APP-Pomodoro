
import { StyleSheet,Platform, Text, View, Button, SafeAreaView } from 'react-native';
import {useState} from "react";
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsworking]= useState(false);
  const [time, setTime]= useState(25 * 60);
  const [currentTime, setCurrentTime]= useState("POMO" | "SHORT" | "BREAK");


  return (
    <SafeAreaView style={styles.container}> 
      <View style={{paddingTop: Platform.os === "android" && 30}}>
        <Text style={styles.text}>Pomodoro</Text> 
        <Text style={styles.text}>{time}</Text>      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
},
});
