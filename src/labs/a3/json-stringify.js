function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];

  return (
      <div>
        <h2>JSON Stringify</h2>
        squares = {JSON.stringify(squares)} <br/>
      </div>
  )
}

export default JsonStringify;