import ReactPost from './ReactPost'

const BulletinBoard = () => {
  let reactFacts = [
    {
      question: "Vad är tre fördelar med att använda React?",

      answer: "React är lätt att lära sig och är ett lightweight library lämpligt för SPAs. Dessutom är React ett bibliotek som är överlägset mest använt i dagsläget backat av ett jätteföretag och med en stor community som ständigt är med och utvecklar verktyg till biblioteket då React är Open Source. React är väldigt flexibelt och mångsidigt, vill du t ex programmera en mobilapp så kan du även använda dina React-kunskaper i frameworket React Native som är utvecklat för mobila appar som funkar både på iOS och Android då det är plattformsoberoende. ",
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",

      answer: "SPA – Single page application går ut på att du bygger hela din webapp på en och samma index.html fil. Istället för att göra tidskrävande serveranrop för att hämta nya html filer när du navigerar dig runt på en sida så stannar du med en SPA på samma sida. En SPA är byggd av flera s k dynamiska komponenter och browsern uppdaterar endast specifika komponenter på sidan när den får en request från användaren. Då en SPA bara gör ett server anrop vid initiering och resterande funktion är klientbaserad så fungerar de även i offline läge i högre utsträckning.  ",
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",

      answer: "React och Angular är båda två Open Source och används för att skapa single page applications. React är utvecklat av facebook medan Google står bakom Angular. Trots oklarheter kring begreppet så klassas React mer som ett Javascript men Angular å andra sidan är ett fullfjädrat ramverk som dessutom är typat by default, dvs byggs på Typescript. Till skillnad från React kan Angular tyvärr vara svårare för nybörjare att komma in i och har inte lika bra dokumentation. Tack vare sin virtuella DOM implementering och optimerad rendering av komponenter utan att behöva skriva ut hela HTML dokumentet på nytt så uppvisar React appar bättre prestanda. ",
    },
  ];
  return(
    <>
    {reactFacts.map((fact,i)=>{ return <ReactPost question={fact.question} answer={fact.answer} key={i}/>})}
    </>
  )
};

export default BulletinBoard
