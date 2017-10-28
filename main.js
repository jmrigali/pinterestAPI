$(document).ready(function() {
  let $xhr= $.getJSON('https://api.pinterest.com/v1/', (data)=>{
    console.log(data)
  })
});
