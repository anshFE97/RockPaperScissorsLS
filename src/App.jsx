import { useCallback, useEffect, useState } from "react"
import Choices from "./components/Choices"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Rules from "./components/Rules"
import Result from "./components/Result"


function App() {
  const [rule, setRule] = useState(false)
  const [choice, setChoice] = useState("")
  const [housePick, setHousePick] = useState("")
  const [result, setResult] = useState("")
  const [score, setScore] = useState(0)

  const selectHousePick = () => {
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setHousePick(choices[randomIndex])
  };

  useEffect(() => {
    if (choice !== "") {
      selectHousePick();
    }
  }, [choice]);

  const handleWin = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
  }, []);


  const getResult = (choice, housePick) => {
    if (choice === housePick) {
      return setResult("Tie");
    } else if (
      (choice === "Rock" && (housePick === "Scissors" || housePick === "Lizard")) ||
      (choice === "Paper" && (housePick === "Rock" || housePick === "Spock")) ||
      (choice === "Scissors" && (housePick === "Paper" || housePick === "Lizard")) ||
      (choice === "Lizard" && (housePick === "Paper" || housePick === "Spock")) ||
      (choice === "Spock" && (housePick === "Scissors" || housePick === "Rock"))
    ) {
      setResult("You Win")
      return handleWin()
    } else {
      setResult("You Lose")
    }
  };

  useEffect(() => {
    getResult(choice, housePick);
  }, [choice, housePick]);

  const playAgain = () => {
    setChoice("")
    setHousePick("")
    setResult("")
  }

  const reset = () => {
    setChoice("")
    setHousePick("")
    setResult("")
    setScore(0)
  }

  return (
    <div className="flex justify-center h-[100vh] items-center bg-sky-950">
      <div className="flex h-[100vh] relative flex-col w-full justify-evenly  items-center">
        <Header score={score} />
        {
          !choice ? (
            <Choices setChoice={setChoice} />
          ) : (
            <Result 
            result={result} 
            playAgain={playAgain} 
            reset={reset}
            choice={choice}
            housePick={housePick}
            />
          )
        }
        <Footer setRule={setRule} />
        {
          rule && (
            <Rules setRule={setRule} />
          )
        }
      </div>
    </div>
  )
}

export default App
