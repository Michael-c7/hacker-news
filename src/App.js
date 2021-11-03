
function App() {

  let url = "https://hn.algolia.com/api/v1/search?query=javascript"
  const getData = async _ => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  }

  // getData()


  return (
    <div>
      hello world
    </div>
  );
}

export default App;
