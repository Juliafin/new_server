console.log('hello')




function listener() {
  $('button').click( (event) => {
    event.preventDefault();

    var a = $('input.a').val();
    var b = $('input.b').val();
    console.log(a, b)

    $.ajax({
      url: '/posting',
      method: 'POST',
      data: {
        hello: "this is a test",
        a:a,
        b:b
      }
    
    }).then ( (data) => {
      console.log(data, 'data')
      // console.log('data.c', data.c)
      $('p.c').text(`${data.data.c}`)
    }).catch ( (err) => {
      console.log(err, 'err')
    })
    

    
  })
}

listener();

