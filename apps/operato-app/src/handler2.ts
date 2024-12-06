exports.hello = async (event: any) => {
    console.log('helo in ts language')
    let r:any = 10

    const total = r + r
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Operato is saying hello, but i dont want to test ${total}`,
      }),
    }
  }