const { request, response } = require("express");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      detail: "Hellooooooooooo"
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      detail:"Nooooooo"
    }
  ];
  
module.exports={
    getHome:(request,response)=>{
         response.render("index",{title: "Mini Messageboard",messages:messages})
    },

    getForm:(request,response)=>{
        console.log(request.body)
        messages.push({text:request.body.messageText,user:request.body.userName,added:new Date(),detail:"awesomeeeeeeee"})
        response.redirect("/")
    },
    fillForm:(request,response)=>{
       response.render("form")
    },
    getDetail:(request,response)=>{
        let user=request.params.user
       
        response.render("detail",{messages:messages,user:user})
    }

}
